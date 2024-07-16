import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItem } from '../Menu';
import { useOUIAProps } from '../../helpers';
const DropdownItemBase = (_a) => {
    var { children, className, description, isDisabled, isAriaDisabled, value, onClick, ouiaId, ouiaSafe, innerRef, tooltipProps } = _a, props = __rest(_a, ["children", "className", "description", "isDisabled", "isAriaDisabled", "value", "onClick", "ouiaId", "ouiaSafe", "innerRef", "tooltipProps"]);
    const ouiaProps = useOUIAProps(DropdownItem.displayName, ouiaId, ouiaSafe);
    return (React.createElement(MenuItem, Object.assign({ className: css(className), description: description, isDisabled: isDisabled, isAriaDisabled: isAriaDisabled, itemId: value, onClick: onClick, tooltipProps: tooltipProps, ref: innerRef }, ouiaProps, props), children));
};
export const DropdownItem = React.forwardRef((props, ref) => (React.createElement(DropdownItemBase, Object.assign({}, props, { innerRef: ref }))));
DropdownItem.displayName = 'DropdownItem';
//# sourceMappingURL=DropdownItem.js.map