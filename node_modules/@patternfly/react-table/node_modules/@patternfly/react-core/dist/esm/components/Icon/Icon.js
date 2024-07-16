import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Icon/icon.mjs';
import { css } from '@patternfly/react-styles';
import { Spinner } from '../Spinner';
export const Icon = (_a) => {
    var { children, className, progressIcon, size, iconSize, progressIconSize, status, isInline = false, isInProgress = false, defaultProgressArialabel = 'Loading...', shouldMirrorRTL = false } = _a, props = __rest(_a, ["children", "className", "progressIcon", "size", "iconSize", "progressIconSize", "status", "isInline", "isInProgress", "defaultProgressArialabel", "shouldMirrorRTL"]);
    const _progressIcon = progressIcon !== null && progressIcon !== void 0 ? progressIcon : React.createElement(Spinner, { diameter: "1em", "aria-label": defaultProgressArialabel });
    return (React.createElement("span", Object.assign({ className: css(styles.icon, isInline && styles.modifiers.inline, isInProgress && styles.modifiers.inProgress, styles.modifiers[size], className) }, props),
        React.createElement("span", { className: css(styles.iconContent, styles.modifiers[iconSize], styles.modifiers[status], shouldMirrorRTL && 'pf-v6-m-mirror-inline-rtl') }, children),
        isInProgress && (React.createElement("span", { className: css(styles.iconProgress, styles.modifiers[progressIconSize], className) }, _progressIcon))));
};
Icon.displayName = 'Icon';
//# sourceMappingURL=Icon.js.map