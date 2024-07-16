import * as React from 'react';
export interface ToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
    /** Classes applied to root element of the data toolbar content row */
    className?: string;
    /** Visibility at various breakpoints. */
    visibility?: {
        default?: 'hidden' | 'visible';
        md?: 'hidden' | 'visible';
        lg?: 'hidden' | 'visible';
        xl?: 'hidden' | 'visible';
        '2xl'?: 'hidden' | 'visible';
    };
    /** Vertical alignment. */
    alignSelf?: 'start' | 'center' | 'baseline' | 'default';
    /** Vertical alignment of children */
    alignItems?: 'start' | 'center' | 'baseline' | 'default';
    /** Content to be rendered as children of the content row */
    children?: React.ReactNode;
    /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
    isExpanded?: boolean;
    /** Optional callback for clearing all filters in the toolbar */
    clearAllFilters?: () => void;
    /** Flag indicating that the clear all filters button should be visible */
    showClearFiltersButton?: boolean;
    /** Text to display in the clear all filters button */
    clearFiltersButtonText?: string;
    /** Id of the parent Toolbar component */
    toolbarId?: string;
}
declare class ToolbarContent extends React.Component<ToolbarContentProps> {
    static displayName: string;
    private expandableContentRef;
    private chipContainerRef;
    private static currentId;
    static defaultProps: ToolbarContentProps;
    render(): React.JSX.Element;
}
export { ToolbarContent };
//# sourceMappingURL=ToolbarContent.d.ts.map