"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroup = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const form_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Form/form"));
const htmlConstants_1 = require("../../helpers/htmlConstants");
const react_styles_1 = require("@patternfly/react-styles");
const GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
const FormGroup = (_a) => {
    var { children = null, className = '', label, labelInfo, labelHelp, isRequired = false, isInline = false, hasNoPaddingTop = false, isStack = false, fieldId, role } = _a, props = tslib_1.__rest(_a, ["children", "className", "label", "labelInfo", "labelHelp", "isRequired", "isInline", "hasNoPaddingTop", "isStack", "fieldId", "role"]);
    const isGroupOrRadioGroup = role === 'group' || role === 'radiogroup';
    const LabelComponent = isGroupOrRadioGroup ? 'span' : 'label';
    const labelContent = (React.createElement(React.Fragment, null,
        React.createElement(LabelComponent, Object.assign({ className: (0, react_styles_1.css)(form_1.default.formLabel) }, (!isGroupOrRadioGroup && { htmlFor: fieldId })),
            React.createElement("span", { className: (0, react_styles_1.css)(form_1.default.formLabelText) }, label),
            isRequired && (React.createElement("span", { className: (0, react_styles_1.css)(form_1.default.formLabelRequired), "aria-hidden": "true" },
                ' ',
                htmlConstants_1.ASTERISK))),
        React.createElement(React.Fragment, null, "\u00A0\u00A0"),
        React.isValidElement(labelHelp) && React.createElement("span", { className: form_1.default.formGroupLabelHelp }, labelHelp)));
    return (React.createElement(GenerateId_1.GenerateId, null, (randomId) => (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(form_1.default.formGroup, className) }, (role && { role }), (isGroupOrRadioGroup && { 'aria-labelledby': `${fieldId || randomId}-legend` }), props),
        label && (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(form_1.default.formGroupLabel, labelInfo && form_1.default.modifiers.info, hasNoPaddingTop && form_1.default.modifiers.noPaddingTop) }, (isGroupOrRadioGroup && { id: `${fieldId || randomId}-legend` })),
            labelInfo && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: (0, react_styles_1.css)(form_1.default.formGroupLabelMain) }, labelContent),
                React.createElement("div", { className: (0, react_styles_1.css)(form_1.default.formGroupLabelInfo) }, labelInfo))),
            !labelInfo && labelContent)),
        React.createElement("div", { className: (0, react_styles_1.css)(form_1.default.formGroupControl, isInline && form_1.default.modifiers.inline, isStack && form_1.default.modifiers.stack) }, children)))));
};
exports.FormGroup = FormGroup;
exports.FormGroup.displayName = 'FormGroup';
//# sourceMappingURL=FormGroup.js.map