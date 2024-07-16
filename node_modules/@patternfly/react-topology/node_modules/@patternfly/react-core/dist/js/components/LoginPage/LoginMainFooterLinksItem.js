"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMainFooterLinksItem = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const login_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Login/login"));
const react_styles_1 = require("@patternfly/react-styles");
const LoginMainFooterLinksItem = (_a) => {
    var { children = null, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("li", Object.assign({ className: (0, react_styles_1.css)(login_1.default.loginMainFooterLinksItem, className) }, props), children));
};
exports.LoginMainFooterLinksItem = LoginMainFooterLinksItem;
exports.LoginMainFooterLinksItem.displayName = 'LoginMainFooterLinksItem';
//# sourceMappingURL=LoginMainFooterLinksItem.js.map