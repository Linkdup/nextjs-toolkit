import { PageInterface } from "./utils";
export interface NavigationTools<T> {
    isLevel: (level: number) => boolean;
    hasChildren: () => boolean;
    getChildren: () => Array<T>;
    inSection: (section: string) => boolean;
    getPeers: () => Array<T>;
}
declare const useNavigationState: <T extends PageInterface>(page: T) => NavigationTools<T>;
export default useNavigationState;
