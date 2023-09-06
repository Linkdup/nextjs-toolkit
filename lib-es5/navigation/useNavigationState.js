"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importDefault(require("./utils"));
var useNavigationState = function (page) {
    var _a = (0, utils_1.default)(), isLevel = _a.isLevel, hasChildren = _a.hasChildren, inSection = _a.inSection, getChildren = _a.getChildren, getPeers = _a.getPeers;
    return {
        isLevel: function (level) {
            return isLevel(page, level);
        },
        hasChildren: function () {
            return hasChildren(page);
        },
        getChildren: function () {
            return getChildren(page);
        },
        inSection: function (section) {
            return inSection(page, section);
        },
        getPeers: function () {
            return getPeers(page);
        }
    };
};
exports.default = useNavigationState;
//# sourceMappingURL=useNavigationState.js.map