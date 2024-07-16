import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import { CollapseColumn } from '../../CollapseColumn';
import { ExpandableRowContent } from '../../ExpandableRowContent';
export const collapsible = (value, { rowIndex, columnIndex, rowData, column, property }) => {
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
        className: ((rowData === null || rowData === void 0 ? void 0 : rowData.isOpen) !== undefined || rowId === -1) && css(styles.tableToggle),
        isVisible: !(rowData === null || rowData === void 0 ? void 0 : rowData.fullWidth),
        children: (React.createElement(CollapseColumn, Object.assign({ "aria-labelledby": `${rowLabeledBy}${rowId} ${expandId}${rowId}`, onToggle: onToggle, id: expandId + rowId }, customProps), value))
    };
};
export const expandable = (value, { rowData }) => rowData && rowData.hasOwnProperty('parent') ? (React.createElement(ExpandableRowContent, null, value)) : (value);
export const expandedRow = (colSpan, additionalColSpan = 0) => {
    const expandedRowFormatter = (value, { columnIndex, rowIndex, rowData, column: { extraParams: { contentId = 'expanded-content' } } }) => value &&
        rowData.hasOwnProperty('parent') && {
        colSpan: !rowData.cells || rowData.cells.length === 1 ? colSpan + (rowData.fullWidth ? additionalColSpan + 1 : 0) : 1,
        id: contentId + rowIndex + (columnIndex ? '-' + columnIndex : ''),
        className: rowData.noPadding && css(styles.modifiers.noPadding)
    };
    return expandedRowFormatter;
};
//# sourceMappingURL=collapsible.js.map