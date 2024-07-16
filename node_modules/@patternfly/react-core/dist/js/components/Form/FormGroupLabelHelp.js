"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroupLabelHelp = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Button_1 = require("../Button");
const question_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/question-circle-icon'));
const constants_1 = require("../../helpers/constants");
const FormGroupLabelHelpBase = (_a) => {
    var { 'aria-label': ariaLabel, className, innerRef } = _a, props = tslib_1.__rest(_a, ['aria-label', "className", "innerRef"]);
    const ref = react_1.default.useRef(null);
    const buttonRef = innerRef || ref;
    const isMutableRef = (ref) => typeof ref === 'object' && ref !== null && 'current' in ref && ref.current !== undefined;
    const handleKeyDown = (event) => {
        if ([constants_1.KeyTypes.Space, constants_1.KeyTypes.Enter].includes(event.key) && isMutableRef(buttonRef) && buttonRef.current) {
            event.preventDefault();
            buttonRef.current.click();
        }
    };
    return (react_1.default.createElement(Button_1.Button, Object.assign({ component: "span", isInline: true, ref: buttonRef, onKeyDown: handleKeyDown, "aria-label": ariaLabel, className: className, variant: "plain", hasNoPadding: true }, props, { icon: react_1.default.createElement(question_circle_icon_1.default, null) })));
};
exports.FormGroupLabelHelp = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(FormGroupLabelHelpBase, Object.assign({ innerRef: ref }, props))));
exports.FormGroupLabelHelp.displayName = 'FormGroupLabelHelp';
//# sourceMappingURL=FormGroupLabelHelp.js.map