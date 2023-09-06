import React from "react";
export interface StaticQueryContextValue {
    [key: string]: any;
}
export declare const StaticQueryContext: React.Context<StaticQueryContextValue | null>;
