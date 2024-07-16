"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const radio_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Radio/radio"));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_1 = require("../../helpers");
class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event, event.currentTarget.checked);
        };
        if (!props.label && !props['aria-label']) {
            // eslint-disable-next-line no-console
            console.error('Radio:', 'Radio requires an aria-label to be specified');
        }
        this.state = {
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(Radio.displayName)
        };
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, checked, className, inputClassName, defaultChecked, isLabelWrapped, labelPosition = 'end', isChecked, isDisabled, isValid, label, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange, description, body, ouiaId, ouiaSafe = true, component } = _a, props = tslib_1.__rest(_a, ['aria-label', "checked", "className", "inputClassName", "defaultChecked", "isLabelWrapped", "labelPosition", "isChecked", "isDisabled", "isValid", "label", "onChange", "description", "body", "ouiaId", "ouiaSafe", "component"]);
        if (!props.id) {
            // eslint-disable-next-line no-console
            console.error('Radio:', 'id is required to make input accessible');
        }
        const inputRendered = (React.createElement("input", Object.assign({}, props, { className: (0, react_styles_1.css)(radio_1.default.radioInput, inputClassName), type: "radio", onChange: this.handleChange, "aria-invalid": !isValid, disabled: isDisabled, checked: checked || isChecked }, (checked === undefined && { defaultChecked }), (!label && { 'aria-label': ariaLabel }), (0, helpers_1.getOUIAProps)(Radio.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))));
        const wrapWithLabel = (isLabelWrapped && !component) || component === 'label';
        const Label = wrapWithLabel ? 'span' : 'label';
        const labelRendered = label ? (React.createElement(Label, { className: (0, react_styles_1.css)(radio_1.default.radioLabel, isDisabled && radio_1.default.modifiers.disabled), htmlFor: !wrapWithLabel ? props.id : undefined }, label)) : null;
        const Component = component !== null && component !== void 0 ? component : (wrapWithLabel ? 'label' : 'div');
        return (React.createElement(Component, { className: (0, react_styles_1.css)(radio_1.default.radio, !label && radio_1.default.modifiers.standalone, className), htmlFor: wrapWithLabel ? props.id : undefined },
            labelPosition === 'start' ? (React.createElement(React.Fragment, null,
                labelRendered,
                inputRendered)) : (React.createElement(React.Fragment, null,
                inputRendered,
                labelRendered)),
            description && React.createElement("span", { className: (0, react_styles_1.css)(radio_1.default.radioDescription) }, description),
            body && React.createElement("span", { className: (0, react_styles_1.css)(radio_1.default.radioBody) }, body)));
    }
}
exports.Radio = Radio;
Radio.displayName = 'Radio';
Radio.defaultProps = {
    className: '',
    isDisabled: false,
    isValid: true,
    onChange: () => { }
};
//# sourceMappingURL=Radio.js.map