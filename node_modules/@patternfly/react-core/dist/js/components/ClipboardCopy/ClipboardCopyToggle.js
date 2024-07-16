"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardCopyToggle = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const clipboard_copy_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy"));
const react_styles_1 = require("@patternfly/react-styles");
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const Button_1 = require("../Button");
const ClipboardCopyToggle = (_a) => {
    var { onClick, id, textId, contentId, isExpanded = false } = _a, props = tslib_1.__rest(_a, ["onClick", "id", "textId", "contentId", "isExpanded"]);
    return (React.createElement(Button_1.Button, Object.assign({ type: "button", variant: "control", onClick: onClick, id: id, "aria-labelledby": `${id} ${textId}`, "aria-controls": contentId, "aria-expanded": isExpanded }, props, { icon: React.createElement("div", { className: (0, react_styles_1.css)(clipboard_copy_1.default.clipboardCopyToggleIcon) },
            React.createElement(angle_right_icon_1.default, { "aria-hidden": "true" })) })));
};
exports.ClipboardCopyToggle = ClipboardCopyToggle;
exports.ClipboardCopyToggle.displayName = 'ClipboardCopyToggle';
//# sourceMappingURL=ClipboardCopyToggle.js.map