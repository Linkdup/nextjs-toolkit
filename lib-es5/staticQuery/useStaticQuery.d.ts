interface StaticQueryResult<T> {
    [key: string]: T;
}
declare const useStaticQuery: <T>(gqlQuery: string) => StaticQueryResult<T> | null;
export default useStaticQuery;
