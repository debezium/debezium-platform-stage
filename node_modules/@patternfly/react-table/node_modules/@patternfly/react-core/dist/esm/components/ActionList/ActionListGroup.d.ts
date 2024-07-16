import * as React from 'react';
export interface ActionListGroupProps extends React.HTMLProps<HTMLDivElement> {
    /** Children of the action list group */
    children?: React.ReactNode;
    /** Additional classes added to the action list group */
    className?: string;
    /** Flag indicating the action list group contains multiple icons and item padding should be removed */
    isIconGroup?: boolean;
}
export declare const ActionListGroup: React.FunctionComponent<ActionListGroupProps>;
//# sourceMappingURL=ActionListGroup.d.ts.map