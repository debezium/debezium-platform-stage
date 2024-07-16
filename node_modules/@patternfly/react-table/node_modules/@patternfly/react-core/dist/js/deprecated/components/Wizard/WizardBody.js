"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardBody = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const react_styles_1 = require("@patternfly/react-styles");
const WizardDrawerWrapper_1 = require("./WizardDrawerWrapper");
const Drawer_1 = require("../../../components/Drawer");
const util_1 = require("../../../helpers/util");
const resizeObserver_1 = require("../../../helpers/resizeObserver");
const WizardBody = ({ children, hasNoBodyPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, mainComponent = 'div', hasDrawer, isDrawerExpanded, onExpandDrawer, activeStep }) => {
    const MainComponent = mainComponent;
    const [hasScrollbar, setHasScrollbar] = React.useState(false);
    const [previousWidth, setPreviousWidth] = React.useState(undefined);
    const wizardBodyRef = React.useRef(null);
    React.useEffect(() => {
        const resize = () => {
            if (wizardBodyRef === null || wizardBodyRef === void 0 ? void 0 : wizardBodyRef.current) {
                const { offsetWidth, offsetHeight, scrollHeight } = wizardBodyRef.current;
                if (previousWidth !== offsetWidth) {
                    setPreviousWidth(offsetWidth);
                    setHasScrollbar(offsetHeight < scrollHeight);
                }
            }
        };
        const handleResizeWithDelay = (0, util_1.debounce)(resize, 250);
        let observer = () => { };
        if (wizardBodyRef === null || wizardBodyRef === void 0 ? void 0 : wizardBodyRef.current) {
            observer = (0, resizeObserver_1.getResizeObserver)(wizardBodyRef.current, handleResizeWithDelay);
            const { offsetHeight, scrollHeight } = wizardBodyRef.current;
            setHasScrollbar(offsetHeight < scrollHeight);
            setPreviousWidth(wizardBodyRef.current.offsetWidth);
        }
        return () => {
            observer();
        };
    }, []);
    return (React.createElement(MainComponent, Object.assign({}, (mainComponent === 'div' && hasScrollbar && { role: 'region' }), (hasScrollbar && { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 }), { ref: wizardBodyRef, className: (0, react_styles_1.css)(wizard_1.default.wizardMain) }),
        React.createElement(WizardDrawerWrapper_1.WizardDrawerWrapper, { hasDrawer: hasDrawer && activeStep.drawerPanelContent, wrapper: (children) => (React.createElement(Drawer_1.Drawer, { isInline: true, isExpanded: isDrawerExpanded, onExpand: onExpandDrawer },
                React.createElement(Drawer_1.DrawerContent, { panelContent: activeStep.drawerPanelContent }, children))) },
            React.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardMainBody, hasNoBodyPadding && wizard_1.default.modifiers.noPadding) }, children))));
};
exports.WizardBody = WizardBody;
exports.WizardBody.displayName = 'WizardBody';
//# sourceMappingURL=WizardBody.js.map