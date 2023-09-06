interface StringMap {
    [key: string]: string;
}
declare const getCacheKey: (query: string, variables?: StringMap) => string | null;
export default getCacheKey;
