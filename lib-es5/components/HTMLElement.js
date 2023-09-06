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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var html_react_parser_1 = __importStar(require("html-react-parser"));
var node_1 = require("domhandler/lib/node");
var BASE_URL = process.env.SILVERSTRIPE_BASE_URL;
var options = {
    replace: function (domNode) {
        var _a;
        if (domNode instanceof node_1.Element && domNode.tagName === "img") {
            var props = (0, html_react_parser_1.attributesToProps)(domNode.attribs);
            var originalSrc = ((_a = props.src) !== null && _a !== void 0 ? _a : "").replace(/^\/+/, "");
            if (!originalSrc.match(/^https?:\/\//i)) {
                props.src = "".concat(BASE_URL, "/").concat(originalSrc);
            }
            return react_1.default.createElement("img", __assign({}, props));
        }
        return domNode;
    }
};
var HTMLElement = function (_a) {
    var html = _a.html;
    if (!html) {
        return null;
    }
    return react_1.default.createElement(react_1.default.Fragment, null, (0, html_react_parser_1.default)(html, options));
};
exports.default = HTMLElement;
//# sourceMappingURL=HTMLElement.js.map