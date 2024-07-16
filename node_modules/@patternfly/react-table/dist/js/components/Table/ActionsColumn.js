"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsColumn = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Dropdown_1 = require('@patternfly/react-core/dist/js/components/Dropdown');
const Button_1 = require('@patternfly/react-core/dist/js/components/Button');
const Divider_1 = require('@patternfly/react-core/dist/js/components/Divider');
const MenuToggle_1 = require('@patternfly/react-core/dist/js/components/MenuToggle');
const ellipsis_v_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/ellipsis-v-icon'));
const Tooltip_1 = require('@patternfly/react-core/dist/js/components/Tooltip');
const ActionsColumnBase = (_a) => {
    var { items, isDisabled, rowData, extraData, actionsToggle, popperProps = {
        position: 'end',
        direction: 'down'
    }, innerRef, firstActionItemRef, isOnOpenChangeDisabled = false } = _a, props = tslib_1.__rest(_a, ["items", "isDisabled", "rowData", "extraData", "actionsToggle", "popperProps", "innerRef", "firstActionItemRef", "isOnOpenChangeDisabled"]);
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggle = () => {
        setIsOpen(!isOpen);
    };
    const onActionClick = (event, onClick) => {
        // Only prevent default if onClick is provided.  This allows href support.
        if (onClick) {
            event.preventDefault();
            // tslint:disable-next-line:no-unused-expression
            onClick(event, extraData && extraData.rowIndex, rowData, extraData);
        }
    };
    return (React.createElement(React.Fragment, null,
        items
            .filter((item) => item.isOutsideDropdown)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map((_a, key) => {
            var { title, itemKey, onClick, isOutsideDropdown } = _a, props = tslib_1.__rest(_a, ["title", "itemKey", "onClick", "isOutsideDropdown"]);
            return typeof title === 'string' ? (React.createElement(Button_1.Button, Object.assign({ onClick: (event) => onActionClick(event, onClick) }, props, { isDisabled: isDisabled, key: itemKey || `outside_dropdown_${key}`, "data-key": itemKey || `outside_dropdown_${key}` }), title)) : (React.cloneElement(title, Object.assign({ onClick, isDisabled }, props)));
        }),
        React.createElement(Dropdown_1.Dropdown, Object.assign({ isOpen: isOpen, onOpenChange: !isOnOpenChangeDisabled ? (isOpen) => setIsOpen(isOpen) : undefined, toggle: (toggleRef) => actionsToggle ? (actionsToggle({ onToggle, isOpen, isDisabled, toggleRef })) : (React.createElement(MenuToggle_1.MenuToggle, { "aria-label": "Kebab toggle", ref: toggleRef, onClick: onToggle, isExpanded: isOpen, isDisabled: isDisabled, variant: "plain", icon: React.createElement(ellipsis_v_icon_1.default, null) })) }, (rowData && rowData.actionProps), { ref: innerRef }, props, { popperProps: popperProps }),
            React.createElement(Dropdown_1.DropdownList, null, items
                .filter((item) => !item.isOutsideDropdown)
                .map((_a, index) => {
                var { title, itemKey, onClick, tooltipProps, isSeparator, shouldCloseOnClick = true } = _a, props = tslib_1.__rest(_a, ["title", "itemKey", "onClick", "tooltipProps", "isSeparator", "shouldCloseOnClick"]);
                if (isSeparator) {
                    return React.createElement(Divider_1.Divider, { key: itemKey || index, "data-key": itemKey || index });
                }
                const item = (React.createElement(Dropdown_1.DropdownItem, Object.assign({ onClick: (event) => {
                        onActionClick(event, onClick);
                        shouldCloseOnClick && onToggle();
                    } }, props, { key: itemKey || index, "data-key": itemKey || index, ref: index === 0 ? firstActionItemRef : undefined }), title));
                if (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.content) {
                    return (React.createElement(Tooltip_1.Tooltip, Object.assign({ key: itemKey || index }, tooltipProps), item));
                }
                else {
                    return item;
                }
            })))));
};
exports.ActionsColumn = React.forwardRef((props, ref) => (React.createElement(ActionsColumnBase, Object.assign({}, props, { innerRef: ref }))));
exports.ActionsColumn.displayName = 'ActionsColumn';
//# sourceMappingURL=ActionsColumn.js.map