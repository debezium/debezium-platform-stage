import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItem } from '../Menu';
const SelectOptionBase = (_a) => {
    var { children, className, innerRef, value } = _a, props = __rest(_a, ["children", "className", "innerRef", "value"]);
    return (React.createElement(MenuItem, Object.assign({ itemId: value, ref: innerRef, className: css(className) }, props), children));
};
export const SelectOption = React.forwardRef((props, ref) => (React.createElement(SelectOptionBase, Object.assign({}, props, { innerRef: ref }))));
SelectOption.displayName = 'SelectOption';
//# sourceMappingURL=SelectOption.js.map