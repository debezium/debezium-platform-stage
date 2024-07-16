import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Menu/menu.mjs';
export const MenuSearchInput = React.forwardRef((props, ref) => (
// Update to use the styles object when core adds the class
React.createElement("div", Object.assign({}, props, { className: css(`${styles.menuSearch}-input`, props.className), ref: ref }))));
MenuSearchInput.displayName = 'MenuSearchInput';
//# sourceMappingURL=MenuSearchInput.js.map