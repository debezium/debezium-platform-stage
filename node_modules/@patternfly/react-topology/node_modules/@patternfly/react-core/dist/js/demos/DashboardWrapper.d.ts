import React from 'react';
import { PageProps } from '../components';
interface DashboardWrapperProps extends Omit<PageProps, 'ref'> {
    /** Programmatically manage if the sidebar nav is shown */
    sidebarNavOpen?: boolean;
    /** Flag to render sample breadcrumb if custom breadcrumb not passed */
    hasDefaultBreadcrumb?: boolean;
    /** Flag to render sample page title if custom title not passed */
    hasPageTemplateTitle?: boolean;
}
export declare const DashboardBreadcrumb: React.JSX.Element;
export declare const DashboardWrapper: React.FC<DashboardWrapperProps>;
export {};
//# sourceMappingURL=DashboardWrapper.d.ts.map