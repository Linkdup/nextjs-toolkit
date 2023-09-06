type Linkable = {
    link: string;
};
interface Connection<T> {
    nodes: Array<T>;
}
export interface PageInterface {
    id: string;
    hashID: string;
    title?: string | null;
    link: string;
    navChildren: Connection<this>;
    navParent?: this | null;
}
interface NavUtils<T extends PageInterface> {
    getLevel<T extends Linkable>(page: T): number;
    isLevel<T extends Linkable>(page: T, level: number): boolean;
    getChildren(page: T): Array<T>;
    getPeers(page: T): Array<T>;
    hasChildren(page: T): boolean;
    inSection<T extends Linkable>(page: T, section: string): boolean;
    isSection<T extends Linkable>(page: T, section: string): boolean;
}
declare function createNavigationUtils<T extends PageInterface>(): NavUtils<T>;
export default createNavigationUtils;
