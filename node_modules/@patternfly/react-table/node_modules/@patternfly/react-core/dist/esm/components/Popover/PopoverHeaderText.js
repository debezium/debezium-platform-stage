import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover.mjs';
export const PopoverHeaderText = (_a) => {
    var { children, className, headingLevel } = _a, props = __rest(_a, ["children", "className", "headingLevel"]);
    const HeadingLevel = headingLevel;
    return (React.createElement(HeadingLevel, Object.assign({ className: css(styles.popoverTitleText, className) }, props), children));
};
PopoverHeaderText.displayName = 'PopoverHeaderText';
//# sourceMappingURL=PopoverHeaderText.js.map