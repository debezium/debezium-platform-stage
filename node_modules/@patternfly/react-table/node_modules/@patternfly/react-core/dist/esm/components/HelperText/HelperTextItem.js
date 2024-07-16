import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text.mjs';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
export var HelperTextItemVariant;
(function (HelperTextItemVariant) {
    HelperTextItemVariant["default"] = "default";
    HelperTextItemVariant["warning"] = "warning";
    HelperTextItemVariant["error"] = "error";
    HelperTextItemVariant["success"] = "success";
})(HelperTextItemVariant || (HelperTextItemVariant = {}));
const defaultVariantIcons = {
    indeterminate: React.createElement(MinusIcon, null),
    warning: React.createElement(ExclamationTriangleIcon, null),
    success: React.createElement(CheckCircleIcon, null),
    error: React.createElement(ExclamationCircleIcon, null)
};
export const HelperTextItem = (_a) => {
    var { children, className, component = 'div', variant = 'default', icon, id, screenReaderText = `${variant} status` } = _a, props = __rest(_a, ["children", "className", "component", "variant", "icon", "id", "screenReaderText"]);
    const Component = component;
    const isNotDefaultVariant = variant !== 'default';
    const defaultIcon = isNotDefaultVariant && defaultVariantIcons[variant];
    return (React.createElement(Component, Object.assign({ className: css(styles.helperTextItem, isNotDefaultVariant && styles.modifiers[variant], className), id: id }, props),
        (defaultIcon || icon) && (React.createElement("span", { className: css(styles.helperTextItemIcon), "aria-hidden": true }, icon || defaultIcon)),
        React.createElement("span", { className: css(styles.helperTextItemText) },
            children,
            isNotDefaultVariant && React.createElement("span", { className: "pf-v6-screen-reader" },
                ": ",
                screenReaderText,
                ";"))));
};
HelperTextItem.displayName = 'HelperTextItem';
//# sourceMappingURL=HelperTextItem.js.map