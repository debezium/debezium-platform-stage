"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandedRow = exports.expandable = exports.collapsible = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const CollapseColumn_1 = require("../../CollapseColumn");
const ExpandableRowContent_1 = require("../../ExpandableRowContent");
const collapsible = (value, { rowIndex, columnIndex, rowData, column, property }) => {
    const { extraParams: { onCollapse, rowLabeledBy = 'simple-node', expandId = 'expand-toggle', allRowsExpanded, collapseAllAriaLabel } } = column;
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    const rowId = rowIndex !== undefined ? rowIndex : -1;
    const customProps = Object.assign({}, (rowId !== -1
        ? {
            isOpen: rowData === null || rowData === void 0 ? void 0 : rowData.isOpen,
            'aria-labelledby': `${rowLabeledBy}${rowId} ${expandId}${rowId}`
        }
        : {
            isOpen: allRowsExpanded,
            'aria-label': collapseAllAriaLabel || 'Expand all rows'
        }));
    /**
     * @param {React.MouseEvent} event - Mouse event
     */
    function onToggle(event) {
        const open = rowData ? !rowData.isOpen : !allRowsExpanded;
        // tslint:disable-next-line:no-unused-expression
        onCollapse && onCollapse(event, rowIndex, open, rowData, extraData);
    }
    return {
        className: ((rowData === null || rowData === void 0 ? void 0 : rowData.isOpen) !== undefined || rowId === -1) && (0, react_styles_1.css)(table_1.default.tableToggle),
        isVisible: !(rowData === null || rowData === void 0 ? void 0 : rowData.fullWidth),
        children: (React.createElement(CollapseColumn_1.CollapseColumn, Object.assign({ "aria-labelledby": `${rowLabeledBy}${rowId} ${expandId}${rowId}`, onToggle: onToggle, id: expandId + rowId }, customProps), value))
    };
};
exports.collapsible = collapsible;
const expandable = (value, { rowData }) => rowData && rowData.hasOwnProperty('parent') ? (React.createElement(ExpandableRowContent_1.ExpandableRowContent, null, value)) : (value);
exports.expandable = expandable;
const expandedRow = (colSpan, additionalColSpan = 0) => {
    const expandedRowFormatter = (value, { columnIndex, rowIndex, rowData, column: { extraParams: { contentId = 'expanded-content' } } }) => value &&
        rowData.hasOwnProperty('parent') && {
        colSpan: !rowData.cells || rowData.cells.length === 1 ? colSpan + (rowData.fullWidth ? additionalColSpan + 1 : 0) : 1,
        id: contentId + rowIndex + (columnIndex ? '-' + columnIndex : ''),
        className: rowData.noPadding && (0, react_styles_1.css)(table_1.default.modifiers.noPadding)
    };
    return expandedRowFormatter;
};
exports.expandedRow = expandedRow;
//# sourceMappingURL=collapsible.js.map