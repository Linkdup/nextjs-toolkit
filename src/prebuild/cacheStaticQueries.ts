import { extractStaticQueries } from "../staticQuery/staticQueryExtractor"
import { getCacheKey } from "../cache/getCacheKey"
import cache from "../cache/cache"
import createClient from "../graphql/createClient"
import { ProjectConfig } from "../../types"

export default async (ssConfig: ProjectConfig): Promise<void> => {
    // Extract static queries, and put them in the cache
    const queries = extractStaticQueries(`${process.cwd()}/src/**/*.{js,jsx,ts,tsx}`)
    if (queries.length > 0) {
        console.log(`Static queries extracted: ${queries.length}`)
    }

    const api = createClient(ssConfig)

    const staticQueries: { [key: string]: unknown } = {}
    const promises = queries.map(query => {
        return new Promise<void>((resolve) => {
            api.query(query).then((result) => {
                const key = getCacheKey(query)
                if (key) {
                    staticQueries[key] = result
                }
                resolve()
            })
        })
    })
    return Promise.all(promises)
        .then(() => {
            cache.writeFile(`.staticQueries.json`, JSON.stringify(staticQueries))
        })
}