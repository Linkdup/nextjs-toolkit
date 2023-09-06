"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linkify_1 = __importDefault(require("../utils/linkify"));
function createNavigationUtils() {
    const getLevel = (page) => {
        if (!page.link) {
            return 0;
        }
        return page.link.split(`/`).length;
    };
    const isLevel = (page, level) => {
        return getLevel(page) >= level;
    };
    const getChildren = (page) => {
        var _a, _b;
        const children = (_b = (_a = page.navChildren) === null || _a === void 0 ? void 0 : _a.nodes) !== null && _b !== void 0 ? _b : [];
        return children.map(child => (Object.assign(Object.assign({}, child), { link: (0, linkify_1.default)(child.link) })));
    };
    const getPeers = (page) => {
        var _a, _b, _c;
        return (_c = (_b = (_a = page.navParent) === null || _a === void 0 ? void 0 : _a.navChildren) === null || _b === void 0 ? void 0 : _b.nodes) !== null && _c !== void 0 ? _c : [];
    };
    const hasChildren = (page) => {
        return getChildren(page).length > 0;
    };
    const inSection = (page, section) => {
        return page.link.startsWith(`${section}/`);
    };
    const isSection = (page, section) => {
        return section.startsWith(`${page.link}/`);
    };
    return {
        getLevel,
        isLevel,
        getChildren,
        hasChildren,
        getPeers,
        inSection,
        isSection,
    };
}
exports.default = createNavigationUtils;
//# sourceMappingURL=utils.js.map