"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const form_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Form/form"));
const react_styles_1 = require("@patternfly/react-styles");
const c_form_m_limit_width_MaxWidth_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_form_m_limit_width_MaxWidth'));
const FormBase = (_a) => {
    var { children = null, className = '', isHorizontal = false, isWidthLimited = false, maxWidth = '', innerRef } = _a, props = tslib_1.__rest(_a, ["children", "className", "isHorizontal", "isWidthLimited", "maxWidth", "innerRef"]);
    return (React.createElement("form", Object.assign({ noValidate: true }, (maxWidth && {
        style: Object.assign({ [c_form_m_limit_width_MaxWidth_1.default.name]: maxWidth }, props.style)
    }), props, { className: (0, react_styles_1.css)(form_1.default.form, isHorizontal && form_1.default.modifiers.horizontal, (isWidthLimited || maxWidth) && form_1.default.modifiers.limitWidth, className), ref: innerRef }), children));
};
exports.Form = React.forwardRef((props, ref) => React.createElement(FormBase, Object.assign({ innerRef: ref }, props)));
exports.Form.displayName = 'Form';
//# sourceMappingURL=Form.js.map