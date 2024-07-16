import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card.mjs';
import { CardContext } from './Card';
export const CardTitle = (_a) => {
    var { children, className, component = 'div' } = _a, props = __rest(_a, ["children", "className", "component"]);
    const { cardId } = React.useContext(CardContext);
    const Component = component;
    const titleId = cardId ? `${cardId}-title` : '';
    return (React.createElement("div", { className: css(styles.cardTitle) },
        React.createElement(Component, Object.assign({ className: css(styles.cardTitleText, className), id: titleId || undefined }, props), children)));
};
CardTitle.displayName = 'CardTitle';
//# sourceMappingURL=CardTitle.js.map