"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = __importDefault(require("./utils"));
var linkify_1 = __importDefault(require("../utils/linkify"));
var Navigation = function (_a) {
    var router = _a.router, items = _a.items, children = _a.children;
    var asPath = router.asPath;
    var _b = (0, utils_1.default)(), isSection = _b.isSection, hasChildren = _b.hasChildren, getChildren = _b.getChildren;
    var navItems = items.map(function (page, i) {
        var _a;
        page.link = (0, linkify_1.default)(page.link);
        var current = page.link === asPath;
        var section = isSection(page, asPath);
        var pos = i + 1;
        var state = {
            current: current,
            linkingMode: current ? "current" : (section ? "section" : "link"),
            pos: pos + 1,
            even: pos % 2 === 0,
            odd: pos % 2 === 1,
            first: pos === 1,
            last: pos === items.length,
            // todo: not a great heuristic. Maybe get this from the API
            level: page.link.split("/").length,
            key: (_a = page.hashID) !== null && _a !== void 0 ? _a : page.id,
            hasChildren: hasChildren(page),
            children: getChildren(page),
            slug: page.link.replace(/^\/|\/$/, "")
        };
        if (!state.key) {
            console.warn("\nFound a nav item with no key property defined. Did you forget to add id or hashID to your GrpahQL query?\n");
        }
        return children(page, state);
    });
    return react_1.default.createElement(react_1.default.Fragment, null, navItems);
};
exports.default = Navigation;
//# sourceMappingURL=Navigation.js.map