import { __rest } from "tslib";
import * as React from 'react';
import { useOUIAProps } from '@patternfly/react-core/dist/esm/helpers';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit.mjs';
import { css } from '@patternfly/react-styles';
import { TableContext } from './Table';
const TrBase = (_a) => {
    var { children, className, isExpanded, isEditable, isHidden = false, isClickable = false, isRowSelected = false, isStriped = false, isBorderRow = false, innerRef, ouiaId, ouiaSafe = true, resetOffset = false, onRowClick, isSelectable, 'aria-label': passedAriaLabel } = _a, props = __rest(_a, ["children", "className", "isExpanded", "isEditable", "isHidden", "isClickable", "isRowSelected", "isStriped", "isBorderRow", "innerRef", "ouiaId", "ouiaSafe", "resetOffset", "onRowClick", "isSelectable", 'aria-label']);
    const ouiaProps = useOUIAProps('TableRow', ouiaId, ouiaSafe);
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
    const { registerSelectableRow } = React.useContext(TableContext);
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
        React.createElement("tr", Object.assign({ className: css(styles.tableTr, className, isExpanded !== undefined && styles.tableExpandableRow, isExpanded && styles.modifiers.expanded, isEditable && inlineStyles.modifiers.inlineEditable, isClickable && styles.modifiers.clickable, isRowSelected && styles.modifiers.selected, isStriped && styles.modifiers.striped, isBorderRow && styles.modifiers.borderRow, resetOffset && styles.modifiers.firstCellOffsetReset), hidden: rowIsHidden }, (isClickable && { tabIndex: 0 }), { "aria-label": ariaLabel, ref: innerRef }, (onRowClick && { onClick: onRowClick, onKeyDown }), ouiaProps, props), children)));
};
export const Tr = React.forwardRef((props, ref) => (React.createElement(TrBase, Object.assign({}, props, { innerRef: ref }))));
Tr.displayName = 'Tr';
//# sourceMappingURL=Tr.js.map