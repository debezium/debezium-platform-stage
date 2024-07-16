import * as React from 'react';
import { DropdownItemProps } from '../Dropdown';
export interface OverflowMenuDropdownItemProps extends Omit<DropdownItemProps, 'ref'> {
    /** Indicates when a dropdown item shows and hides the corresponding list item */
    isShared?: boolean;
    /** Identifies the component in the dropdown onSelect callback */
    itemId?: string | number;
}
export declare const OverflowMenuDropdownItem: React.FunctionComponent<OverflowMenuDropdownItemProps>;
//# sourceMappingURL=OverflowMenuDropdownItem.d.ts.map