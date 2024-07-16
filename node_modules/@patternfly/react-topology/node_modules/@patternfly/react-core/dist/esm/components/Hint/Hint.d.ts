import * as React from 'react';
export interface HintProps {
    /** Content rendered inside the hint. */
    children?: React.ReactNode;
    /** Additional classes applied to the hint. */
    className?: string;
    /** Actions of the hint. */
    actions?: React.ReactNode;
    /** Flag indicating that the actions have no offset */
    hasNoActionsOffset?: boolean;
}
export declare const Hint: React.FunctionComponent<HintProps>;
//# sourceMappingURL=Hint.d.ts.map