import * as React from 'react';
export interface PageSidebarProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the page sidebar */
    className?: string;
    /** Content rendered inside the page sidebar (e.g. <PageSidebarBody /> */
    children?: React.ReactNode;
    /**
     * If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
     * the sidebar component or add a callback onSidebarToggle function into the Masthead component
     */
    isManagedSidebar?: boolean;
    /** Programmatically manage if the sidebar is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
    isSidebarOpen?: boolean;
    /** Sidebar id */
    id?: string;
}
export interface PageSidebarContextProps {
    isSidebarOpen: boolean;
}
export declare const pageSidebarContextDefaults: PageSidebarContextProps;
export declare const PageSidebarContext: React.Context<Partial<PageSidebarContextProps>>;
export declare const PageSidebar: React.FunctionComponent<PageSidebarProps>;
//# sourceMappingURL=PageSidebar.d.ts.map