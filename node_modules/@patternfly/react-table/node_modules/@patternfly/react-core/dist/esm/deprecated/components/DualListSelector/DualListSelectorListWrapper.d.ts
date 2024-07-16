import * as React from 'react';
export interface DualListSelectorListWrapperProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes applied to the dual list selector. */
    className?: string;
    /** Anything that can be rendered inside of the list */
    children?: React.ReactNode;
    /** Id of the dual list selector list */
    id?: string;
    /** Accessibly label for the list */
    'aria-labelledby': string;
    /** @hide forwarded ref */
    innerRef?: React.RefObject<HTMLDivElement>;
    /** @hide Options to list in the pane. */
    options?: React.ReactNode[];
    /** @hide Options currently selected in the pane. */
    selectedOptions?: string[] | number[];
    /** @hide Callback for when an option is selected. Optionally used only when options prop is provided. */
    onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent, index: number, id: string) => void;
    /** @hide Function to determine if an option should be displayed depending on a dynamically built filter value */
    displayOption?: (option: React.ReactNode) => boolean;
    /** Flag indicating whether the component is disabled. */
    isDisabled?: boolean;
}
export declare const DualListSelectorListWrapperBase: React.FunctionComponent<DualListSelectorListWrapperProps>;
export declare const DualListSelectorListWrapper: React.ForwardRefExoticComponent<Omit<DualListSelectorListWrapperProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DualListSelectorListWrapper.d.ts.map