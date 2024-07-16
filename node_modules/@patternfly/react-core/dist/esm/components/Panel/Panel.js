import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel.mjs';
import { css } from '@patternfly/react-styles';
const PanelBase = (_a) => {
    var { className, children, variant, isScrollable, innerRef } = _a, props = __rest(_a, ["className", "children", "variant", "isScrollable", "innerRef"]);
    return (React.createElement("div", Object.assign({ className: css(styles.panel, variant && styles.modifiers[variant], isScrollable && styles.modifiers.scrollable, className), ref: innerRef }, props), children));
};
export const Panel = React.forwardRef((props, ref) => (React.createElement(PanelBase, Object.assign({ innerRef: ref }, props))));
Panel.displayName = 'Panel';
//# sourceMappingURL=Panel.js.map