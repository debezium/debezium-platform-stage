"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverHeader = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const popover_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Popover/popover"));
const PopoverHeaderIcon_1 = require("./PopoverHeaderIcon");
const PopoverHeaderText_1 = require("./PopoverHeaderText");
const PopoverHeader = (_a) => {
    var { children, icon, className, titleHeadingLevel = 'h6', alertSeverityVariant, id, alertSeverityScreenReaderText } = _a, props = tslib_1.__rest(_a, ["children", "icon", "className", "titleHeadingLevel", "alertSeverityVariant", "id", "alertSeverityScreenReaderText"]);
    return (React.createElement("header", Object.assign({ className: (0, react_styles_1.css)(popover_1.default.popoverHeader, className) }, props),
        React.createElement("div", { className: (0, react_styles_1.css)(popover_1.default.popoverTitle), id: id },
            icon && React.createElement(PopoverHeaderIcon_1.PopoverHeaderIcon, null, icon),
            React.createElement(PopoverHeaderText_1.PopoverHeaderText, { headingLevel: titleHeadingLevel },
                alertSeverityVariant && alertSeverityScreenReaderText && (React.createElement("span", { className: "pf-v6-screen-reader" }, alertSeverityScreenReaderText)),
                children))));
};
exports.PopoverHeader = PopoverHeader;
exports.PopoverHeader.displayName = 'PopoverHeader';
//# sourceMappingURL=PopoverHeader.js.map