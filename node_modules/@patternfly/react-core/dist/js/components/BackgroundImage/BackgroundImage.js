"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundImage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const background_image_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/BackgroundImage/background-image"));
const c_background_image_BackgroundImage_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_background_image_BackgroundImage'));
const BackgroundImage = (_a) => {
    var { className, src } = _a, props = tslib_1.__rest(_a, ["className", "src"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, react_styles_1.css)(background_image_1.default.backgroundImage, className), style: {
            [c_background_image_BackgroundImage_1.default.name]: `url(${src})`
        } }, props)));
};
exports.BackgroundImage = BackgroundImage;
exports.BackgroundImage.displayName = 'BackgroundImage';
//# sourceMappingURL=BackgroundImage.js.map