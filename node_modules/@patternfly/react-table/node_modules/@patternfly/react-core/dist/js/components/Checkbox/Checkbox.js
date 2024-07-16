"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const check_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Check/check"));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_1 = require("../../helpers");
const htmlConstants_1 = require("../../helpers/htmlConstants");
// tslint:disable-next-line:no-empty
const defaultOnChange = () => { };
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event, event.currentTarget.checked);
        };
        this.state = {
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(Checkbox.displayName)
        };
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, className, inputClassName, onChange, isLabelWrapped, labelPosition = 'end', isValid, isDisabled, isRequired, isChecked, label, checked, defaultChecked, description, body, ouiaId, ouiaSafe, component } = _a, props = tslib_1.__rest(_a, ['aria-label', "className", "inputClassName", "onChange", "isLabelWrapped", "labelPosition", "isValid", "isDisabled", "isRequired", "isChecked", "label", "checked", "defaultChecked", "description", "body", "ouiaId", "ouiaSafe", "component"]);
        if (!props.id) {
            // eslint-disable-next-line no-console
            console.error('Checkbox:', 'id is required to make input accessible');
        }
        const checkedProps = {};
        if ([true, false].includes(checked) || isChecked === true) {
            checkedProps.checked = checked || isChecked;
        }
        if (onChange !== defaultOnChange) {
            checkedProps.checked = isChecked;
        }
        if ([false, true].includes(defaultChecked)) {
            checkedProps.defaultChecked = defaultChecked;
        }
        const inputRendered = (React.createElement("input", Object.assign({}, props, { className: (0, react_styles_1.css)(check_1.default.checkInput, inputClassName), type: "checkbox", onChange: this.handleChange, "aria-invalid": !isValid, "aria-label": ariaLabel, disabled: isDisabled, required: isRequired, ref: (elem) => elem && (elem.indeterminate = isChecked === null) }, checkedProps, (0, helpers_1.getOUIAProps)(Checkbox.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))));
        const wrapWithLabel = (isLabelWrapped && !component) || component === 'label';
        const Label = wrapWithLabel ? 'span' : 'label';
        const labelRendered = label ? (React.createElement(Label, { className: (0, react_styles_1.css)(check_1.default.checkLabel, isDisabled && check_1.default.modifiers.disabled), htmlFor: !wrapWithLabel ? props.id : undefined },
            label,
            isRequired && (React.createElement("span", { className: (0, react_styles_1.css)(check_1.default.checkLabelRequired), "aria-hidden": "true" }, htmlConstants_1.ASTERISK)))) : null;
        const Component = component !== null && component !== void 0 ? component : (wrapWithLabel ? 'label' : 'div');
        checkedProps.checked = checkedProps.checked === null ? false : checkedProps.checked;
        return (React.createElement(Component, { className: (0, react_styles_1.css)(check_1.default.check, !label && check_1.default.modifiers.standalone, className), htmlFor: wrapWithLabel ? props.id : undefined },
            labelPosition === 'start' ? (React.createElement(React.Fragment, null,
                labelRendered,
                inputRendered)) : (React.createElement(React.Fragment, null,
                inputRendered,
                labelRendered)),
            description && React.createElement("span", { className: (0, react_styles_1.css)(check_1.default.checkDescription) }, description),
            body && React.createElement("span", { className: (0, react_styles_1.css)(check_1.default.checkBody) }, body)));
    }
}
exports.Checkbox = Checkbox;
Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
    className: '',
    isLabelWrapped: false,
    isValid: true,
    isDisabled: false,
    isRequired: false,
    isChecked: false,
    onChange: defaultOnChange,
    ouiaSafe: true
};
//# sourceMappingURL=Checkbox.js.map