import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page.mjs';
import { css } from '@patternfly/react-styles';
export const PageSidebarBody = (_a) => {
    var { children, className, usePageInsets, isFilled } = _a, props = __rest(_a, ["children", "className", "usePageInsets", "isFilled"]);
    return (React.createElement("div", Object.assign({ className: css(styles.pageSidebarBody, usePageInsets && styles.modifiers.pageInsets, isFilled === false && styles.modifiers.noFill, isFilled === true && styles.modifiers.fill, className) }, props), children));
};
PageSidebarBody.displayName = 'PageSidebarBody';
//# sourceMappingURL=PageSidebarBody.js.map