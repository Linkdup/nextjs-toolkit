"use strict";
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
const react_1 = __importDefault(require("react"));
const html_react_parser_1 = __importStar(require("html-react-parser"));
const node_1 = require("domhandler/lib/node");
const BASE_URL = process.env.SILVERSTRIPE_BASE_URL;
const options = {
    replace: domNode => {
        var _a;
        if (domNode instanceof node_1.Element && domNode.tagName === `img`) {
            const props = (0, html_react_parser_1.attributesToProps)(domNode.attribs);
            const originalSrc = ((_a = props.src) !== null && _a !== void 0 ? _a : ``).replace(/^\/+/, ``);
            if (!originalSrc.match(/^https?:\/\//i)) {
                props.src = `${BASE_URL}/${originalSrc}`;
            }
            return react_1.default.createElement("img", Object.assign({}, props));
        }
        return domNode;
    }
};
const HTMLElement = ({ html }) => {
    if (!html) {
        return null;
    }
    return react_1.default.createElement(react_1.default.Fragment, null, (0, html_react_parser_1.default)(html, options));
};
exports.default = HTMLElement;
//# sourceMappingURL=HTMLElement.js.map