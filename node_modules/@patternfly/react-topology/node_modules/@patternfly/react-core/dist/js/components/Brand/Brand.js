"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const brand_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Brand/brand"));
const helpers_1 = require("../../helpers");
const c_brand_Height_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_brand_Height'));
const c_brand_Width_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_brand_Width'));
const Brand = (_a) => {
    var { className = '', src = '', alt, children, widths, heights, style } = _a, props = tslib_1.__rest(_a, ["className", "src", "alt", "children", "widths", "heights", "style"]);
    let responsiveStyles;
    if (widths !== undefined) {
        responsiveStyles = Object.assign({}, (0, helpers_1.setBreakpointCssVars)(widths, c_brand_Width_1.default.name));
    }
    if (heights !== undefined) {
        responsiveStyles = Object.assign(Object.assign({}, responsiveStyles), (0, helpers_1.setBreakpointCssVars)(heights, c_brand_Height_1.default.name));
    }
    return (
    /** the brand component currently contains no styling the 'pf-v6-c-brand' string will be used for the className */
    children !== undefined ? (React.createElement("picture", Object.assign({ className: (0, react_styles_1.css)(brand_1.default.brand, brand_1.default.modifiers.picture, className), style: Object.assign(Object.assign({}, style), responsiveStyles) }, props),
        children,
        React.createElement("img", { src: src, alt: alt }))) : (React.createElement("img", Object.assign({}, props, { className: (0, react_styles_1.css)(brand_1.default.brand, className), style: Object.assign(Object.assign({}, style), responsiveStyles), src: src, alt: alt }))));
};
exports.Brand = Brand;
exports.Brand.displayName = 'Brand';
//# sourceMappingURL=Brand.js.map