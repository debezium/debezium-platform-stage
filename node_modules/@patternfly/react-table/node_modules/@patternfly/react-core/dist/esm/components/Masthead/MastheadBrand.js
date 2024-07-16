import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead.mjs';
import { css } from '@patternfly/react-styles';
export const MastheadBrand = (_a) => {
    var { children, className, component } = _a, props = __rest(_a, ["children", "className", "component"]);
    let Component = component;
    if (!component) {
        if ((props === null || props === void 0 ? void 0 : props.href) !== undefined) {
            Component = 'a';
        }
        else {
            Component = 'span';
        }
    }
    return (React.createElement(Component, Object.assign({ className: css(styles.mastheadBrand, className) }, (Component === 'a' && { tabIndex: 0 }), props), children));
};
MastheadBrand.displayName = 'MastheadBrand';
//# sourceMappingURL=MastheadBrand.js.map