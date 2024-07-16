import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page.mjs';
import { css } from '@patternfly/react-styles';
import { PageContextConsumer } from './PageContext';
export const pageSidebarContextDefaults = {
    isSidebarOpen: true
};
export const PageSidebarContext = React.createContext(pageSidebarContextDefaults);
export const PageSidebar = (_a) => {
    var { className = '', children, isSidebarOpen = true, id = 'page-sidebar' } = _a, props = __rest(_a, ["className", "children", "isSidebarOpen", "id"]);
    return (React.createElement(PageContextConsumer, null, ({ isManagedSidebar, isSidebarOpen: managedIsNavOpen }) => {
        const sidebarOpen = isManagedSidebar ? managedIsNavOpen : isSidebarOpen;
        return (React.createElement("div", Object.assign({ id: id, className: css(styles.pageSidebar, sidebarOpen && styles.modifiers.expanded, !sidebarOpen && styles.modifiers.collapsed, className), "aria-hidden": !sidebarOpen }, props),
            React.createElement(PageSidebarContext.Provider, { value: { isSidebarOpen: sidebarOpen } }, children)));
    }));
};
PageSidebar.displayName = 'PageSidebar';
//# sourceMappingURL=PageSidebar.js.map