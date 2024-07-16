import { __rest } from "tslib";
import * as React from 'react';
import { DropdownItem } from '../Dropdown';
import { OverflowMenuContext } from './OverflowMenuContext';
export const OverflowMenuDropdownItem = (_a) => {
    var { children, isShared = false, itemId } = _a, additionalProps = __rest(_a, ["children", "isShared", "itemId"]);
    return (React.createElement(OverflowMenuContext.Consumer, null, (value) => (!isShared || value.isBelowBreakpoint) && (React.createElement(DropdownItem, Object.assign({ component: "button", value: itemId }, additionalProps), children))));
};
OverflowMenuDropdownItem.displayName = 'OverflowMenuDropdownItem';
//# sourceMappingURL=OverflowMenuDropdownItem.js.map