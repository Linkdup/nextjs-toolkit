import path from "path"
import fs from "fs"
import { transpileModule } from "typescript"
import dotenv from "dotenv"
import cache from "../cache/cache"
import { ProjectConfig } from "../../../types"
import getProjectDir from "./getProjectDir"


const bootProjectConfig = (): ProjectConfig => {
  const projectDir = getProjectDir()
  if (!projectDir) {
    throw new Error(`Cannot determine project root from ${__dirname}`)
  }
  const configFilePath = path.join(projectDir, `ss.config.ts`)
  const tsSource = fs.readFileSync(configFilePath, { encoding: `utf8` })
  const jsSource = transpileModule(tsSource, {
    compilerOptions: {
      esModuleInterop: true,
      skipLibCheck: true,
    },
  })

  const envPath = path.join(projectDir, `.env`)
  dotenv.config({ path: envPath })

  const cachePath = path.join(projectDir, `.cache`)
  cache.init(cachePath)

  return eval(jsSource.outputText)

}
export default bootProjectConfig
