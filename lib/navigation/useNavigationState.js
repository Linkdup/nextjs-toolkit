"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const useNavigationState = (page) => {
    const { isLevel, hasChildren, inSection, getChildren, getPeers } = (0, utils_1.default)();
    return {
        isLevel(level) {
            return isLevel(page, level);
        },
        hasChildren() {
            return hasChildren(page);
        },
        getChildren() {
            return getChildren(page);
        },
        inSection(section) {
            return inSection(page, section);
        },
        getPeers() {
            return getPeers(page);
        }
    };
};
exports.default = useNavigationState;
//# sourceMappingURL=useNavigationState.js.map