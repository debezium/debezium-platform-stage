import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton.mjs';
import { css } from '@patternfly/react-styles';
import cssHeight from '@patternfly/react-tokens/dist/esm/c_skeleton_Height';
import cssWidth from '@patternfly/react-tokens/dist/esm/c_skeleton_Width';
export const Skeleton = (_a) => {
    var { className, width, height, fontSize, shape, screenreaderText } = _a, props = __rest(_a, ["className", "width", "height", "fontSize", "shape", "screenreaderText"]);
    const fontHeightClassName = fontSize
        ? Object.values(styles.modifiers).find((key) => key === `pf-m-text-${fontSize}`)
        : undefined;
    return (React.createElement("div", Object.assign({}, props, { className: css(styles.skeleton, fontSize && fontHeightClassName, shape === 'circle' && styles.modifiers.circle, shape === 'square' && styles.modifiers.square, className) }, ((width || height) && {
        style: Object.assign({ [cssWidth.name]: width ? width : undefined, [cssHeight.name]: height ? height : undefined }, props.style)
    })),
        React.createElement("span", { className: "pf-v6-screen-reader" }, screenreaderText)));
};
Skeleton.displayName = 'Skeleton';
//# sourceMappingURL=Skeleton.js.map