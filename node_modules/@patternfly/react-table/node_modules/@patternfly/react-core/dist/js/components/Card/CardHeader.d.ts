import * as React from 'react';
export interface CardHeaderActionsObject {
    /** Actions of the card header */
    actions: React.ReactNode;
    /** Flag indicating that the actions have no offset */
    hasNoOffset?: boolean;
    /** Additional classes added to the actions wrapper */
    className?: string;
}
export interface CardHeaderSelectableActionsObject {
    /** Determines the type of input to be used for a selectable card. */
    variant?: 'single' | 'multiple';
    /** Flag indicating that the actions have no offset */
    hasNoOffset?: boolean;
    /** Additional classes added to the selectable actions wrapper */
    className?: string;
    /** ID passed to the selectable or clickable input */
    selectableActionId: string;
    /** Adds an accessible label to the selectable or clickable input */
    selectableActionAriaLabel?: string;
    /** Adds an accessible label to the selectable or clickable input by passing in a
     * space separated list of id's.
     */
    selectableActionAriaLabelledby?: string;
    /** Callback for when a selectable card input changes */
    onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
    /** Action to call when clickable card is clicked */
    onClickAction?: (event: React.FormEvent<HTMLInputElement> | React.MouseEvent) => void;
    /** Link to navigate to when clickable card is clicked */
    to?: string;
    /** Flag to indicate whether a clickable card's link should open in a new tab/window. */
    isExternalLink?: boolean;
    /** Name for the input element of a clickable or selectable card. */
    name?: string;
    /** @deprecated Flag indicating whether the selectable card input is checked. We recommend using
     * the isSelected prop on the card component instead.
     */
    isChecked?: boolean;
}
export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the card header */
    children?: React.ReactNode;
    /** Additional classes added to the card header */
    className?: string;
    /** Actions of the card header */
    actions?: CardHeaderActionsObject;
    /** Selectable actions of the card header */
    selectableActions?: CardHeaderSelectableActionsObject;
    /** ID of the card header. */
    id?: string;
    /** Callback expandable card */
    onExpand?: (event: React.MouseEvent, id: string) => void;
    /** Additional props for expandable toggle button */
    toggleButtonProps?: any;
    /** Whether to right-align expandable toggle button */
    isToggleRightAligned?: boolean;
}
export declare const CardHeader: React.FunctionComponent<CardHeaderProps>;
//# sourceMappingURL=CardHeader.d.ts.map