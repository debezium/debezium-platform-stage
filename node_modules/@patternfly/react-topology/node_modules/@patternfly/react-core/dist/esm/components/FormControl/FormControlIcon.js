import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control.mjs';
import { css } from '@patternfly/react-styles';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
export const statusIcons = {
    success: CheckCircleIcon,
    error: ExclamationCircleIcon,
    warning: ExclamationTriangleIcon
};
export const FormControlIcon = (_a) => {
    var { status, customIcon, className } = _a, props = __rest(_a, ["status", "customIcon", "className"]);
    const StatusIcon = status && statusIcons[status];
    return (React.createElement("span", Object.assign({ className: css(styles.formControlIcon, status && styles.modifiers.status, className) }, props), customIcon || React.createElement(StatusIcon, null)));
};
//# sourceMappingURL=FormControlIcon.js.map