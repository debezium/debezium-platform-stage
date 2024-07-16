import * as React from 'react';
export interface AboutModalBoxCloseButtonProps extends React.HTMLProps<HTMLDivElement> {
    /** A callback for when the close button is clicked  */
    onClose?: (event: React.MouseEvent | MouseEvent | KeyboardEvent) => void;
    /** Set close button aria label */
    'aria-label'?: string;
}
export declare const AboutModalBoxCloseButton: React.FunctionComponent<AboutModalBoxCloseButtonProps>;
//# sourceMappingURL=AboutModalBoxCloseButton.d.ts.map