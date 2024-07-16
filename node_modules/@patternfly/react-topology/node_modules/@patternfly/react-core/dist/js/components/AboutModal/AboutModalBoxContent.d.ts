import * as React from 'react';
export interface AboutModalBoxContentProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the about modal box content */
    children: React.ReactNode;
    /** The trademark info for the product  */
    trademark: string;
    /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
    hasNoContentContainer?: boolean;
}
export declare const AboutModalBoxContent: React.FunctionComponent<AboutModalBoxContentProps>;
//# sourceMappingURL=AboutModalBoxContent.d.ts.map