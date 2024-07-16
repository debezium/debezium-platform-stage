import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
const TheadBase = (_a) => {
    var { children, className, noWrap = false, innerRef, hasNestedHeader } = _a, props = __rest(_a, ["children", "className", "noWrap", "innerRef", "hasNestedHeader"]);
    return (React.createElement("thead", Object.assign({ className: css(styles.tableThead, className, noWrap && styles.modifiers.nowrap, hasNestedHeader && styles.modifiers.nestedColumnHeader), ref: innerRef }, props), children));
};
export const Thead = React.forwardRef((props, ref) => (React.createElement(TheadBase, Object.assign({}, props, { innerRef: ref }))));
Thead.displayName = 'Thead';
//# sourceMappingURL=Thead.js.map