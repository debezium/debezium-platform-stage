import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Badge/badge.mjs';
export const Badge = (_a) => {
    var { isRead = false, isDisabled = false, className = '', children = '', screenReaderText } = _a, props = __rest(_a, ["isRead", "isDisabled", "className", "children", "screenReaderText"]);
    return (React.createElement("span", Object.assign({}, props, { className: css(styles.badge, (isRead ? styles.modifiers.read : styles.modifiers.unread), isDisabled && styles.modifiers.disabled, className) }),
        children,
        screenReaderText && React.createElement("span", { className: "pf-v6-screen-reader" }, screenReaderText)));
};
Badge.displayName = 'Badge';
//# sourceMappingURL=Badge.js.map