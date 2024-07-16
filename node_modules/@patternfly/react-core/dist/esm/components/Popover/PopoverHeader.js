import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover.mjs';
import { PopoverHeaderIcon } from './PopoverHeaderIcon';
import { PopoverHeaderText } from './PopoverHeaderText';
export const PopoverHeader = (_a) => {
    var { children, icon, className, titleHeadingLevel = 'h6', alertSeverityVariant, id, alertSeverityScreenReaderText } = _a, props = __rest(_a, ["children", "icon", "className", "titleHeadingLevel", "alertSeverityVariant", "id", "alertSeverityScreenReaderText"]);
    return (React.createElement("header", Object.assign({ className: css(styles.popoverHeader, className) }, props),
        React.createElement("div", { className: css(styles.popoverTitle), id: id },
            icon && React.createElement(PopoverHeaderIcon, null, icon),
            React.createElement(PopoverHeaderText, { headingLevel: titleHeadingLevel },
                alertSeverityVariant && alertSeverityScreenReaderText && (React.createElement("span", { className: "pf-v6-screen-reader" }, alertSeverityScreenReaderText)),
                children))));
};
PopoverHeader.displayName = 'PopoverHeader';
//# sourceMappingURL=PopoverHeader.js.map