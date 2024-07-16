import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer.mjs';
import { css } from '@patternfly/react-styles';
export var DrawerColorVariant;
(function (DrawerColorVariant) {
    DrawerColorVariant["default"] = "default";
    DrawerColorVariant["secondary"] = "secondary";
    DrawerColorVariant["noBackground"] = "no-background";
})(DrawerColorVariant || (DrawerColorVariant = {}));
export const DrawerContext = React.createContext({
    isExpanded: false,
    isStatic: false,
    onExpand: () => { },
    position: 'end',
    drawerRef: null,
    drawerContentRef: null,
    isInline: false
});
export const Drawer = (_a) => {
    var { className = '', children, isExpanded = false, isInline = false, isStatic = false, position = 'end', onExpand = () => { } } = _a, props = __rest(_a, ["className", "children", "isExpanded", "isInline", "isStatic", "position", "onExpand"]);
    const drawerRef = React.useRef();
    const drawerContentRef = React.useRef();
    return (React.createElement(DrawerContext.Provider, { value: { isExpanded, isStatic, onExpand, position, drawerRef, drawerContentRef, isInline } },
        React.createElement("div", Object.assign({ className: css(styles.drawer, isExpanded && styles.modifiers.expanded, isInline && styles.modifiers.inline, isStatic && styles.modifiers.static, (position === 'left' || position === 'start') && styles.modifiers.panelLeft, position === 'bottom' && styles.modifiers.panelBottom, className), ref: drawerRef }, props), children)));
};
Drawer.displayName = 'Drawer';
//# sourceMappingURL=Drawer.js.map