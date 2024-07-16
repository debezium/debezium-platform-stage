import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer.mjs';
import { css } from '@patternfly/react-styles';
import { DrawerMain } from './DrawerMain';
import { DrawerContext } from './Drawer';
export var DrawerContentColorVariant;
(function (DrawerContentColorVariant) {
    DrawerContentColorVariant["default"] = "default";
    DrawerContentColorVariant["primary"] = "primary";
    DrawerContentColorVariant["secondary"] = "secondary";
})(DrawerContentColorVariant || (DrawerContentColorVariant = {}));
export const DrawerContent = (_a) => {
    var { className, children, panelContent, colorVariant = DrawerContentColorVariant.default } = _a, props = __rest(_a, ["className", "children", "panelContent", "colorVariant"]);
    const { drawerContentRef } = React.useContext(DrawerContext);
    return (React.createElement(DrawerMain, null,
        React.createElement("div", Object.assign({ className: css(styles.drawerContent, colorVariant === DrawerContentColorVariant.primary && styles.modifiers.primary, colorVariant === DrawerContentColorVariant.secondary && styles.modifiers.secondary, className), ref: drawerContentRef }, props), children),
        panelContent));
};
DrawerContent.displayName = 'DrawerContent';
//# sourceMappingURL=DrawerContent.js.map