"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var StaticQueryContext_1 = require("./StaticQueryContext");
var getCacheKey_1 = __importDefault(require("../utils/getCacheKey"));
var useStaticQuery = function (gqlQuery) {
    var _a;
    var staticQueries = (0, react_1.useContext)(StaticQueryContext_1.StaticQueryContext);
    var cacheKey = (0, getCacheKey_1.default)(gqlQuery);
    if (cacheKey) {
        var result = (_a = staticQueries[cacheKey]) !== null && _a !== void 0 ? _a : null;
        return result;
    }
    return null;
};
exports.default = useStaticQuery;
//# sourceMappingURL=useStaticQuery.js.map