"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardBody = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const react_styles_1 = require("@patternfly/react-styles");
const WizardContext_1 = require("./WizardContext");
const util_1 = require("../../helpers/util");
const resizeObserver_1 = require("../../helpers/resizeObserver");
const WizardBody = (_a) => {
    var { children, className, hasNoPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, component = 'div' } = _a, props = tslib_1.__rest(_a, ["children", "className", "hasNoPadding", 'aria-label', 'aria-labelledby', "component"]);
    const [hasScrollbar, setHasScrollbar] = react_1.default.useState(false);
    const [previousWidth, setPreviousWidth] = react_1.default.useState(undefined);
    const WrapperComponent = component;
    const { activeStep, shouldFocusContent, mainWrapperRef } = react_1.default.useContext(WizardContext_1.WizardContext);
    const defaultAriaLabel = ariaLabel || `${activeStep === null || activeStep === void 0 ? void 0 : activeStep.name} content`;
    react_1.default.useEffect(() => {
        const resize = () => {
            if (mainWrapperRef === null || mainWrapperRef === void 0 ? void 0 : mainWrapperRef.current) {
                const { offsetWidth, offsetHeight, scrollHeight } = mainWrapperRef.current;
                if (previousWidth !== offsetWidth) {
                    setPreviousWidth(offsetWidth);
                    setHasScrollbar(offsetHeight < scrollHeight);
                }
            }
        };
        const handleResizeWithDelay = (0, util_1.debounce)(resize, 250);
        let observer = () => { };
        if (mainWrapperRef === null || mainWrapperRef === void 0 ? void 0 : mainWrapperRef.current) {
            observer = (0, resizeObserver_1.getResizeObserver)(mainWrapperRef.current, handleResizeWithDelay);
            const { offsetHeight, scrollHeight } = mainWrapperRef.current;
            setHasScrollbar(offsetHeight < scrollHeight);
            setPreviousWidth(mainWrapperRef.current.offsetWidth);
        }
        return () => {
            observer();
        };
    }, [previousWidth]);
    return (react_1.default.createElement(WrapperComponent, Object.assign({ ref: mainWrapperRef }, (shouldFocusContent && { tabIndex: -1 }), (component === 'div' && hasScrollbar && { role: 'region' }), (hasScrollbar && { 'aria-label': defaultAriaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 }), { className: (0, react_styles_1.css)(wizard_1.default.wizardMain, className) }, props),
        react_1.default.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardMainBody, hasNoPadding && wizard_1.default.modifiers.noPadding) }, children)));
};
exports.WizardBody = WizardBody;
exports.WizardBody.displayName = 'WizardBody';
//# sourceMappingURL=WizardBody.js.map