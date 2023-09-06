"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphqlUtils_1 = require("./graphqlUtils");
const graphql_1 = require("graphql");
// @ts-ignore
const gql_compress_1 = __importDefault(require("gql-compress"));
// @ts-ignore
const crypto_browserify_1 = __importDefault(require("crypto-browserify"));
const getCacheKey = (query, variables = {}) => {
    var _a;
    const document = (0, graphql_1.parse)(query);
    const operationName = (_a = (0, graphqlUtils_1.getOperationName)(document)) !== null && _a !== void 0 ? _a : ``;
    const md5sum = crypto_browserify_1.default.createHash(`md5`);
    md5sum.update((0, gql_compress_1.default)(query));
    md5sum.update(JSON.stringify(variables));
    const hash = md5sum.digest(`hex`);
    return `${operationName}--${hash}`;
};
exports.default = getCacheKey;
//# sourceMappingURL=getCacheKey.js.map