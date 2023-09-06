"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolveAncestry = function (type, ancestors, options) {
    var e_1, _a;
    var allAncestors = __spreadArray([type], __read(ancestors), false);
    try {
        for (var allAncestors_1 = __values(allAncestors), allAncestors_1_1 = allAncestors_1.next(); !allAncestors_1_1.done; allAncestors_1_1 = allAncestors_1.next()) {
            var ancestor = allAncestors_1_1.value;
            if (options.includes(ancestor)) {
                return ancestor;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (allAncestors_1_1 && !allAncestors_1_1.done && (_a = allAncestors_1.return)) _a.call(allAncestors_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
};
exports.default = resolveAncestry;
//# sourceMappingURL=resolveAncestry.js.map