"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = exports.TextInputBase = exports.TextInputReadOnlyVariant = exports.TextInputTypes = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const form_control_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/FormControl/form-control"));
const react_styles_1 = require("@patternfly/react-styles");
const constants_1 = require("../../helpers/constants");
const util_1 = require("../../helpers/util");
const helpers_1 = require("../../helpers");
const resizeObserver_1 = require("../../helpers/resizeObserver");
const FormControlIcon_1 = require("../FormControl/FormControlIcon");
var TextInputTypes;
(function (TextInputTypes) {
    TextInputTypes["text"] = "text";
    TextInputTypes["date"] = "date";
    TextInputTypes["datetimeLocal"] = "datetime-local";
    TextInputTypes["email"] = "email";
    TextInputTypes["month"] = "month";
    TextInputTypes["number"] = "number";
    TextInputTypes["password"] = "password";
    TextInputTypes["search"] = "search";
    TextInputTypes["tel"] = "tel";
    TextInputTypes["time"] = "time";
    TextInputTypes["url"] = "url";
})(TextInputTypes || (exports.TextInputTypes = TextInputTypes = {}));
var TextInputReadOnlyVariant;
(function (TextInputReadOnlyVariant) {
    TextInputReadOnlyVariant["default"] = "default";
    TextInputReadOnlyVariant["plain"] = "plain";
})(TextInputReadOnlyVariant || (exports.TextInputReadOnlyVariant = TextInputReadOnlyVariant = {}));
// eslint-disable-next-line patternfly-react/no-anonymous-functions
class TextInputBase extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.observer = () => { };
        this.handleChange = (event) => {
            if (this.props.onChange) {
                this.props.onChange(event, event.currentTarget.value);
            }
        };
        this.handleResize = () => {
            const inputRef = this.props.innerRef || this.inputRef;
            if (inputRef && inputRef.current) {
                (0, util_1.trimLeft)(inputRef.current, String(this.props.value));
            }
        };
        this.restoreText = () => {
            const inputRef = this.props.innerRef || this.inputRef;
            // restore the value
            inputRef.current.value = String(this.props.value);
            // make sure we still see the rightmost value to preserve cursor click position
            inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        };
        this.onFocus = (event) => {
            const { isLeftTruncated, isStartTruncated, onFocus } = this.props;
            if (isLeftTruncated || isStartTruncated) {
                this.restoreText();
            }
            onFocus && onFocus(event);
        };
        this.onBlur = (event) => {
            const { isLeftTruncated, isStartTruncated, onBlur } = this.props;
            if (isLeftTruncated || isStartTruncated) {
                this.handleResize();
            }
            onBlur && onBlur(event);
        };
        this.sanitizeInputValue = (value) => typeof value === 'string' ? value.replace(/\n/g, ' ') : value;
        if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
            // eslint-disable-next-line no-console
            console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
        }
        this.state = {
            ouiaStateId: (0, helpers_1.getDefaultOUIAId)(TextInputBase.displayName)
        };
    }
    componentDidMount() {
        if (this.props.isLeftTruncated || this.props.isStartTruncated) {
            const inputRef = this.props.innerRef || this.inputRef;
            this.observer = (0, resizeObserver_1.getResizeObserver)(inputRef.current, this.handleResize, true);
            this.handleResize();
        }
    }
    componentWillUnmount() {
        if (this.props.isLeftTruncated || this.props.isStartTruncated) {
            this.observer();
        }
    }
    render() {
        const _a = this.props, { innerRef, className, type, value, placeholder, validated, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onChange, onFocus, onBlur, isLeftTruncated, isStartTruncated, isExpanded, expandedProps, readOnly, readOnlyVariant, isRequired, isDisabled, customIcon, ouiaId, ouiaSafe } = _a, props = tslib_1.__rest(_a, ["innerRef", "className", "type", "value", "placeholder", "validated", "onChange", "onFocus", "onBlur", "isLeftTruncated", "isStartTruncated", "isExpanded", "expandedProps", "readOnly", "readOnlyVariant", "isRequired", "isDisabled", "customIcon", "ouiaId", "ouiaSafe"]);
        const hasStatusIcon = ['success', 'error', 'warning'].includes(validated);
        const ariaExpandedProps = expandedProps
            ? { 'aria-expanded': expandedProps === null || expandedProps === void 0 ? void 0 : expandedProps.isExpanded, 'aria-controls': expandedProps === null || expandedProps === void 0 ? void 0 : expandedProps.ariaControls, role: 'combobox' }
            : {};
        return (React.createElement("span", { className: (0, react_styles_1.css)(form_control_1.default.formControl, readOnlyVariant && form_control_1.default.modifiers.readonly, readOnlyVariant === 'plain' && form_control_1.default.modifiers.plain, isDisabled && form_control_1.default.modifiers.disabled, (isExpanded || (expandedProps === null || expandedProps === void 0 ? void 0 : expandedProps.isExpanded)) && form_control_1.default.modifiers.expanded, customIcon && form_control_1.default.modifiers.icon, hasStatusIcon && form_control_1.default.modifiers[validated], className) },
            React.createElement("input", Object.assign({}, props, { onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.handleChange, type: type, value: this.sanitizeInputValue(value), "aria-invalid": props['aria-invalid'] ? props['aria-invalid'] : validated === constants_1.ValidatedOptions.error }, ariaExpandedProps, { required: isRequired, disabled: isDisabled, readOnly: !!readOnlyVariant || readOnly, ref: innerRef || this.inputRef, placeholder: placeholder }, (0, helpers_1.getOUIAProps)(exports.TextInput.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))),
            (customIcon || hasStatusIcon) && (React.createElement("span", { className: (0, react_styles_1.css)(form_control_1.default.formControlUtilities) },
                customIcon && React.createElement(FormControlIcon_1.FormControlIcon, { customIcon: customIcon }),
                hasStatusIcon && React.createElement(FormControlIcon_1.FormControlIcon, { status: validated })))));
    }
}
exports.TextInputBase = TextInputBase;
TextInputBase.displayName = 'TextInputBase';
TextInputBase.defaultProps = {
    'aria-label': null,
    isRequired: false,
    validated: 'default',
    isDisabled: false,
    isExpanded: false,
    type: TextInputTypes.text,
    isLeftTruncated: false,
    isStartTruncated: false,
    onChange: () => undefined,
    ouiaSafe: true
};
exports.TextInput = React.forwardRef((props, ref) => (React.createElement(TextInputBase, Object.assign({}, props, { innerRef: ref }))));
exports.TextInput.displayName = 'TextInput';
//# sourceMappingURL=TextInput.js.map