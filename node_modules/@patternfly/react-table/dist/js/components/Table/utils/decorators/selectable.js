"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectable = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const SelectColumn_1 = require("../../SelectColumn");
const check_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Check/check"));
const selectable = (label, { rowIndex, columnIndex, rowData, column, property, tooltip }) => {
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
        className: check_1.default.checkInput
    })), (!rowData && isHeaderSelectDisabled && { disabled: true }));
    let selectName = 'check-all';
    if (rowId !== -1 && selectVariant === SelectColumn_1.RowSelectVariant.checkbox) {
        selectName = `checkrow${rowIndex}`;
    }
    else if (rowId !== -1) {
        selectName = 'radioGroup';
    }
    return {
        className: (0, react_styles_1.css)(table_1.default.tableCheck),
        component: rowId !== -1 ? 'td' : 'th',
        isVisible: !rowData || !rowData.fullWidth,
        children: (React.createElement(SelectColumn_1.SelectColumn, Object.assign({}, customProps, { selectVariant: selectVariant, onSelect: selectClick, name: selectName, tooltip: tooltip }), label))
    };
};
exports.selectable = selectable;
//# sourceMappingURL=selectable.js.map