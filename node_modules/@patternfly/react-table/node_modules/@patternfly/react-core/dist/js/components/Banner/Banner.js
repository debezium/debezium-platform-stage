"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const banner_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Banner/banner"));
const react_styles_1 = require("@patternfly/react-styles");
const Banner = (_a) => {
    var { children, className, screenReaderText, isSticky = false, color, status } = _a, props = tslib_1.__rest(_a, ["children", "className", "screenReaderText", "isSticky", "color", "status"]);
    const getStatusOrColorModifier = () => {
        if (status) {
            return banner_1.default.modifiers[status];
        }
        if (color) {
            return banner_1.default.modifiers[color];
        }
    };
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(banner_1.default.banner, getStatusOrColorModifier(), isSticky && banner_1.default.modifiers.sticky, className) }, props),
        screenReaderText && React.createElement("span", { className: "pf-v6-screen-reader" }, screenReaderText),
        children));
};
exports.Banner = Banner;
exports.Banner.displayName = 'Banner';
//# sourceMappingURL=Banner.js.map