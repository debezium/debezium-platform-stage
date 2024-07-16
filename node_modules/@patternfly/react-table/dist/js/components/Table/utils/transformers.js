"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapProps = exports.parentId = exports.emptyCol = exports.scopeColTransformer = exports.emptyTD = void 0;
const emptyTD = () => ({
    component: 'td'
});
exports.emptyTD = emptyTD;
const scopeColTransformer = () => ({
    scope: 'col'
});
exports.scopeColTransformer = scopeColTransformer;
const emptyCol = (label) => (Object.assign({}, (label ? {} : { scope: '' })));
exports.emptyCol = emptyCol;
const parentId = (_value, { rowData }) => ({
    parentId: rowData.parent
});
exports.parentId = parentId;
const mapProps = (_label, { property, rowData }) => (Object.assign({}, (rowData[property] && rowData[property].props)));
exports.mapProps = mapProps;
//# sourceMappingURL=transformers.js.map