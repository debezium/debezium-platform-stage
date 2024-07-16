"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardHeader = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const react_styles_1 = require("@patternfly/react-styles");
const Button_1 = require("../Button");
const times_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/times-icon'));
const WizardHeader = (_a) => {
    var { onClose = () => undefined, title, description, isCloseHidden, closeButtonAriaLabel, titleId, descriptionComponent: Component = 'div', descriptionId, className } = _a, props = tslib_1.__rest(_a, ["onClose", "title", "description", "isCloseHidden", "closeButtonAriaLabel", "titleId", "descriptionComponent", "descriptionId", "className"]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(wizard_1.default.wizardHeader, className) }, props),
        !isCloseHidden && (React.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardClose) },
            React.createElement(Button_1.Button, { variant: "plain", "aria-label": closeButtonAriaLabel, onClick: onClose, icon: React.createElement(times_icon_1.default, { "aria-hidden": "true" }) }))),
        React.createElement("div", { className: (0, react_styles_1.css)(wizard_1.default.wizardTitle) },
            React.createElement("h2", { className: (0, react_styles_1.css)(wizard_1.default.wizardTitleText), id: titleId }, title || React.createElement(React.Fragment, null, "\u00A0"))),
        description && (React.createElement(Component, { className: (0, react_styles_1.css)(wizard_1.default.wizardDescription), id: descriptionId }, description))));
};
exports.WizardHeader = WizardHeader;
exports.WizardHeader.displayName = 'WizardHeader';
//# sourceMappingURL=WizardHeader.js.map