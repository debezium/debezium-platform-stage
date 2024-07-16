import * as React from 'react';
export interface SkipToContentProps extends React.HTMLProps<HTMLDivElement> {
    /** The skip to content link. */
    href: string;
    /** Content to display within the skip to content component, typically a string. */
    children?: React.ReactNode;
    /** Additional styles to apply to the skip to content component. */
    className?: string;
}
export declare const SkipToContent: React.FunctionComponent<SkipToContentProps>;
//# sourceMappingURL=SkipToContent.d.ts.map