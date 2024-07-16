import * as React from 'react';
export interface TbodyProps extends React.HTMLProps<HTMLTableSectionElement> {
    /** Content rendered inside the <tbody> row group */
    children?: React.ReactNode;
    /** Additional classes added to the <tbody> element  */
    className?: string;
    /** Modifies the body to allow for expandable rows */
    isExpanded?: boolean;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Flag indicating the <tbody> contains oddly striped rows. */
    isOddStriped?: boolean;
    /** Flag indicating the <tbody> contains evenly striped rows. */
    isEvenStriped?: boolean;
}
export declare const Tbody: React.ForwardRefExoticComponent<Omit<TbodyProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
//# sourceMappingURL=Tbody.d.ts.map