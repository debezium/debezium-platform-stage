import * as React from 'react';
export interface InputGroupItemProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the input group item. */
    className?: string;
    /** Content rendered inside the input group item. */
    children: React.ReactNode;
    /** Enables box styling to the input group item */
    isBox?: boolean;
    /** Flag to indicate if the input group item is plain. */
    isPlain?: boolean;
    /** Flag to indicate if the input group item should fill the available horizontal space */
    isFill?: boolean;
    /** Flag to indicate if the input group item is disabled. */
    isDisabled?: boolean;
}
export declare const InputGroupItem: React.FunctionComponent<InputGroupItemProps>;
//# sourceMappingURL=InputGroupItem.d.ts.map