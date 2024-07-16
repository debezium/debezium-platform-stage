import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group.mjs';
import { css } from '@patternfly/react-styles';
export const InputGroupBase = (_a) => {
    var { className, children, innerRef } = _a, props = __rest(_a, ["className", "children", "innerRef"]);
    const ref = React.useRef(null);
    const inputGroupRef = innerRef || ref;
    return (React.createElement("div", Object.assign({ ref: inputGroupRef, className: css(styles.inputGroup, className) }, props), children));
};
InputGroupBase.displayName = 'InputGroupBase';
export const InputGroup = React.forwardRef((props, ref) => (React.createElement(InputGroupBase, Object.assign({ innerRef: ref }, props))));
InputGroup.displayName = 'InputGroup';
//# sourceMappingURL=InputGroup.js.map