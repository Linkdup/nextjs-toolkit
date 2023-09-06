"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphqlUtils_1 = require("./graphqlUtils");
var graphql_1 = require("graphql");
// @ts-ignore
var gql_compress_1 = __importDefault(require("gql-compress"));
// @ts-ignore
var crypto_browserify_1 = __importDefault(require("crypto-browserify"));
var getCacheKey = function (query, variables) {
    var _a;
    if (variables === void 0) { variables = {}; }
    var document = (0, graphql_1.parse)(query);
    var operationName = (_a = (0, graphqlUtils_1.getOperationName)(document)) !== null && _a !== void 0 ? _a : "";
    var md5sum = crypto_browserify_1.default.createHash("md5");
    md5sum.update((0, gql_compress_1.default)(query));
    md5sum.update(JSON.stringify(variables));
    var hash = md5sum.digest("hex");
    return "".concat(operationName, "--").concat(hash);
};
exports.default = getCacheKey;
//# sourceMappingURL=getCacheKey.js.map