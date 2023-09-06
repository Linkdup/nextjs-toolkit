"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultPluraliser = function (typeName) {
    var plural = typeName;
    if (typeName.match(/[^aeiou]y$/i)) {
        plural = "".concat(plural.slice(0, -1), "ie");
    }
    return "".concat(plural, "s");
};
exports.default = defaultPluraliser;
//# sourceMappingURL=pluraliser.js.map