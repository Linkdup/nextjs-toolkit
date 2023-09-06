"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const StaticQueryContext_1 = require("./StaticQueryContext");
const getCacheKey_1 = __importDefault(require("../utils/getCacheKey"));
const useStaticQuery = (gqlQuery) => {
    var _a;
    const staticQueries = (0, react_1.useContext)(StaticQueryContext_1.StaticQueryContext);
    const cacheKey = (0, getCacheKey_1.default)(gqlQuery);
    if (cacheKey) {
        const result = (_a = staticQueries[cacheKey]) !== null && _a !== void 0 ? _a : null;
        return result;
    }
    return null;
};
exports.default = useStaticQuery;
//# sourceMappingURL=useStaticQuery.js.map