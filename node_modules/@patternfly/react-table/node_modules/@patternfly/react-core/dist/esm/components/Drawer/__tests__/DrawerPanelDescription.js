import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrawerPanelDescription } from '../DrawerPanelDescription';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer.mjs';
import '@testing-library/jest-dom';
test(`Renders with only class ${styles.drawerDescription} by default`, () => {
    render(React.createElement(DrawerPanelDescription, null, "description content"));
    expect(screen.getByText('description content')).toHaveClass(styles.drawerDescription, { exact: true });
});
test(`Renders with custom class when className is passed`, () => {
    render(React.createElement(DrawerPanelDescription, { className: "test-class" }, "description content"));
    expect(screen.getByText('description content')).toHaveClass('test-class');
});
test(`Spreads props`, () => {
    render(React.createElement(DrawerPanelDescription, { id: "test-id" }, "description content"));
    expect(screen.getByText('description content')).toHaveAttribute('id', 'test-id');
});
test(`Matches snapshot`, () => {
    const { asFragment } = render(React.createElement(DrawerPanelDescription, null, "description content"));
    expect(asFragment()).toMatchSnapshot();
});
//# sourceMappingURL=DrawerPanelDescription.js.map