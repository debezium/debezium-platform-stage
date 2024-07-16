"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperTextItem = exports.HelperTextItemVariant = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const helper_text_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/HelperText/helper-text"));
const react_styles_1 = require("@patternfly/react-styles");
const minus_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/minus-icon'));
const exclamation_triangle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon'));
const check_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/check-circle-icon'));
const exclamation_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/exclamation-circle-icon'));
var HelperTextItemVariant;
(function (HelperTextItemVariant) {
    HelperTextItemVariant["default"] = "default";
    HelperTextItemVariant["warning"] = "warning";
    HelperTextItemVariant["error"] = "error";
    HelperTextItemVariant["success"] = "success";
})(HelperTextItemVariant || (exports.HelperTextItemVariant = HelperTextItemVariant = {}));
const defaultVariantIcons = {
    indeterminate: React.createElement(minus_icon_1.default, null),
    warning: React.createElement(exclamation_triangle_icon_1.default, null),
    success: React.createElement(check_circle_icon_1.default, null),
    error: React.createElement(exclamation_circle_icon_1.default, null)
};
const HelperTextItem = (_a) => {
    var { children, className, component = 'div', variant = 'default', icon, id, screenReaderText = `${variant} status` } = _a, props = tslib_1.__rest(_a, ["children", "className", "component", "variant", "icon", "id", "screenReaderText"]);
    const Component = component;
    const isNotDefaultVariant = variant !== 'default';
    const defaultIcon = isNotDefaultVariant && defaultVariantIcons[variant];
    return (React.createElement(Component, Object.assign({ className: (0, react_styles_1.css)(helper_text_1.default.helperTextItem, isNotDefaultVariant && helper_text_1.default.modifiers[variant], className), id: id }, props),
        (defaultIcon || icon) && (React.createElement("span", { className: (0, react_styles_1.css)(helper_text_1.default.helperTextItemIcon), "aria-hidden": true }, icon || defaultIcon)),
        React.createElement("span", { className: (0, react_styles_1.css)(helper_text_1.default.helperTextItemText) },
            children,
            isNotDefaultVariant && React.createElement("span", { className: "pf-v6-screen-reader" },
                ": ",
                screenReaderText,
                ";"))));
};
exports.HelperTextItem = HelperTextItem;
exports.HelperTextItem.displayName = 'HelperTextItem';
//# sourceMappingURL=HelperTextItem.js.map