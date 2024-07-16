"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBody = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const modal_box_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ModalBox/modal-box"));
const ModalBody = (_a) => {
    var { children, className, 'aria-label': ariaLabel, role } = _a, props = tslib_1.__rest(_a, ["children", "className", 'aria-label', "role"]);
    const defaultModalBodyRole = ariaLabel ? 'region' : undefined;
    return (React.createElement("div", Object.assign({ "aria-label": ariaLabel, role: role || defaultModalBodyRole, className: (0, react_styles_1.css)(modal_box_1.default.modalBoxBody, className) }, props), children));
};
exports.ModalBody = ModalBody;
exports.ModalBody.displayName = 'ModalBody';
//# sourceMappingURL=ModalBody.js.map