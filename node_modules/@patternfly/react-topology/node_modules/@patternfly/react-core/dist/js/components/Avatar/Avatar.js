"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const avatar_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Avatar/avatar"));
const react_styles_1 = require("@patternfly/react-styles");
const Avatar = (_a) => {
    var { className, src = '', alt, isBordered, size } = _a, props = tslib_1.__rest(_a, ["className", "src", "alt", "isBordered", "size"]);
    return (React.createElement("img", Object.assign({ src: src, alt: alt, className: (0, react_styles_1.css)(avatar_1.default.avatar, avatar_1.default.modifiers[size], isBordered && avatar_1.default.modifiers.bordered, className) }, props)));
};
exports.Avatar = Avatar;
exports.Avatar.displayName = 'Avatar';
//# sourceMappingURL=Avatar.js.map