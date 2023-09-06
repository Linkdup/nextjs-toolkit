"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireProject = exports.loadProject = exports.initProject = void 0;
let __project;
const initProject = (project) => __project = project;
exports.initProject = initProject;
const loadProject = () => __project;
exports.loadProject = loadProject;
const requireProject = () => {
    if (!__project) {
        throw new Error(`Project is not set. Did you forget to call initProject()?`);
    }
    return __project;
};
exports.requireProject = requireProject;
//# sourceMappingURL=project.js.map