"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const helpers_1 = require('@patternfly/react-core/dist/js/helpers');
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const inline_edit_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/InlineEdit/inline-edit"));
const react_styles_1 = require("@patternfly/react-styles");
const Table_1 = require("./Table");
const TrBase = (_a) => {
    var { children, className, isExpanded, isEditable, isHidden = false, isClickable = false, isRowSelected = false, isStriped = false, isBorderRow = false, innerRef, ouiaId, ouiaSafe = true, resetOffset = false, onRowClick, isSelectable, 'aria-label': passedAriaLabel } = _a, props = tslib_1.__rest(_a, ["children", "className", "isExpanded", "isEditable", "isHidden", "isClickable", "isRowSelected", "isStriped", "isBorderRow", "innerRef", "ouiaId", "ouiaSafe", "resetOffset", "onRowClick", "isSelectable", 'aria-label']);
    const ouiaProps = (0, helpers_1.useOUIAProps)('TableRow', ouiaId, ouiaSafe);
    const [computedAriaLabel, setComputedAriaLabel] = React.useState('');
    let onKeyDown = null;
    if (onRowClick) {
        onKeyDown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                onRowClick(e);
                e.preventDefault();
            }
        };
    }
    const rowIsHidden = isHidden || (isExpanded !== undefined && !isExpanded);
    const { registerSelectableRow } = React.useContext(Table_1.TableContext);
    React.useEffect(() => {
        if (isSelectable && !rowIsHidden) {
            setComputedAriaLabel(`${isRowSelected ? 'Row selected' : ''}`);
            registerSelectableRow();
        }
        else {
            setComputedAriaLabel(undefined);
        }
    }, [isRowSelected, isSelectable, registerSelectableRow, rowIsHidden]);
    const ariaLabel = passedAriaLabel || computedAriaLabel;
    return (React.createElement(React.Fragment, null,
        React.createElement("tr", Object.assign({ className: (0, react_styles_1.css)(table_1.default.tableTr, className, isExpanded !== undefined && table_1.default.tableExpandableRow, isExpanded && table_1.default.modifiers.expanded, isEditable && inline_edit_1.default.modifiers.inlineEditable, isClickable && table_1.default.modifiers.clickable, isRowSelected && table_1.default.modifiers.selected, isStriped && table_1.default.modifiers.striped, isBorderRow && table_1.default.modifiers.borderRow, resetOffset && table_1.default.modifiers.firstCellOffsetReset), hidden: rowIsHidden }, (isClickable && { tabIndex: 0 }), { "aria-label": ariaLabel, ref: innerRef }, (onRowClick && { onClick: onRowClick, onKeyDown }), ouiaProps, props), children)));
};
exports.Tr = React.forwardRef((props, ref) => (React.createElement(TrBase, Object.assign({}, props, { innerRef: ref }))));
exports.Tr.displayName = 'Tr';
//# sourceMappingURL=Tr.js.map