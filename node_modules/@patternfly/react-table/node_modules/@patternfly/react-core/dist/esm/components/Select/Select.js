import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent } from '../Menu';
import { Popper } from '../../helpers/Popper/Popper';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
const SelectBase = (_a) => {
    var { children, className, onSelect, isOpen, selected, toggle, shouldFocusToggleOnSelect = false, shouldFocusFirstItemOnOpen = true, onOpenChange, onOpenChangeKeys = ['Escape', 'Tab'], isPlain, innerRef, zIndex = 9999, role = 'listbox', popperProps, menuHeight, maxMenuHeight, isScrollable } = _a, props = __rest(_a, ["children", "className", "onSelect", "isOpen", "selected", "toggle", "shouldFocusToggleOnSelect", "shouldFocusFirstItemOnOpen", "onOpenChange", "onOpenChangeKeys", "isPlain", "innerRef", "zIndex", "role", "popperProps", "menuHeight", "maxMenuHeight", "isScrollable"]);
    const localMenuRef = React.useRef();
    const localToggleRef = React.useRef();
    const menuRef = innerRef || localMenuRef;
    const toggleRef = typeof toggle === 'function' || (typeof toggle !== 'function' && !toggle.toggleRef)
        ? localToggleRef
        : toggle === null || toggle === void 0 ? void 0 : toggle.toggleRef;
    React.useEffect(() => {
        const handleMenuKeys = (event) => {
            var _a, _b, _c;
            // Close the menu on tab or escape if onOpenChange is provided
            if (isOpen &&
                onOpenChange &&
                (((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || ((_b = toggleRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target)))) {
                if (onOpenChangeKeys.includes(event.key)) {
                    event.preventDefault();
                    onOpenChange(false);
                    (_c = toggleRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                }
            }
        };
        const handleClick = (event) => {
            var _a, _b, _c;
            // toggle was opened, focus on first menu item
            if (isOpen && shouldFocusFirstItemOnOpen && ((_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setTimeout(() => {
                    var _a;
                    const firstElement = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('li button:not(:disabled),li input:not(:disabled)');
                    firstElement && firstElement.focus();
                }, 0);
            }
            // If the event is not on the toggle and onOpenChange callback is provided, close the menu
            if (isOpen && onOpenChange && !((_b = toggleRef === null || toggleRef === void 0 ? void 0 : toggleRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                if (isOpen && !((_c = menuRef.current) === null || _c === void 0 ? void 0 : _c.contains(event.target))) {
                    onOpenChange(false);
                }
            }
        };
        window.addEventListener('keydown', handleMenuKeys);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('keydown', handleMenuKeys);
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen, menuRef, toggleRef, onOpenChange, onOpenChangeKeys]);
    const menu = (React.createElement(Menu, Object.assign({ role: role, className: css(className), ref: menuRef, onSelect: (event, value) => {
            onSelect && onSelect(event, value);
            shouldFocusToggleOnSelect && toggleRef.current.focus();
        }, isPlain: isPlain, selected: selected, isScrollable: isScrollable !== null && isScrollable !== void 0 ? isScrollable : (menuHeight !== undefined || maxMenuHeight !== undefined) }, getOUIAProps(Select.displayName, props.ouiaId !== undefined ? props.ouiaId : getDefaultOUIAId(Select.displayName), props.ouiaSafe !== undefined ? props.ouiaSafe : true), props),
        React.createElement(MenuContent, { menuHeight: menuHeight, maxMenuHeight: maxMenuHeight }, children)));
    return (React.createElement(Popper, Object.assign({ trigger: typeof toggle === 'function' ? toggle(toggleRef) : toggle.toggleNode, triggerRef: toggleRef, popper: menu, popperRef: menuRef, isVisible: isOpen, zIndex: zIndex }, popperProps)));
};
export const Select = React.forwardRef((props, ref) => (React.createElement(SelectBase, Object.assign({ innerRef: ref }, props))));
Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map