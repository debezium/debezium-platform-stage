import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion.mjs';
import { AccordionContext } from './AccordionContext';
export const Accordion = (_a) => {
    var { children = null, className = '', 'aria-label': ariaLabel, headingLevel = 'h3', asDefinitionList = true, isBordered = false, displaySize = 'default', togglePosition = 'end' } = _a, props = __rest(_a, ["children", "className", 'aria-label', "headingLevel", "asDefinitionList", "isBordered", "displaySize", "togglePosition"]);
    const AccordionList = asDefinitionList ? 'dl' : 'div';
    return (React.createElement(AccordionList, Object.assign({ className: css(styles.accordion, isBordered && styles.modifiers.bordered, togglePosition === 'start' && styles.modifiers.toggleStart, displaySize === 'lg' && styles.modifiers.displayLg, className), "aria-label": ariaLabel }, (!asDefinitionList && ariaLabel && { role: 'region' }), props),
        React.createElement(AccordionContext.Provider, { value: {
                ContentContainer: asDefinitionList ? 'dd' : 'div',
                ToggleContainer: asDefinitionList ? 'dt' : headingLevel,
                togglePosition
            } }, children)));
};
Accordion.displayName = 'Accordion';
//# sourceMappingURL=Accordion.js.map