"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var resolveAncestry_1 = __importDefault(require("../utils/resolveAncestry"));
var createPage = function (project) {
    return function (_a) {
        var _b;
        var data = _a.data, type = _a.type, templates = _a.templates;
        var _c = project.cacheManifest, typeAncestry = _c.typeAncestry, templateManifest = _c.templateManifest;
        // @ts-ignore    
        var ancestors = (_b = typeAncestry[type]) !== null && _b !== void 0 ? _b : [];
        var key = (0, resolveAncestry_1.default)(type, ancestors, templates);
        // @ts-ignore
        var Component = key ? templateManifest[key] : null;
        if (!Component) {
            throw new Error("No template found for ".concat(type, " (resolved to \"").concat(key, "\")"));
        }
        // @ts-ignore
        return react_1.default.createElement(Component, __assign({}, data));
    };
};
exports.default = createPage;
//# sourceMappingURL=createPage.js.map