import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface CardProps extends React.HTMLProps<HTMLElement>, OUIAProps {
    /** Content rendered inside the Card */
    children?: React.ReactNode;
    /** ID of the Card. Also passed back in the CardHeader onExpand callback. */
    id?: string;
    /** Additional classes added to the Card */
    className?: string;
    /** Sets the base component to render. defaults to div */
    component?: keyof JSX.IntrinsicElements;
    /** Modifies the card to include compact styling. Should not be used with isLarge. */
    isCompact?: boolean;
    /** Flag indicating that the card is selectable. */
    isSelectable?: boolean;
    /** Flag indicating that the card is clickable and contains some action that triggers on click. */
    isClickable?: boolean;
    /** Flag indicating whether a card that is either selectable only or both clickable and selectable is
     * currently selected and has selected styling.
     */
    isSelected?: boolean;
    /** Flag indicating whether a card that is either only clickable or that is both clickable and selectable
     * is currently clicked and has clicked styling.
     */
    isClicked?: boolean;
    /** Flag indicating that a clickable or selectable card is disabled. */
    isDisabled?: boolean;
    /** Modifies the card to be large. Should not be used with isCompact. */
    isLarge?: boolean;
    /** Cause component to consume the available height of its container */
    isFullHeight?: boolean;
    /** Modifies the card to include plain styling; this removes border and background */
    isPlain?: boolean;
    /** Flag indicating if a card is expanded. Modifies the card to be expandable. */
    isExpanded?: boolean;
    /** Card background color variant */
    variant?: 'default' | 'secondary';
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface CardContextProps {
    cardId: string;
    isExpanded: boolean;
    isClickable: boolean;
    isSelectable: boolean;
    isSelected: boolean;
    isClicked: boolean;
    isDisabled: boolean;
}
export declare const CardContext: React.Context<Partial<CardContextProps>>;
export declare const Card: React.FunctionComponent<CardProps>;
export {};
//# sourceMappingURL=Card.d.ts.map