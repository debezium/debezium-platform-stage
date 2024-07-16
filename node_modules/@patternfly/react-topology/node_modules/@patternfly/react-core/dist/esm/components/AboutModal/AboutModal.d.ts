import * as React from 'react';
export interface AboutModalProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the about modal */
    children: React.ReactNode;
    /** Additional classes added to the about modal */
    className?: string;
    /** Flag to show the about modal  */
    isOpen?: boolean;
    /** A callback for when the close button is clicked  */
    onClose?: (event: React.MouseEvent | MouseEvent | KeyboardEvent) => void;
    /** Product name  */
    productName?: string;
    /** Trademark information  */
    trademark?: string;
    /** The URL of the image for the brand  */
    brandImageSrc: string;
    /** The alternate text of the brand image  */
    brandImageAlt: string;
    /** The URL or file path of the image for the background  */
    backgroundImageSrc?: string;
    /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts  */
    hasNoContentContainer?: boolean;
    /** The parent container to append the modal to. Defaults to document.body */
    appendTo?: HTMLElement | (() => HTMLElement);
    /** Aria label for the about modal.  This should be used when no productName prop is provided */
    'aria-label'?: string;
    /** Set aria label to the close button */
    closeButtonAriaLabel?: string;
    /** Flag to disable focus trap */
    disableFocusTrap?: boolean;
}
export declare const AboutModal: React.FunctionComponent<AboutModalProps>;
//# sourceMappingURL=AboutModal.d.ts.map