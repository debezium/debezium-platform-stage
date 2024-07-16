import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
const TbodyBase = (_a) => {
    var { children, className, isExpanded, innerRef, isEvenStriped = false, isOddStriped = false } = _a, props = __rest(_a, ["children", "className", "isExpanded", "innerRef", "isEvenStriped", "isOddStriped"]);
    return (React.createElement("tbody", Object.assign({ role: "rowgroup", className: css(styles.tableTbody, className, isExpanded && styles.modifiers.expanded, isOddStriped && styles.modifiers.striped, isEvenStriped && styles.modifiers.stripedEven), ref: innerRef }, props), children));
};
export const Tbody = React.forwardRef((props, ref) => (React.createElement(TbodyBase, Object.assign({}, props, { innerRef: ref }))));
Tbody.displayName = 'Tbody';
//# sourceMappingURL=Tbody.js.map