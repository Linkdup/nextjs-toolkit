"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const resolveAncestry_1 = __importDefault(require("../utils/resolveAncestry"));
const createPage = (project) => {
    return ({ data, type, templates }) => {
        var _a;
        const { typeAncestry, templateManifest } = project.cacheManifest;
        // @ts-ignore    
        const ancestors = (_a = typeAncestry[type]) !== null && _a !== void 0 ? _a : [];
        const key = (0, resolveAncestry_1.default)(type, ancestors, templates);
        // @ts-ignore
        const Component = key ? templateManifest[key] : null;
        if (!Component) {
            throw new Error(`No template found for ${type} (resolved to "${key}")`);
        }
        // @ts-ignore
        return react_1.default.createElement(Component, Object.assign({}, data));
    };
};
exports.default = createPage;
//# sourceMappingURL=createPage.js.map