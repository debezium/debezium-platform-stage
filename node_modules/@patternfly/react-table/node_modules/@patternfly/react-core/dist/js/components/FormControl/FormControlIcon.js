"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormControlIcon = exports.statusIcons = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const form_control_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/FormControl/form-control"));
const react_styles_1 = require("@patternfly/react-styles");
const check_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/check-circle-icon'));
const exclamation_circle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/exclamation-circle-icon'));
const exclamation_triangle_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon'));
exports.statusIcons = {
    success: check_circle_icon_1.default,
    error: exclamation_circle_icon_1.default,
    warning: exclamation_triangle_icon_1.default
};
const FormControlIcon = (_a) => {
    var { status, customIcon, className } = _a, props = tslib_1.__rest(_a, ["status", "customIcon", "className"]);
    const StatusIcon = status && exports.statusIcons[status];
    return (React.createElement("span", Object.assign({ className: (0, react_styles_1.css)(form_control_1.default.formControlIcon, status && form_control_1.default.modifiers.status, className) }, props), customIcon || React.createElement(StatusIcon, null)));
};
exports.FormControlIcon = FormControlIcon;
//# sourceMappingURL=FormControlIcon.js.map