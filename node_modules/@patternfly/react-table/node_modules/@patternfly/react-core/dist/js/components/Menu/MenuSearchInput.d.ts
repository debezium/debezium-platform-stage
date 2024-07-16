import * as React from 'react';
export interface MenuSearchInputProps extends React.HTMLProps<HTMLElement> {
    /** Items within input */
    children?: React.ReactNode;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
}
export declare const MenuSearchInput: React.ForwardRefExoticComponent<Omit<MenuSearchInputProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MenuSearchInput.d.ts.map