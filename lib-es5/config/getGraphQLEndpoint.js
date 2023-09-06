"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getBaseURL_1 = __importDefault(require("./getBaseURL"));
var getGraphQLEndpoint = function () {
    var _a;
    var path = (_a = process.env.SILVERSTRIPE_GRAPHQL_ENDPOINT) !== null && _a !== void 0 ? _a : "graphql";
    path = path.replace(/^\/+/, "");
    return "".concat((0, getBaseURL_1.default)(), "/").concat(path);
};
exports.default = getGraphQLEndpoint;
//# sourceMappingURL=getGraphQLEndpoint.js.map