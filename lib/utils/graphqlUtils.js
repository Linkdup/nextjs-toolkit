"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPageInfoField = exports.fragmentHasField = exports.hasTopLevelField = exports.getFragments = exports.getFragmentFields = exports.getQueryFields = exports.getQueryName = exports.getQueryNode = exports.getQueryNodes = exports.getOperationName = void 0;
const graphql_1 = require("graphql");
function getOperationName(doc) {
    return (doc.definitions
        .filter(definition => definition.kind === 'OperationDefinition' && definition.name)
        .map((x) => {
        const node = x;
        return node.name.value;
    })[0] || null);
}
exports.getOperationName = getOperationName;
function getQueryNodes(doc) {
    const definitions = doc.definitions
        .filter(definition => (definition.kind === 'OperationDefinition' &&
        definition.name &&
        definition.operation === 'query'));
    if (definitions.length !== 1) {
        return [];
    }
    const def = definitions[0];
    if (def.selectionSet.selections.length !== 1) {
        return [];
    }
    const queries = def.selectionSet.selections;
    return queries;
}
exports.getQueryNodes = getQueryNodes;
function getQueryNode(doc) {
    var _a;
    const queries = getQueryNodes(doc);
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
    const doc = (0, graphql_1.parse)(query);
    const loc = (_b = (_a = getQueryNode(doc)) === null || _a === void 0 ? void 0 : _a.selectionSet) === null || _b === void 0 ? void 0 : _b.loc;
    if (!loc) {
        return null;
    }
    const { start, end, startToken, endToken } = loc;
    return query.substring(start, end)
        .replace(new RegExp(`^${startToken.kind}`), ``)
        .replace(new RegExp(`${endToken.kind}$`), ``);
}
exports.getQueryFields = getQueryFields;
function getFragmentFields(fragment) {
    const doc = (0, graphql_1.parse)(fragment);
    const found = doc.definitions.find(def => def.kind === `FragmentDefinition`);
    if (!found) {
        return null;
    }
    const fragmentNode = found;
    const loc = fragmentNode.selectionSet.loc;
    const { start, end, startToken, endToken } = loc;
    return fragment.substring(start, end)
        .replace(new RegExp(`^${startToken.kind}`), ``)
        .replace(new RegExp(`${endToken.kind}$`), ``);
}
exports.getFragmentFields = getFragmentFields;
function getFragments(query) {
    const doc = (0, graphql_1.parse)(query);
    const fragments = [];
    doc.definitions.forEach(def => {
        if (def.kind !== `FragmentDefinition`) {
            return;
        }
        const { start, end } = def.loc;
        fragments.push(query.substring(start, end));
    });
    return fragments.join("\n\n");
}
exports.getFragments = getFragments;
function hasTopLevelField(doc, fieldName) {
    var _a, _b, _c;
    const fields = (_c = (_b = (_a = getQueryNode(doc)) === null || _a === void 0 ? void 0 : _a.selectionSet) === null || _b === void 0 ? void 0 : _b.selections) !== null && _c !== void 0 ? _c : [];
    for (let field of fields) {
        if (field.kind === `Field` && field.name.value === fieldName) {
            return true;
        }
        if (field.kind === `FragmentSpread`) {
            const fragmentName = field.name.value;
            if (fragmentHasField(doc, fragmentName, fieldName)) {
                return true;
            }
        }
    }
    return false;
}
exports.hasTopLevelField = hasTopLevelField;
function fragmentHasField(doc, fragmentName, fieldName) {
    for (let def of doc.definitions) {
        if (def.kind === `FragmentDefinition` && def.name.value === fragmentName) {
            const fields = def.selectionSet.selections;
            for (let field of fields) {
                if (field.kind === `Field` && field.name.value === fieldName) {
                    return true;
                }
                if (field.kind === `FragmentSpread`) {
                    if (fragmentHasField(doc, field.name.value, fieldName)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
exports.fragmentHasField = fragmentHasField;
function hasPageInfoField(doc) {
    var _a, _b, _c, _d, _e;
    const fields = (_c = (_b = (_a = getQueryNode(doc)) === null || _a === void 0 ? void 0 : _a.selectionSet) === null || _b === void 0 ? void 0 : _b.selections) !== null && _c !== void 0 ? _c : [];
    const pageInfo = fields.find(field => {
        return field.name.value === `pageInfo`;
    });
    if (!pageInfo) {
        return false;
    }
    const pageFields = (_e = (_d = pageInfo.selectionSet) === null || _d === void 0 ? void 0 : _d.selections) !== null && _e !== void 0 ? _e : [];
    return pageFields.some(field => {
        return field.name.value === `hasNextPage`;
    });
}
exports.hasPageInfoField = hasPageInfoField;
//# sourceMappingURL=graphqlUtils.js.map