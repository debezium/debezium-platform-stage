import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable.mjs';
export const OuterScrollContainer = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(className, styles.scrollOuterWrapper) }, props), children));
};
OuterScrollContainer.displayName = 'OuterScrollContainer';
//# sourceMappingURL=OuterScrollContainer.js.map