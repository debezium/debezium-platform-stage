"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_2 = require("@testing-library/react");
const DrawerPanelDescription_1 = require("../DrawerPanelDescription");
const drawer_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Drawer/drawer"));
require("@testing-library/jest-dom");
test(`Renders with only class ${drawer_1.default.drawerDescription} by default`, () => {
    (0, react_2.render)(react_1.default.createElement(DrawerPanelDescription_1.DrawerPanelDescription, null, "description content"));
    expect(react_2.screen.getByText('description content')).toHaveClass(drawer_1.default.drawerDescription, { exact: true });
});
test(`Renders with custom class when className is passed`, () => {
    (0, react_2.render)(react_1.default.createElement(DrawerPanelDescription_1.DrawerPanelDescription, { className: "test-class" }, "description content"));
    expect(react_2.screen.getByText('description content')).toHaveClass('test-class');
});
test(`Spreads props`, () => {
    (0, react_2.render)(react_1.default.createElement(DrawerPanelDescription_1.DrawerPanelDescription, { id: "test-id" }, "description content"));
    expect(react_2.screen.getByText('description content')).toHaveAttribute('id', 'test-id');
});
test(`Matches snapshot`, () => {
    const { asFragment } = (0, react_2.render)(react_1.default.createElement(DrawerPanelDescription_1.DrawerPanelDescription, null, "description content"));
    expect(asFragment()).toMatchSnapshot();
});
//# sourceMappingURL=DrawerPanelDescription.js.map