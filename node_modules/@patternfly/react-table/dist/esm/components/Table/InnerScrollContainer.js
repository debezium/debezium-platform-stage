import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-scrollable.mjs';
export const InnerScrollContainer = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(className, styles.scrollInnerWrapper) }, props), children));
};
InnerScrollContainer.displayName = 'InnerScrollContainer';
//# sourceMappingURL=InnerScrollContainer.js.map