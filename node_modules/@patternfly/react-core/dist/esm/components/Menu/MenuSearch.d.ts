import * as React from 'react';
export interface MenuSearchProps extends React.HTMLProps<HTMLElement> {
    /** Items within search */
    children?: React.ReactNode;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
}
export declare const MenuSearch: React.ForwardRefExoticComponent<Omit<MenuSearchProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MenuSearch.d.ts.map