import * as React from 'react';
import { PickOptional } from '../../../helpers';
import { OUIAProps } from '../../../helpers';
export interface ModalProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'>, OUIAProps {
    /** Action buttons to add to the standard modal footer. Ignored if the footer property
     * is passed in.
     */
    actions?: any;
    /** The parent container to append the modal to. Defaults to "document.body". */
    appendTo?: HTMLElement | (() => HTMLElement);
    /** Id to use for the modal box descriptor. */
    'aria-describedby'?: string;
    /** Accessible descriptor of the modal. */
    'aria-label'?: string;
    /** Id to use for the modal box label. */
    'aria-labelledby'?: string;
    /** Accessible label applied to the modal box body. This should be used to communicate
     * important information about the modal box body div element if needed, such as that it
     * is scrollable.
     */
    bodyAriaLabel?: string;
    /** Accessible role applied to the modal box body. This will default to "region" if the
     * bodyAriaLabel property is passed in. Set to a more appropriate role as applicable
     * based on the modal content and context.
     */
    bodyAriaRole?: string;
    /** Content rendered inside the modal. */
    children: React.ReactNode;
    /** Additional classes added to the modal. */
    className?: string;
    /** Description of the modal. */
    description?: React.ReactNode;
    /** Flag to disable focus trap. */
    disableFocusTrap?: boolean;
    /** The element to focus when the modal opens. By default the first
     * focusable element will receive focus.
     */
    elementToFocus?: HTMLElement | SVGElement | string;
    /** Custom footer. */
    footer?: React.ReactNode;
    /** Flag indicating if modal content should be placed in a modal box body wrapper. */
    hasNoBodyWrapper?: boolean;
    /** Complex header (more than just text), supersedes the title property for header content. */
    header?: React.ReactNode;
    /** Optional help section for the modal header. */
    help?: React.ReactNode;
    /** An id to use for the modal box container. */
    id?: string;
    /** Flag to show the modal. */
    isOpen?: boolean;
    /** A callback for when the close button is clicked. */
    onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
    /** Modal handles pressing of the escape key and closes the modal. If you want to handle
     * this yourself you can use this callback function. */
    onEscapePress?: (event: KeyboardEvent) => void;
    /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
    position?: 'default' | 'top';
    /** Offset from alternate position. Can be any valid CSS length/percentage. */
    positionOffset?: string;
    /** Flag to show the close button in the header area of the modal. */
    showClose?: boolean;
    /** Text content of the modal header. */
    title?: React.ReactNode;
    /** Optional alert icon (or other) to show before the title of the modal header. When the
     * predefined alert types are used the default styling will be automatically applied.
     */
    titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'custom' | React.ComponentType<any>;
    /** Optional title label text for screen readers. */
    titleLabel?: string;
    /** Variant of the modal. */
    variant?: 'small' | 'medium' | 'large' | 'default';
    /** Default width of the modal. */
    width?: number | string;
    /** Maximum width of the modal. */
    maxWidth?: number | string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare enum ModalVariant {
    small = "small",
    medium = "medium",
    large = "large",
    default = "default"
}
interface ModalState {
    container: HTMLElement;
    ouiaStateId: string;
}
declare class Modal extends React.Component<ModalProps, ModalState> {
    static displayName: string;
    static currentId: number;
    boxId: string;
    labelId: string;
    descriptorId: string;
    static defaultProps: PickOptional<ModalProps>;
    constructor(props: ModalProps);
    handleEscKeyClick: (event: KeyboardEvent) => void;
    getElement: (appendTo: HTMLElement | (() => HTMLElement)) => HTMLElement;
    toggleSiblingsFromScreenReaders: (hide: boolean) => void;
    isEmpty: (value: string | null | undefined) => boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export { Modal };
//# sourceMappingURL=Modal.d.ts.map