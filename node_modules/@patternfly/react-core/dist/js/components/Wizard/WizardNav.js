"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardNav = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const react_styles_1 = require("@patternfly/react-styles");
const WizardNav = (_a) => {
    var { children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isExpanded = false, isInnerList = false, className } = _a, props = tslib_1.__rest(_a, ["children", 'aria-label', 'aria-labelledby', "isExpanded", "isInnerList", "className"]);
    if (isInnerList) {
        return (React.createElement("ol", Object.assign({ className: (0, react_styles_1.css)(wizard_1.default.wizardNavList, className), role: "list" }, props), children));
    }
    return (React.createElement("nav", Object.assign({ className: (0, react_styles_1.css)(wizard_1.default.wizardNav, isExpanded && wizard_1.default.modifiers.expanded, className), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy }, props),
        React.createElement("ol", { className: (0, react_styles_1.css)(wizard_1.default.wizardNavList), role: "list" }, children)));
};
exports.WizardNav = WizardNav;
exports.WizardNav.displayName = 'WizardNav';
//# sourceMappingURL=WizardNav.js.map