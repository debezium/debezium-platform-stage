import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Brand/brand.mjs';
import { setBreakpointCssVars } from '../../helpers';
import cssBrandHeight from '@patternfly/react-tokens/dist/esm/c_brand_Height';
import cssBrandWidth from '@patternfly/react-tokens/dist/esm/c_brand_Width';
export const Brand = (_a) => {
    var { className = '', src = '', alt, children, widths, heights, style } = _a, props = __rest(_a, ["className", "src", "alt", "children", "widths", "heights", "style"]);
    let responsiveStyles;
    if (widths !== undefined) {
        responsiveStyles = Object.assign({}, setBreakpointCssVars(widths, cssBrandWidth.name));
    }
    if (heights !== undefined) {
        responsiveStyles = Object.assign(Object.assign({}, responsiveStyles), setBreakpointCssVars(heights, cssBrandHeight.name));
    }
    return (
    /** the brand component currently contains no styling the 'pf-v6-c-brand' string will be used for the className */
    children !== undefined ? (React.createElement("picture", Object.assign({ className: css(styles.brand, styles.modifiers.picture, className), style: Object.assign(Object.assign({}, style), responsiveStyles) }, props),
        children,
        React.createElement("img", { src: src, alt: alt }))) : (React.createElement("img", Object.assign({}, props, { className: css(styles.brand, className), style: Object.assign(Object.assign({}, style), responsiveStyles), src: src, alt: alt }))));
};
Brand.displayName = 'Brand';
//# sourceMappingURL=Brand.js.map