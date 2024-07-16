import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import { SelectColumn, RowSelectVariant } from '../../SelectColumn';
import checkStyles from '@patternfly/react-styles/css/components/Check/check.mjs';
export const selectable = (label, { rowIndex, columnIndex, rowData, column, property, tooltip }) => {
    const { extraParams: { onSelect, selectVariant, allRowsSelected, isHeaderSelectDisabled } } = column;
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect && !rowData.fullWidth) {
        return {
            component: 'td',
            isVisible: true
        };
    }
    const rowId = rowIndex !== undefined ? rowIndex : -1;
    /**
     * @param {React.FormEvent} event - React form event
     */
    function selectClick(event) {
        const selected = rowIndex === undefined ? event.currentTarget.checked : rowData && !rowData.selected;
        // tslint:disable-next-line:no-unused-expression
        onSelect && onSelect(event, selected, rowId, rowData, extraData);
    }
    const customProps = Object.assign(Object.assign(Object.assign({}, (rowId !== -1
        ? {
            checked: rowData && !!rowData.selected,
            'aria-label': `Select row ${rowIndex}`
        }
        : {
            checked: allRowsSelected,
            'aria-label': 'Select all rows'
        })), (rowData &&
        (rowData.disableCheckbox || rowData.disableSelection) && {
        disabled: true,
        className: checkStyles.checkInput
    })), (!rowData && isHeaderSelectDisabled && { disabled: true }));
    let selectName = 'check-all';
    if (rowId !== -1 && selectVariant === RowSelectVariant.checkbox) {
        selectName = `checkrow${rowIndex}`;
    }
    else if (rowId !== -1) {
        selectName = 'radioGroup';
    }
    return {
        className: css(styles.tableCheck),
        component: rowId !== -1 ? 'td' : 'th',
        isVisible: !rowData || !rowData.fullWidth,
        children: (React.createElement(SelectColumn, Object.assign({}, customProps, { selectVariant: selectVariant, onSelect: selectClick, name: selectName, tooltip: tooltip }), label))
    };
};
//# sourceMappingURL=selectable.js.map