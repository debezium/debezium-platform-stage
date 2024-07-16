import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/SkipToContent/skip-to-content.mjs';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
export const SkipToContent = (_a) => {
    var { children = null, className = '', href } = _a, props = __rest(_a, ["children", "className", "href"]);
    return (React.createElement("div", Object.assign({ className: css(styles.skipToContent, className) }, props),
        React.createElement(Button, { variant: ButtonVariant.primary, component: "a", href: href }, children)));
};
SkipToContent.displayName = 'SkipToContent';
//# sourceMappingURL=SkipToContent.js.map