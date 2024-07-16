"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const switch_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Switch/switch"));
const react_styles_1 = require("@patternfly/react-styles");
const check_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/check-icon'));
const util_1 = require("../../helpers/util");
const helpers_1 = require("../../helpers");
class Switch extends React.Component {
    constructor(props) {
        super(props);
        if (!props.label && !props['aria-label'] && !props['aria-labelledby']) {
            // eslint-disable-next-line no-console
            console.error('Switch: Switch requires at least one of label, aria-labelledby, or aria-label props to be specified');
        }
        this.id = props.id || (0, util_1.getUniqueId)();
        this.state = {
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(Switch.displayName)
        };
    }
    render() {
        const _a = this.props, { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id, className, label, isChecked, defaultChecked, hasCheckIcon, isDisabled, onChange, isReversed, ouiaId, ouiaSafe, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy } = _a, props = tslib_1.__rest(_a, ["id", "className", "label", "isChecked", "defaultChecked", "hasCheckIcon", "isDisabled", "onChange", "isReversed", "ouiaId", "ouiaSafe", 'aria-label', 'aria-labelledby']);
        const hasAccessibleName = label || ariaLabel || ariaLabelledBy;
        const isAriaLabelledBy = hasAccessibleName && (!ariaLabel || ariaLabelledBy);
        const useDefaultAriaLabelledBy = !ariaLabelledBy && !ariaLabel;
        const ariaLabelledByIds = ariaLabelledBy !== null && ariaLabelledBy !== void 0 ? ariaLabelledBy : `${this.id}-label`;
        return (React.createElement("label", Object.assign({ className: (0, react_styles_1.css)(switch_1.default.switch, isReversed && switch_1.default.modifiers.reverse, className), htmlFor: this.id }, (0, helpers_1.getOUIAProps)(Switch.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)),
            React.createElement("input", Object.assign({ id: this.id, className: (0, react_styles_1.css)(switch_1.default.switchInput), type: "checkbox", role: "switch", onChange: (event) => onChange(event, event.target.checked) }, (defaultChecked !== undefined ? { defaultChecked } : { checked: isChecked }), { disabled: isDisabled, "aria-labelledby": isAriaLabelledBy ? ariaLabelledByIds : null, "aria-label": ariaLabel }, props)),
            label !== undefined ? (React.createElement(React.Fragment, null,
                React.createElement("span", { className: (0, react_styles_1.css)(switch_1.default.switchToggle) }, hasCheckIcon && (React.createElement("span", { className: (0, react_styles_1.css)(switch_1.default.switchToggleIcon), "aria-hidden": "true" },
                    React.createElement(check_icon_1.default, null)))),
                React.createElement("span", { className: (0, react_styles_1.css)(switch_1.default.switchLabel), id: isAriaLabelledBy && useDefaultAriaLabelledBy ? `${this.id}-label` : null, "aria-hidden": "true" }, label))) : (React.createElement("span", { className: (0, react_styles_1.css)(switch_1.default.switchToggle) },
                React.createElement("div", { className: (0, react_styles_1.css)(switch_1.default.switchToggleIcon), "aria-hidden": "true" },
                    React.createElement(check_icon_1.default, null))))));
    }
}
exports.Switch = Switch;
Switch.displayName = 'Switch';
Switch.defaultProps = {
    isChecked: true,
    isDisabled: false,
    isReversed: false,
    'aria-label': undefined,
    'aria-labelledby': undefined,
    onChange: () => undefined
};
//# sourceMappingURL=Switch.js.map