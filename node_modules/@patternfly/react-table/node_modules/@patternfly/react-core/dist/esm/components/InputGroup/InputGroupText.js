import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group.mjs';
import { css } from '@patternfly/react-styles';
import { InputGroupItem } from './InputGroupItem';
export const InputGroupText = (_a) => {
    var { className, component = 'span', children, isPlain, isDisabled } = _a, props = __rest(_a, ["className", "component", "children", "isPlain", "isDisabled"]);
    const Component = component;
    return (React.createElement(InputGroupItem, { isPlain: isPlain, isBox: true, isDisabled: isDisabled },
        React.createElement(Component, Object.assign({ className: css(styles.inputGroupText, className) }, props), children)));
};
InputGroupText.displayName = 'InputGroupText';
//# sourceMappingURL=InputGroupText.js.map