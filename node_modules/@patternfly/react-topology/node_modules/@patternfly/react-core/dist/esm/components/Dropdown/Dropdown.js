import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent } from '../Menu';
import { Popper } from '../../helpers/Popper/Popper';
import { useOUIAProps } from '../../helpers';
const DropdownBase = (_a) => {
    var { children, className, onSelect, isOpen, toggle, shouldFocusToggleOnSelect = false, onOpenChange, isPlain, isScrollable, innerRef, ouiaId, ouiaSafe = true, zIndex = 9999, popperProps, onOpenChangeKeys = ['Escape', 'Tab'], menuHeight, maxMenuHeight } = _a, props = __rest(_a, ["children", "className", "onSelect", "isOpen", "toggle", "shouldFocusToggleOnSelect", "onOpenChange", "isPlain", "isScrollable", "innerRef", "ouiaId", "ouiaSafe", "zIndex", "popperProps", "onOpenChangeKeys", "menuHeight", "maxMenuHeight"]);
    const localMenuRef = React.useRef();
    const localToggleRef = React.useRef();
    const ouiaProps = useOUIAProps(Dropdown.displayName, ouiaId, ouiaSafe);
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
                    onOpenChange(false);
                    (_c = toggleRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                }
            }
        };
        const handleClick = (event) => {
            var _a, _b, _c;
            // toggle was opened, focus on first menu item
            if (isOpen && ((_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setTimeout(() => {
                    var _a;
                    const firstElement = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');
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
    const scrollable = maxMenuHeight !== undefined || menuHeight !== undefined || isScrollable;
    const menu = (React.createElement(Menu, Object.assign({ className: css(className), ref: menuRef, onSelect: (event, value) => {
            onSelect && onSelect(event, value);
            shouldFocusToggleOnSelect && toggleRef.current.focus();
        }, isPlain: isPlain, isScrollable: scrollable }, props, ouiaProps),
        React.createElement(MenuContent, { menuHeight: menuHeight, maxMenuHeight: maxMenuHeight }, children)));
    return (React.createElement(Popper, Object.assign({ trigger: typeof toggle === 'function' ? toggle(toggleRef) : toggle.toggleNode, triggerRef: toggleRef, popper: menu, popperRef: menuRef, isVisible: isOpen, zIndex: zIndex }, popperProps)));
};
export const Dropdown = React.forwardRef((props, ref) => (React.createElement(DropdownBase, Object.assign({ innerRef: ref }, props))));
Dropdown.displayName = 'Dropdown';
//# sourceMappingURL=Dropdown.js.map