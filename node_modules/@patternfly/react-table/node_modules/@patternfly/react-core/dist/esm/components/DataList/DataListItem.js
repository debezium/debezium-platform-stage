import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list.mjs';
import { DataListContext } from './DataList';
import { KeyTypes } from '../../helpers/constants';
class DataListItem extends React.Component {
    render() {
        const _a = this.props, { children, isExpanded, className, id, 'aria-labelledby': ariaLabelledBy, selectableInputAriaLabel } = _a, props = __rest(_a, ["children", "isExpanded", "className", "id", 'aria-labelledby', "selectableInputAriaLabel"]);
        return (React.createElement(DataListContext.Consumer, null, ({ isSelectable, selectedDataListItemId, updateSelectedDataListItem, onSelectableRowChange }) => {
            const selectDataListItem = (event) => {
                let target = event.target;
                while (event.currentTarget !== target) {
                    if (('onclick' in target && target.onclick) ||
                        target.parentNode.classList.contains(styles.dataListItemAction) ||
                        target.parentNode.classList.contains(styles.dataListItemControl)) {
                        // check other event handlers are not present.
                        return;
                    }
                    else {
                        target = target.parentNode;
                    }
                }
                updateSelectedDataListItem(event, id);
            };
            const onKeyDown = (event) => {
                if ([KeyTypes.Enter, KeyTypes.Space].includes(event.key)) {
                    event.preventDefault();
                    updateSelectedDataListItem(event, id);
                }
            };
            const isSelected = selectedDataListItemId === id;
            const selectableInputAriaProps = selectableInputAriaLabel
                ? { 'aria-label': selectableInputAriaLabel }
                : { 'aria-labelledby': ariaLabelledBy };
            return (React.createElement("li", Object.assign({ id: id, className: css(styles.dataListItem, isExpanded && styles.modifiers.expanded, isSelectable && styles.modifiers.clickable, selectedDataListItemId && isSelected && styles.modifiers.selected, className), "aria-labelledby": ariaLabelledBy }, (isSelectable && { tabIndex: 0, onClick: selectDataListItem, onKeyDown }), (isSelectable && isSelected && { 'aria-selected': true }), props),
                onSelectableRowChange && (React.createElement("input", Object.assign({ className: "pf-v6-screen-reader", type: "radio", checked: isSelected, onChange: (event) => onSelectableRowChange(event, id), tabIndex: -1 }, selectableInputAriaProps))),
                React.Children.map(children, (child) => React.isValidElement(child) &&
                    React.cloneElement(child, {
                        rowid: ariaLabelledBy
                    }))));
        }));
    }
}
DataListItem.displayName = 'DataListItem';
DataListItem.defaultProps = {
    isExpanded: false,
    className: '',
    id: '',
    children: null,
    'aria-labelledby': ''
};
export { DataListItem };
//# sourceMappingURL=DataListItem.js.map