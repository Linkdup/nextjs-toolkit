import React from "react";
import { NextRouter } from "next/router";
import { PageInterface } from "./utils";
export interface NavState<T> {
    current: boolean;
    linkingMode: "current" | "section" | "link";
    level: number;
    first: boolean;
    last: boolean;
    even: boolean;
    odd: boolean;
    pos: number;
    key: number | string;
    hasChildren: boolean;
    children: Array<T>;
    slug: string;
}
interface Props<T extends PageInterface> {
    router: NextRouter;
    items: Array<T>;
    children: (child: T, state: NavState<T>) => React.ReactNode;
}
declare const Navigation: <T extends PageInterface>({ router, items, children }: Props<T>) => React.ReactElement;
export default Navigation;
