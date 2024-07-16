import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface ModalBoxCloseButtonProps extends OUIAProps {
    /** Additional classes added to the close button. */
    className?: string;
    /** A callback for when the close button is clicked. */
    onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
    /** Accessible descriptor of the close button. */
    'aria-label'?: string;
    /** Value to set the data-ouia-component-id.*/
    ouiaId?: number | string;
}
export declare const ModalBoxCloseButton: React.FunctionComponent<ModalBoxCloseButtonProps>;
//# sourceMappingURL=ModalBoxCloseButton.d.ts.map