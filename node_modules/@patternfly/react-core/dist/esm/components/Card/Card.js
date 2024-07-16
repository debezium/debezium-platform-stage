import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Card/card.mjs';
import { css } from '@patternfly/react-styles';
import { useOUIAProps } from '../../helpers';
export const CardContext = React.createContext({
    cardId: '',
    isExpanded: false,
    isClickable: false,
    isSelectable: false,
    isSelected: false,
    isClicked: false,
    isDisabled: false
});
export const Card = (_a) => {
    var { children, id = '', className, component = 'div', isCompact = false, isSelectable = false, isClickable = false, isDisabled = false, isSelected = false, isClicked = false, isExpanded = false, isLarge = false, isFullHeight = false, isPlain = false, variant = 'default', ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "id", "className", "component", "isCompact", "isSelectable", "isClickable", "isDisabled", "isSelected", "isClicked", "isExpanded", "isLarge", "isFullHeight", "isPlain", "variant", "ouiaId", "ouiaSafe"]);
    const Component = component;
    const ouiaProps = useOUIAProps(Card.displayName, ouiaId, ouiaSafe);
    if (isCompact && isLarge) {
        // eslint-disable-next-line no-console
        console.warn('Card: Cannot use isCompact with isLarge. Defaulting to isCompact');
        isLarge = false;
    }
    const getSelectableModifiers = () => {
        if (isSelectable && isClickable) {
            return css(styles.modifiers.selectable, styles.modifiers.clickable, (isSelected || isClicked) && styles.modifiers.current);
        }
        if (isSelectable) {
            return css(styles.modifiers.selectable, isSelected && styles.modifiers.selected);
        }
        if (isClickable) {
            return css(styles.modifiers.clickable, isClicked && styles.modifiers.current);
        }
        return '';
    };
    return (React.createElement(CardContext.Provider, { value: {
            cardId: id,
            isExpanded,
            isClickable,
            isSelectable,
            isSelected,
            isClicked,
            isDisabled
        } },
        React.createElement(Component, Object.assign({ id: id, className: css(styles.card, isCompact && styles.modifiers.compact, isExpanded && styles.modifiers.expanded, isLarge && styles.modifiers.displayLg, isFullHeight && styles.modifiers.fullHeight, isPlain && styles.modifiers.plain, variant === 'secondary' && styles.modifiers.secondary, getSelectableModifiers(), isDisabled && styles.modifiers.disabled, className) }, props, ouiaProps), children)));
};
Card.displayName = 'Card';
//# sourceMappingURL=Card.js.map