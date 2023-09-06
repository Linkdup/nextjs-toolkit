"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const utils_1 = __importDefault(require("./utils"));
const linkify_1 = __importDefault(require("../utils/linkify"));
const Navigation = ({ router, items, children }) => {
    const { asPath } = router;
    const { isSection, hasChildren, getChildren } = (0, utils_1.default)();
    const navItems = items.map((page, i) => {
        var _a;
        page.link = (0, linkify_1.default)(page.link);
        const current = page.link === asPath;
        const section = isSection(page, asPath);
        const pos = i + 1;
        const state = {
            current,
            linkingMode: current ? `current` : (section ? `section` : `link`),
            pos: pos + 1,
            even: pos % 2 === 0,
            odd: pos % 2 === 1,
            first: pos === 1,
            last: pos === items.length,
            // todo: not a great heuristic. Maybe get this from the API
            level: page.link.split(`/`).length,
            key: (_a = page.hashID) !== null && _a !== void 0 ? _a : page.id,
            hasChildren: hasChildren(page),
            children: getChildren(page),
            slug: page.link.replace(/^\/|\/$/, ``)
        };
        if (!state.key) {
            console.warn(`
Found a nav item with no key property defined. Did you forget to add id or hashID to your GrpahQL query?
`);
        }
        return children(page, state);
    });
    return react_1.default.createElement(react_1.default.Fragment, null, navItems);
};
exports.default = Navigation;
//# sourceMappingURL=Navigation.js.map