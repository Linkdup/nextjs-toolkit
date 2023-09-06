"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultPluraliser = (typeName) => {
    let plural = typeName;
    if (typeName.match(/[^aeiou]y$/i)) {
        plural = `${plural.slice(0, -1)}ie`;
    }
    return `${plural}s`;
};
exports.default = defaultPluraliser;
//# sourceMappingURL=pluraliser.js.map