import * as React from 'react';
export interface CardActionsProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the card action */
    children?: React.ReactNode;
    /** Additional classes added to the action */
    className?: string;
    /** Flag indicating that the actions have no offset */
    hasNoOffset?: boolean;
}
export declare const CardActions: React.FunctionComponent<CardActionsProps>;
//# sourceMappingURL=CardActions.d.ts.map