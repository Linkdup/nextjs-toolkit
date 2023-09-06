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
var linkify_1 = __importDefault(require("../utils/linkify"));
function createNavigationUtils() {
    var getLevel = function (page) {
        if (!page.link) {
            return 0;
        }
        return page.link.split("/").length;
    };
    var isLevel = function (page, level) {
        return getLevel(page) >= level;
    };
    var getChildren = function (page) {
        var _a, _b;
        var children = (_b = (_a = page.navChildren) === null || _a === void 0 ? void 0 : _a.nodes) !== null && _b !== void 0 ? _b : [];
        return children.map(function (child) { return (__assign(__assign({}, child), { link: (0, linkify_1.default)(child.link) })); });
    };
    var getPeers = function (page) {
        var _a, _b, _c;
        return (_c = (_b = (_a = page.navParent) === null || _a === void 0 ? void 0 : _a.navChildren) === null || _b === void 0 ? void 0 : _b.nodes) !== null && _c !== void 0 ? _c : [];
    };
    var hasChildren = function (page) {
        return getChildren(page).length > 0;
    };
    var inSection = function (page, section) {
        return page.link.startsWith("".concat(section, "/"));
    };
    var isSection = function (page, section) {
        return section.startsWith("".concat(page.link, "/"));
    };
    return {
        getLevel: getLevel,
        isLevel: isLevel,
        getChildren: getChildren,
        hasChildren: hasChildren,
        getPeers: getPeers,
        inSection: inSection,
        isSection: isSection,
    };
}
exports.default = createNavigationUtils;
//# sourceMappingURL=utils.js.map