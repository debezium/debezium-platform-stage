"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageToggleButton = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-console */
const React = tslib_1.__importStar(require("react"));
const Button_1 = require("../../components/Button");
const PageContext_1 = require("./PageContext");
const PageToggleButton = (_a) => {
    var { children, isSidebarOpen = true, onSidebarToggle = () => undefined, id = 'nav-toggle' } = _a, props = tslib_1.__rest(_a, ["children", "isSidebarOpen", "onSidebarToggle", "id"]);
    return (React.createElement(PageContext_1.PageContextConsumer, null, ({ isManagedSidebar, onSidebarToggle: managedOnSidebarToggle, isSidebarOpen: managedIsSidebarOpen }) => {
        const sidebarToggle = isManagedSidebar ? managedOnSidebarToggle : onSidebarToggle;
        const sidebarOpen = isManagedSidebar ? managedIsSidebarOpen : isSidebarOpen;
        return (React.createElement(Button_1.Button, Object.assign({ id: id, onClick: sidebarToggle, "aria-label": "Side navigation toggle", "aria-expanded": sidebarOpen ? 'true' : 'false', variant: Button_1.ButtonVariant.plain }, props), children));
    }));
};
exports.PageToggleButton = PageToggleButton;
exports.PageToggleButton.displayName = 'PageToggleButton';
//# sourceMappingURL=PageToggleButton.js.map