"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerContent = exports.DrawerContentColorVariant = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const drawer_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Drawer/drawer"));
const react_styles_1 = require("@patternfly/react-styles");
const DrawerMain_1 = require("./DrawerMain");
const Drawer_1 = require("./Drawer");
var DrawerContentColorVariant;
(function (DrawerContentColorVariant) {
    DrawerContentColorVariant["default"] = "default";
    DrawerContentColorVariant["primary"] = "primary";
    DrawerContentColorVariant["secondary"] = "secondary";
})(DrawerContentColorVariant || (exports.DrawerContentColorVariant = DrawerContentColorVariant = {}));
const DrawerContent = (_a) => {
    var { className, children, panelContent, colorVariant = DrawerContentColorVariant.default } = _a, props = tslib_1.__rest(_a, ["className", "children", "panelContent", "colorVariant"]);
    const { drawerContentRef } = React.useContext(Drawer_1.DrawerContext);
    return (React.createElement(DrawerMain_1.DrawerMain, null,
        React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(drawer_1.default.drawerContent, colorVariant === DrawerContentColorVariant.primary && drawer_1.default.modifiers.primary, colorVariant === DrawerContentColorVariant.secondary && drawer_1.default.modifiers.secondary, className), ref: drawerContentRef }, props), children),
        panelContent));
};
exports.DrawerContent = DrawerContent;
exports.DrawerContent.displayName = 'DrawerContent';
//# sourceMappingURL=DrawerContent.js.map