import * as React from 'react';
export interface InputGroupProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the input group. */
    className?: string;
    /** Content rendered inside the input group. */
    children: React.ReactNode;
    /** @hide A reference object to attach to the input box */
    innerRef?: React.Ref<any>;
}
export declare const InputGroupBase: React.FunctionComponent<InputGroupProps>;
export declare const InputGroup: React.ForwardRefExoticComponent<Omit<InputGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=InputGroup.d.ts.map