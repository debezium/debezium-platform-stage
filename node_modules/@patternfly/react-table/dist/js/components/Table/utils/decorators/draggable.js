"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draggable = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const DraggableCell_1 = require("../../DraggableCell");
const draggable = (value, { rowData }) => {
    const { id } = rowData;
    return {
        className: '',
        children: React.createElement(DraggableCell_1.DraggableCell, { id: id })
    };
};
exports.draggable = draggable;
//# sourceMappingURL=draggable.js.map