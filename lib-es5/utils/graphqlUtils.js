"use strict";
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
exports.hasPageInfoField = exports.fragmentHasField = exports.hasTopLevelField = exports.getFragments = exports.getFragmentFields = exports.getQueryFields = exports.getQueryName = exports.getQueryNode = exports.getQueryNodes = exports.getOperationName = void 0;
var graphql_1 = require("graphql");
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) { return definition.kind === 'OperationDefinition' && definition.name; })
        .map(function (x) {
        var node = x;
        return node.name.value;
    })[0] || null);
}
exports.getOperationName = getOperationName;
function getQueryNodes(doc) {
    var definitions = doc.definitions
        .filter(function (definition) { return (definition.kind === 'OperationDefinition' &&
        definition.name &&
        definition.operation === 'query'); });
    if (definitions.length !== 1) {
        return [];
    }
    var def = definitions[0];
    if (def.selectionSet.selections.length !== 1) {
        return [];
    }
    var queries = def.selectionSet.selections;
    return queries;
}
exports.getQueryNodes = getQueryNodes;
function getQueryNode(doc) {
    var _a;
    var queries = getQueryNodes(doc);
    return (_a = queries[0]) !== null && _a !== void 0 ? _a : null;
}
exports.getQueryNode = getQueryNode;
function getQueryName(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = getQueryNode(doc)) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
}
exports.getQueryName = getQueryName;
function getQueryFields(query) {
    var _a, _b;
    var doc = (0, graphql_1.parse)(query);
    var loc = (_b = (_a = getQueryNode(doc)) === null || _a === void 0 ? void 0 : _a.selectionSet) === null || _b === void 0 ? void 0 : _b.loc;
    if (!loc) {
        return null;
    }
    var _c = loc, start = _c.start, end = _c.end, startToken = _c.startToken, endToken = _c.endToken;
    return query.substring(start, end)
        .replace(new RegExp("^".concat(startToken.kind)), "")
        .replace(new RegExp("".concat(endToken.kind, "$")), "");
}
exports.getQueryFields = getQueryFields;
function getFragmentFields(fragment) {
    var doc = (0, graphql_1.parse)(fragment);
    var found = doc.definitions.find(function (def) { return def.kind === "FragmentDefinition"; });
    if (!found) {
        return null;
    }
    var fragmentNode = found;
    var loc = fragmentNode.selectionSet.loc;
    var _a = loc, start = _a.start, end = _a.end, startToken = _a.startToken, endToken = _a.endToken;
    return fragment.substring(start, end)
        .replace(new RegExp("^".concat(startToken.kind)), "")
        .replace(new RegExp("".concat(endToken.kind, "$")), "");
}
exports.getFragmentFields = getFragmentFields;
function getFragments(query) {
    var doc = (0, graphql_1.parse)(query);
    var fragments = [];
    doc.definitions.forEach(function (def) {
        if (def.kind !== "FragmentDefinition") {
            return;
        }
        var _a = def.loc, start = _a.start, end = _a.end;
        fragments.push(query.substring(start, end));
    });
    return fragments.join("\n\n");
}
exports.getFragments = getFragments;
function hasTopLevelField(doc, fieldName) {
    var e_1, _a;
    var _b, _c, _d;
    var fields = (_d = (_c = (_b = getQueryNode(doc)) === null || _b === void 0 ? void 0 : _b.selectionSet) === null || _c === void 0 ? void 0 : _c.selections) !== null && _d !== void 0 ? _d : [];
    try {
        for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
            var field = fields_1_1.value;
            if (field.kind === "Field" && field.name.value === fieldName) {
                return true;
            }
            if (field.kind === "FragmentSpread") {
                var fragmentName = field.name.value;
                if (fragmentHasField(doc, fragmentName, fieldName)) {
                    return true;
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
exports.hasTopLevelField = hasTopLevelField;
function fragmentHasField(doc, fragmentName, fieldName) {
    var e_2, _a, e_3, _b;
    try {
        for (var _c = __values(doc.definitions), _d = _c.next(); !_d.done; _d = _c.next()) {
            var def = _d.value;
            if (def.kind === "FragmentDefinition" && def.name.value === fragmentName) {
                var fields = def.selectionSet.selections;
                try {
                    for (var fields_2 = (e_3 = void 0, __values(fields)), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
                        var field = fields_2_1.value;
                        if (field.kind === "Field" && field.name.value === fieldName) {
                            return true;
                        }
                        if (field.kind === "FragmentSpread") {
                            if (fragmentHasField(doc, field.name.value, fieldName)) {
                                return true;
                            }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (fields_2_1 && !fields_2_1.done && (_b = fields_2.return)) _b.call(fields_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return false;
}
exports.fragmentHasField = fragmentHasField;
function hasPageInfoField(doc) {
    var _a, _b, _c, _d, _e;
    var fields = (_c = (_b = (_a = getQueryNode(doc)) === null || _a === void 0 ? void 0 : _a.selectionSet) === null || _b === void 0 ? void 0 : _b.selections) !== null && _c !== void 0 ? _c : [];
    var pageInfo = fields.find(function (field) {
        return field.name.value === "pageInfo";
    });
    if (!pageInfo) {
        return false;
    }
    var pageFields = (_e = (_d = pageInfo.selectionSet) === null || _d === void 0 ? void 0 : _d.selections) !== null && _e !== void 0 ? _e : [];
    return pageFields.some(function (field) {
        return field.name.value === "hasNextPage";
    });
}
exports.hasPageInfoField = hasPageInfoField;
//# sourceMappingURL=graphqlUtils.js.map