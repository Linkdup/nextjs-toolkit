"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getBaseURL_1 = __importDefault(require("./getBaseURL"));
const getGraphQLEndpoint = () => {
    var _a;
    let path = (_a = process.env.SILVERSTRIPE_GRAPHQL_ENDPOINT) !== null && _a !== void 0 ? _a : `graphql`;
    path = path.replace(/^\/+/, ``);
    return `${(0, getBaseURL_1.default)()}/${path}`;
};
exports.default = getGraphQLEndpoint;
//# sourceMappingURL=getGraphQLEndpoint.js.map