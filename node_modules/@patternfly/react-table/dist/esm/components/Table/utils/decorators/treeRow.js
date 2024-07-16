import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view.mjs';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { Checkbox } from '@patternfly/react-core/dist/esm/components/Checkbox';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import EllipsisHIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-h-icon';
export const treeRow = (onCollapse, onCheckChange, onToggleRowDetails) => (value, { rowIndex, rowData }) => {
    const { isExpanded, isDetailsExpanded, 'aria-level': level, 'aria-setsize': setsize, toggleAriaLabel, checkAriaLabel, showDetailsAriaLabel, isChecked, checkboxId, icon } = rowData.props;
    const content = value.title || value;
    const text = (React.createElement("div", { className: css(stylesTreeView.tableTreeViewText), key: "tree-view-text" },
        icon && (React.createElement("span", { className: css(stylesTreeView.tableTreeViewIcon), key: "tree-view-text-icon" }, icon)),
        React.createElement("span", { className: styles.tableText, key: "table-text" }, content)));
    const onChange = (isChecked, event) => {
        onCheckChange(event, isChecked, rowIndex, content, rowData);
    };
    return {
        component: 'th',
        className: stylesTreeView.tableTreeViewTitleCell,
        children: level !== undefined ? (React.createElement("div", { className: css(stylesTreeView.tableTreeViewMain) },
            setsize > 0 && (React.createElement("span", { className: css(stylesTreeView.tableToggle), key: "table-toggle" },
                React.createElement(Button, { variant: "plain", onClick: (event) => onCollapse && onCollapse(event, rowIndex, content, rowData), className: css(isExpanded && styles.modifiers.expanded), "aria-expanded": isExpanded, "aria-label": toggleAriaLabel || `${isExpanded ? 'Collapse' : 'Expand'} row ${rowIndex}` },
                    React.createElement("div", { className: css(stylesTreeView.tableToggleIcon) },
                        React.createElement(AngleDownIcon, { "aria-hidden": "true" }))))),
            !!onCheckChange && (React.createElement("span", { className: css(stylesTreeView.tableCheck), key: "table-check" },
                React.createElement("label", { htmlFor: checkboxId || `checkbox_${rowIndex}` },
                    React.createElement(Checkbox, { id: checkboxId || `checkbox_${rowIndex}`, "aria-label": checkAriaLabel || `Row ${rowIndex} checkbox`, isChecked: isChecked, onChange: (event, checked) => onChange(checked, event) })))),
            text,
            !!onToggleRowDetails && (React.createElement("span", { className: css(stylesTreeView.tableTreeViewDetailsToggle), key: "view-details-toggle" },
                React.createElement(Button, { variant: "plain", "aria-expanded": isDetailsExpanded, "aria-label": showDetailsAriaLabel || 'Show row details', onClick: (event) => onToggleRowDetails && onToggleRowDetails(event, rowIndex, content, rowData) },
                    React.createElement("span", { className: `${styles.table}__details-toggle-icon` },
                        React.createElement(EllipsisHIcon, { "aria-hidden": true }))))))) : (text)
    };
};
//# sourceMappingURL=treeRow.js.map