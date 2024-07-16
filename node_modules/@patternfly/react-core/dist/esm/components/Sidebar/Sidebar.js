import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar.mjs';
export var SidebarBackgroundVariant;
(function (SidebarBackgroundVariant) {
    SidebarBackgroundVariant["default"] = "default";
    SidebarBackgroundVariant["secondary"] = "secondary";
})(SidebarBackgroundVariant || (SidebarBackgroundVariant = {}));
export const Sidebar = (_a) => {
    var { className, children, orientation, isPanelRight = false, hasGutter, hasNoBackground, hasBorder } = _a, props = __rest(_a, ["className", "children", "orientation", "isPanelRight", "hasGutter", "hasNoBackground", "hasBorder"]);
    return (React.createElement("div", Object.assign({ className: css(styles.sidebar, hasGutter && styles.modifiers.gutter, hasNoBackground && styles.modifiers.noBackground, isPanelRight && styles.modifiers.panelRight, styles.modifiers[orientation], className) }, props),
        React.createElement("div", { className: css(styles.sidebarMain, hasBorder && styles.modifiers.border) }, children)));
};
Sidebar.displayName = 'Sidebar';
//# sourceMappingURL=Sidebar.js.map