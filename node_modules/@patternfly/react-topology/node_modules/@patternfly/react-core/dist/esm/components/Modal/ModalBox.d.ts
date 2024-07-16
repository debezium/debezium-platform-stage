import * as React from 'react';
export interface ModalBoxProps extends React.HTMLProps<HTMLDivElement> {
    /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId */
    'aria-describedby'?: string;
    /** Adds an accessible name to the modal when there is no title in the ModalHeader. */
    'aria-label'?: string;
    /** Id to use for the modal box label. */
    'aria-labelledby'?: string;
    /** Content rendered inside the modal box. */
    children: React.ReactNode;
    /** Additional classes added to the modal box. */
    className?: string;
    /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
    position?: 'default' | 'top';
    /** Offset from alternate position. Can be any valid CSS length/percentage. */
    positionOffset?: string;
    /** Variant of the modal. */
    variant?: 'small' | 'medium' | 'large' | 'default';
}
export declare const ModalBox: React.FunctionComponent<ModalBoxProps>;
//# sourceMappingURL=ModalBox.d.ts.map