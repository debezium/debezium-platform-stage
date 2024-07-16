import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state.mjs';
export const EmptyStateFooter = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(styles.emptyStateFooter, className) }, props), children));
};
EmptyStateFooter.displayName = 'EmptyStateFooter';
//# sourceMappingURL=EmptyStateFooter.js.map