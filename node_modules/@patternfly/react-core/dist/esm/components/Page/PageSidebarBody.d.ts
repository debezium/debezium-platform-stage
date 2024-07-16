import * as React from 'react';
export interface PageSidebarBodyProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the page sidebar body */
    children?: React.ReactNode;
    /** Additional classes added to the page sidebar body */
    className?: string;
    /** Flag indicating that the page sidebar body should use page insets. */
    usePageInsets?: boolean;
    /** Flag indicating that the page sidebar body should fill the available vertical space. */
    isFilled?: boolean;
    /** Flag indicating that the page sidebar body is for a context selector/perspective switcher */
    isContextSelector?: boolean;
}
export declare const PageSidebarBody: React.FunctionComponent<PageSidebarBodyProps>;
//# sourceMappingURL=PageSidebarBody.d.ts.map