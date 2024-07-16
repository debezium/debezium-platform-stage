import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Banner/banner.mjs';
import { css } from '@patternfly/react-styles';
export const Banner = (_a) => {
    var { children, className, screenReaderText, isSticky = false, color, status } = _a, props = __rest(_a, ["children", "className", "screenReaderText", "isSticky", "color", "status"]);
    const getStatusOrColorModifier = () => {
        if (status) {
            return styles.modifiers[status];
        }
        if (color) {
            return styles.modifiers[color];
        }
    };
    return (React.createElement("div", Object.assign({ className: css(styles.banner, getStatusOrColorModifier(), isSticky && styles.modifiers.sticky, className) }, props),
        screenReaderText && React.createElement("span", { className: "pf-v6-screen-reader" }, screenReaderText),
        children));
};
Banner.displayName = 'Banner';
//# sourceMappingURL=Banner.js.map