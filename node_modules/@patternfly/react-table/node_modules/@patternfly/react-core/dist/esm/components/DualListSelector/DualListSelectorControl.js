import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import { Tooltip } from '../Tooltip';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector.mjs';
export const DualListSelectorControlBase = (_a) => {
    var { innerRef, children, icon, className, 'aria-label': ariaLabel, isDisabled = true, onClick = () => { }, tooltipContent, tooltipProps = {} } = _a, props = __rest(_a, ["innerRef", "children", "icon", "className", 'aria-label', "isDisabled", "onClick", "tooltipContent", "tooltipProps"]);
    const privateRef = React.useRef(null);
    const ref = innerRef || privateRef;
    return (React.createElement("div", Object.assign({ className: css(styles.dualListSelectorControlsItem, className) }, props),
        React.createElement(Button, { isDisabled: isDisabled, "aria-disabled": isDisabled, variant: ButtonVariant.plain, onClick: onClick, "aria-label": ariaLabel, tabIndex: -1, ref: ref, icon: icon }, children),
        tooltipContent && React.createElement(Tooltip, Object.assign({ content: tooltipContent, position: "left", triggerRef: ref }, tooltipProps))));
};
DualListSelectorControlBase.displayName = 'DualListSelectorControlBase';
export const DualListSelectorControl = React.forwardRef((props, ref) => (React.createElement(DualListSelectorControlBase, Object.assign({ innerRef: ref }, props))));
DualListSelectorControl.displayName = 'DualListSelectorControl';
//# sourceMappingURL=DualListSelectorControl.js.map