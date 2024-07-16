import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group.mjs';
import { css } from '@patternfly/react-styles';
export const InputGroupItem = (_a) => {
    var { className, children, isFill = false, isBox = false, isPlain, isDisabled } = _a, props = __rest(_a, ["className", "children", "isFill", "isBox", "isPlain", "isDisabled"]);
    return (React.createElement("div", Object.assign({ className: css(styles.inputGroupItem, isFill && styles.modifiers.fill, isBox && styles.modifiers.box, isPlain && styles.modifiers.plain, isDisabled && styles.modifiers.disabled, className) }, props), children));
};
InputGroupItem.displayName = 'InputGroupItem';
//# sourceMappingURL=InputGroupItem.js.map