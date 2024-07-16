import * as React from 'react';
import { ButtonProps } from '../../components/Button';
export interface PageToggleButtonProps extends ButtonProps {
    /** Content of the page toggle button */
    children?: React.ReactNode;
    /** True if the sidebar is shown  */
    isSidebarOpen?: boolean;
    /** Callback function to handle the sidebar toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
    onSidebarToggle?: () => void;
    /** Button id */
    id?: string;
}
export declare const PageToggleButton: React.FunctionComponent<PageToggleButtonProps>;
//# sourceMappingURL=PageToggleButton.d.ts.map