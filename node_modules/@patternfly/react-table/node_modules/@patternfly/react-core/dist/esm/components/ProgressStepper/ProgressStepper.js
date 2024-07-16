import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ProgressStepper/progress-stepper.mjs';
import { css } from '@patternfly/react-styles';
export const ProgressStepper = (_a) => {
    var { children, className, isCenterAligned, isVertical, isCompact, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["children", "className", "isCenterAligned", "isVertical", "isCompact", 'aria-label']);
    return (React.createElement("ol", Object.assign({ className: css(styles.progressStepper, isCenterAligned && styles.modifiers.center, isVertical && styles.modifiers.vertical, isCompact && styles.modifiers.compact, className), role: "list", "aria-label": ariaLabel }, props), children));
};
ProgressStepper.displayName = 'ProgressStepper';
//# sourceMappingURL=ProgressStepper.js.map