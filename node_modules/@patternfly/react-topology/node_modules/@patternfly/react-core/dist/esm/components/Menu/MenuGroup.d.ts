import * as React from 'react';
export interface MenuGroupProps extends Omit<React.HTMLProps<HTMLElement>, 'label'> {
    /** Items within group */
    children?: React.ReactNode;
    /** Additional classes added to the MenuGroup */
    className?: string;
    /** Group label */
    label?: React.ReactNode;
    /** ID for title label */
    titleId?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Group label heading level. Default is h1. */
    labelHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const MenuGroup: React.ForwardRefExoticComponent<Omit<MenuGroupProps, "ref"> & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=MenuGroup.d.ts.map