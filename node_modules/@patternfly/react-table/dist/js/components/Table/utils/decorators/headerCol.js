"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerCol = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const headerCol = (id = 'simple-node') => {
    const headerColObj = (value, { rowIndex } = {}) => {
        const result = typeof value === 'object' ? value.title : value;
        return {
            component: 'th',
            children: React.createElement("div", { id: `${id}${rowIndex}` }, result)
        };
    };
    return headerColObj;
};
exports.headerCol = headerCol;
//# sourceMappingURL=headerCol.js.map