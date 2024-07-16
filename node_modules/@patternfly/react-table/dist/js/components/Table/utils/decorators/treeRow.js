"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeRow = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const table_tree_view_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table-tree-view"));
const Button_1 = require('@patternfly/react-core/dist/js/components/Button');
const Checkbox_1 = require('@patternfly/react-core/dist/js/components/Checkbox');
const angle_down_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-down-icon'));
const ellipsis_h_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/ellipsis-h-icon'));
const treeRow = (onCollapse, onCheckChange, onToggleRowDetails) => (value, { rowIndex, rowData }) => {
    const { isExpanded, isDetailsExpanded, 'aria-level': level, 'aria-setsize': setsize, toggleAriaLabel, checkAriaLabel, showDetailsAriaLabel, isChecked, checkboxId, icon } = rowData.props;
    const content = value.title || value;
    const text = (React.createElement("div", { className: (0, react_styles_1.css)(table_tree_view_1.default.tableTreeViewText), key: "tree-view-text" },
        icon && (React.createElement("span", { className: (0, react_styles_1.css)(table_tree_view_1.default.tableTreeViewIcon), key: "tree-view-text-icon" }, icon)),
        React.createElement("span", { className: table_1.default.tableText, key: "table-text" }, content)));
    const onChange = (isChecked, event) => {
        onCheckChange(event, isChecked, rowIndex, content, rowData);
    };
    return {
        component: 'th',
        className: table_tree_view_1.default.tableTreeViewTitleCell,
        children: level !== undefined ? (React.createElement("div", { className: (0, react_styles_1.css)(table_tree_view_1.default.tableTreeViewMain) },
            setsize > 0 && (React.createElement("span", { className: (0, react_styles_1.css)(table_tree_view_1.default.tableToggle), key: "table-toggle" },
                React.createElement(Button_1.Button, { variant: "plain", onClick: (event) => onCollapse && onCollapse(event, rowIndex, content, rowData), className: (0, react_styles_1.css)(isExpanded && table_1.default.modifiers.expanded), "aria-expanded": isExpanded, "aria-label": toggleAriaLabel || `${isExpanded ? 'Collapse' : 'Expand'} row ${rowIndex}` },
                    React.createElement("div", { className: (0, react_styles_1.css)(table_tree_view_1.default.tableToggleIcon) },
                        React.createElement(angle_down_icon_1.default, { "aria-hidden": "true" }))))),
            !!onCheckChange && (React.createElement("span", { className: (0, react_styles_1.css)(table_tree_view_1.default.tableCheck), key: "table-check" },
                React.createElement("label", { htmlFor: checkboxId || `checkbox_${rowIndex}` },
                    React.createElement(Checkbox_1.Checkbox, { id: checkboxId || `checkbox_${rowIndex}`, "aria-label": checkAriaLabel || `Row ${rowIndex} checkbox`, isChecked: isChecked, onChange: (event, checked) => onChange(checked, event) })))),
            text,
            !!onToggleRowDetails && (React.createElement("span", { className: (0, react_styles_1.css)(table_tree_view_1.default.tableTreeViewDetailsToggle), key: "view-details-toggle" },
                React.createElement(Button_1.Button, { variant: "plain", "aria-expanded": isDetailsExpanded, "aria-label": showDetailsAriaLabel || 'Show row details', onClick: (event) => onToggleRowDetails && onToggleRowDetails(event, rowIndex, content, rowData) },
                    React.createElement("span", { className: `${table_1.default.table}__details-toggle-icon` },
                        React.createElement(ellipsis_h_icon_1.default, { "aria-hidden": true }))))))) : (text)
    };
};
exports.treeRow = treeRow;
//# sourceMappingURL=treeRow.js.map