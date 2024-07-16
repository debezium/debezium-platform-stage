import * as React from 'react';
export interface BackdropProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the backdrop */
    children?: React.ReactNode;
    /** Additional classes added to the backdrop */
    className?: string;
}
export declare const Backdrop: React.FunctionComponent<BackdropProps>;
//# sourceMappingURL=Backdrop.d.ts.map