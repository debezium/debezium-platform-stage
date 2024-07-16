import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip';
export var TableTextVariant;
(function (TableTextVariant) {
    TableTextVariant["div"] = "div";
    TableTextVariant["nav"] = "nav";
})(TableTextVariant || (TableTextVariant = {}));
export var WrapModifier;
(function (WrapModifier) {
    WrapModifier["wrap"] = "wrap";
    WrapModifier["nowrap"] = "nowrap";
    WrapModifier["truncate"] = "truncate";
    WrapModifier["breakWord"] = "breakWord";
    WrapModifier["fitContent"] = "fitContent";
})(WrapModifier || (WrapModifier = {}));
export const TableText = (_a) => {
    var { children = null, className = '', variant = 'span', wrapModifier = null, tooltip: tooltipProp = '', tooltipProps = {}, onMouseEnter: onMouseEnterProp = () => { }, focused = false, tooltipHasDefaultBehavior = false } = _a, props = __rest(_a, ["children", "className", "variant", "wrapModifier", "tooltip", "tooltipProps", "onMouseEnter", "focused", "tooltipHasDefaultBehavior"]);
    const Component = variant;
    const textRef = React.createRef();
    const [tooltip, setTooltip] = React.useState(tooltipProp);
    const onMouseEnter = (event) => {
        if (event.target.offsetWidth < event.target.scrollWidth) {
            setTooltip(tooltipProp || event.target.innerText);
        }
        else {
            setTooltip('');
        }
        onMouseEnterProp(event);
    };
    const onFocus = (element) => {
        if (element.offsetWidth < element.scrollWidth) {
            setTooltip(tooltipProp || element.innerText);
        }
        else {
            setTooltip('');
        }
    };
    const text = (React.createElement(Component, Object.assign({ ref: textRef, onMouseEnter: !tooltipHasDefaultBehavior ? onMouseEnter : undefined, className: css(className, wrapModifier && styles.modifiers[wrapModifier], styles.tableText) }, props), children));
    React.useEffect(() => {
        if (!tooltipHasDefaultBehavior) {
            if (focused) {
                onFocus(textRef.current);
            }
            else {
                setTooltip('');
            }
        }
    }, [focused, tooltipHasDefaultBehavior]);
    return tooltip !== '' ? (React.createElement(Tooltip, Object.assign({ triggerRef: textRef, content: tooltip }, (!tooltipHasDefaultBehavior && { isVisible: true }), tooltipProps), text)) : (text);
};
TableText.displayName = 'TableText';
//# sourceMappingURL=TableText.js.map