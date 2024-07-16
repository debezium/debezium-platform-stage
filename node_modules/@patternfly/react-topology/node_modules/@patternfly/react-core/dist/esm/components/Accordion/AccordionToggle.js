import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion.mjs';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { AccordionContext, AccordionItemContext } from './AccordionContext';
export const AccordionToggle = (_a) => {
    var { className = '', id, children = null, component } = _a, props = __rest(_a, ["className", "id", "children", "component"]);
    const renderToggleIcon = () => (React.createElement("span", { className: css(styles.accordionToggleIcon) },
        React.createElement(AngleRightIcon, null)));
    const { isExpanded } = React.useContext(AccordionItemContext);
    return (React.createElement(AccordionContext.Consumer, null, ({ ToggleContainer, togglePosition }) => {
        const Container = component || ToggleContainer;
        const isToggleStartPositioned = togglePosition === 'start';
        return (React.createElement(Container, null,
            React.createElement("button", Object.assign({ id: id, className: css(styles.accordionToggle, isExpanded && styles.modifiers.expanded, className), "aria-expanded": isExpanded, type: "button" }, props),
                isToggleStartPositioned && renderToggleIcon(),
                React.createElement("span", { className: css(styles.accordionToggleText) }, children),
                !isToggleStartPositioned && renderToggleIcon())));
    }));
};
AccordionToggle.displayName = 'AccordionToggle';
//# sourceMappingURL=AccordionToggle.js.map