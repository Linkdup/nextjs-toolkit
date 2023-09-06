"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkify = void 0;
const linkify = (link) => {
    const clean = link.replace(/\/$/g, ``);
    if (!clean) {
        return `/`;
    }
    return clean;
};
exports.linkify = linkify;
exports.default = exports.linkify;
//# sourceMappingURL=linkify.js.map