import * as React from 'react';
export interface PopoverHeaderTextProps extends React.HTMLProps<HTMLDivElement> {
    /** Content of the header text */
    children: React.ReactNode;
    /** Class to be applied to the header text */
    className?: string;
    /** Heading level of the header title */
    headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const PopoverHeaderText: React.FunctionComponent<PopoverHeaderTextProps>;
//# sourceMappingURL=PopoverHeaderText.d.ts.map