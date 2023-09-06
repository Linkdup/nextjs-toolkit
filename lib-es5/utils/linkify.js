"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkify = void 0;
var linkify = function (link) {
    var clean = link.replace(/\/$/g, "");
    if (!clean) {
        return "/";
    }
    return clean;
};
exports.linkify = linkify;
exports.default = exports.linkify;
//# sourceMappingURL=linkify.js.map