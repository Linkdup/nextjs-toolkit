"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireProject = exports.loadProject = exports.initProject = void 0;
var __project;
var initProject = function (project) { return __project = project; };
exports.initProject = initProject;
var loadProject = function () { return __project; };
exports.loadProject = loadProject;
var requireProject = function () {
    if (!__project) {
        throw new Error("Project is not set. Did you forget to call initProject()?");
    }
    return __project;
};
exports.requireProject = requireProject;
//# sourceMappingURL=project.js.map