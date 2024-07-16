import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Page/page.mjs';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from './PageContext';
export const PageGroup = (_a) => {
    var { className = '', children, stickyOnBreakpoint, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["className", "children", "stickyOnBreakpoint", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll", 'aria-label']);
    const { height, getVerticalBreakpoint } = React.useContext(PageContext);
    React.useEffect(() => {
        if (hasOverflowScroll && !ariaLabel) {
            /* eslint-disable no-console */
            console.warn('PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.');
        }
    }, [hasOverflowScroll, ariaLabel]);
    return (React.createElement("div", Object.assign({}, props, { className: css(styles.pageMainGroup, formatBreakpointMods(stickyOnBreakpoint, styles, 'sticky-', getVerticalBreakpoint(height), true), hasShadowTop && styles.modifiers.shadowTop, hasShadowBottom && styles.modifiers.shadowBottom, hasOverflowScroll && styles.modifiers.overflowScroll, className) }, (hasOverflowScroll && { tabIndex: 0, role: 'region', 'aria-label': ariaLabel })), children));
};
PageGroup.displayName = 'PageGroup';
//# sourceMappingURL=PageGroup.js.map