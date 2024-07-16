import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead.mjs';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from '../Page/PageContext';
export const Masthead = (_a) => {
    var { children, className, display = {
        md: 'inline'
    }, inset } = _a, props = __rest(_a, ["children", "className", "display", "inset"]);
    const { width, getBreakpoint } = React.useContext(PageContext);
    return (React.createElement("header", Object.assign({ className: css(styles.masthead, formatBreakpointMods(display, styles, 'display-', getBreakpoint(width)), formatBreakpointMods(inset, styles, '', getBreakpoint(width)), className) }, props), children));
};
Masthead.displayName = 'Masthead';
//# sourceMappingURL=Masthead.js.map