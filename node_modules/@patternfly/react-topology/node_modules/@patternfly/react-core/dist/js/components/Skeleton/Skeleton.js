"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const skeleton_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Skeleton/skeleton"));
const react_styles_1 = require("@patternfly/react-styles");
const c_skeleton_Height_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_skeleton_Height'));
const c_skeleton_Width_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_skeleton_Width'));
const Skeleton = (_a) => {
    var { className, width, height, fontSize, shape, screenreaderText } = _a, props = tslib_1.__rest(_a, ["className", "width", "height", "fontSize", "shape", "screenreaderText"]);
    const fontHeightClassName = fontSize
        ? Object.values(skeleton_1.default.modifiers).find((key) => key === `pf-m-text-${fontSize}`)
        : undefined;
    return (React.createElement("div", Object.assign({}, props, { className: (0, react_styles_1.css)(skeleton_1.default.skeleton, fontSize && fontHeightClassName, shape === 'circle' && skeleton_1.default.modifiers.circle, shape === 'square' && skeleton_1.default.modifiers.square, className) }, ((width || height) && {
        style: Object.assign({ [c_skeleton_Width_1.default.name]: width ? width : undefined, [c_skeleton_Height_1.default.name]: height ? height : undefined }, props.style)
    })),
        React.createElement("span", { className: "pf-v6-screen-reader" }, screenreaderText)));
};
exports.Skeleton = Skeleton;
exports.Skeleton.displayName = 'Skeleton';
//# sourceMappingURL=Skeleton.js.map