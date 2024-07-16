import { __rest } from "tslib";
import * as React from 'react';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core/dist/esm/components/Dropdown';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { Divider } from '@patternfly/react-core/dist/esm/components/Divider';
import { MenuToggle } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip';
const ActionsColumnBase = (_a) => {
    var { items, isDisabled, rowData, extraData, actionsToggle, popperProps = {
        position: 'end',
        direction: 'down'
    }, innerRef, firstActionItemRef, isOnOpenChangeDisabled = false } = _a, props = __rest(_a, ["items", "isDisabled", "rowData", "extraData", "actionsToggle", "popperProps", "innerRef", "firstActionItemRef", "isOnOpenChangeDisabled"]);
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
            var { title, itemKey, onClick, isOutsideDropdown } = _a, props = __rest(_a, ["title", "itemKey", "onClick", "isOutsideDropdown"]);
            return typeof title === 'string' ? (React.createElement(Button, Object.assign({ onClick: (event) => onActionClick(event, onClick) }, props, { isDisabled: isDisabled, key: itemKey || `outside_dropdown_${key}`, "data-key": itemKey || `outside_dropdown_${key}` }), title)) : (React.cloneElement(title, Object.assign({ onClick, isDisabled }, props)));
        }),
        React.createElement(Dropdown, Object.assign({ isOpen: isOpen, onOpenChange: !isOnOpenChangeDisabled ? (isOpen) => setIsOpen(isOpen) : undefined, toggle: (toggleRef) => actionsToggle ? (actionsToggle({ onToggle, isOpen, isDisabled, toggleRef })) : (React.createElement(MenuToggle, { "aria-label": "Kebab toggle", ref: toggleRef, onClick: onToggle, isExpanded: isOpen, isDisabled: isDisabled, variant: "plain", icon: React.createElement(EllipsisVIcon, null) })) }, (rowData && rowData.actionProps), { ref: innerRef }, props, { popperProps: popperProps }),
            React.createElement(DropdownList, null, items
                .filter((item) => !item.isOutsideDropdown)
                .map((_a, index) => {
                var { title, itemKey, onClick, tooltipProps, isSeparator, shouldCloseOnClick = true } = _a, props = __rest(_a, ["title", "itemKey", "onClick", "tooltipProps", "isSeparator", "shouldCloseOnClick"]);
                if (isSeparator) {
                    return React.createElement(Divider, { key: itemKey || index, "data-key": itemKey || index });
                }
                const item = (React.createElement(DropdownItem, Object.assign({ onClick: (event) => {
                        onActionClick(event, onClick);
                        shouldCloseOnClick && onToggle();
                    } }, props, { key: itemKey || index, "data-key": itemKey || index, ref: index === 0 ? firstActionItemRef : undefined }), title));
                if (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.content) {
                    return (React.createElement(Tooltip, Object.assign({ key: itemKey || index }, tooltipProps), item));
                }
                else {
                    return item;
                }
            })))));
};
export const ActionsColumn = React.forwardRef((props, ref) => (React.createElement(ActionsColumnBase, Object.assign({}, props, { innerRef: ref }))));
ActionsColumn.displayName = 'ActionsColumn';
//# sourceMappingURL=ActionsColumn.js.map