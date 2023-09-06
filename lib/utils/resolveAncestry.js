"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolveAncestry = (type, ancestors, options) => {
    const allAncestors = [type, ...ancestors];
    for (const ancestor of allAncestors) {
        if (options.includes(ancestor)) {
            return ancestor;
        }
    }
    return null;
};
exports.default = resolveAncestry;
//# sourceMappingURL=resolveAncestry.js.map