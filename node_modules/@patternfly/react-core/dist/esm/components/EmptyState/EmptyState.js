import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state.mjs';
import { EmptyStateHeader } from './EmptyStateHeader';
import { statusIcons } from '../../helpers';
export var EmptyStateVariant;
(function (EmptyStateVariant) {
    EmptyStateVariant["xs"] = "xs";
    EmptyStateVariant["sm"] = "sm";
    EmptyStateVariant["lg"] = "lg";
    EmptyStateVariant["xl"] = "xl";
    EmptyStateVariant["full"] = "full";
})(EmptyStateVariant || (EmptyStateVariant = {}));
export var EmptyStateStatus;
(function (EmptyStateStatus) {
    EmptyStateStatus["danger"] = "danger";
    EmptyStateStatus["warning"] = "warning";
    EmptyStateStatus["success"] = "success";
    EmptyStateStatus["info"] = "info";
    EmptyStateStatus["custom"] = "custom";
})(EmptyStateStatus || (EmptyStateStatus = {}));
export const EmptyState = (_a) => {
    var { children, className, variant = EmptyStateVariant.full, isFullHeight, status, icon: customIcon, titleText, titleClassName, headerClassName, headingLevel } = _a, props = __rest(_a, ["children", "className", "variant", "isFullHeight", "status", "icon", "titleText", "titleClassName", "headerClassName", "headingLevel"]);
    const statusIcon = status && statusIcons[status];
    const icon = customIcon || statusIcon;
    return (React.createElement("div", Object.assign({ className: css(styles.emptyState, variant !== 'full' && styles.modifiers[variant], isFullHeight && styles.modifiers.fullHeight, status && styles.modifiers[status], className) }, props),
        React.createElement("div", { className: css(styles.emptyStateContent) },
            React.createElement(EmptyStateHeader, { icon: icon, titleText: titleText, titleClassName: titleClassName, className: headerClassName, headingLevel: headingLevel }),
            children)));
};
EmptyState.displayName = 'EmptyState';
//# sourceMappingURL=EmptyState.js.map