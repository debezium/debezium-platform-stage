import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy.mjs';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { Button } from '../Button';
export const ClipboardCopyToggle = (_a) => {
    var { onClick, id, textId, contentId, isExpanded = false } = _a, props = __rest(_a, ["onClick", "id", "textId", "contentId", "isExpanded"]);
    return (React.createElement(Button, Object.assign({ type: "button", variant: "control", onClick: onClick, id: id, "aria-labelledby": `${id} ${textId}`, "aria-controls": contentId, "aria-expanded": isExpanded }, props, { icon: React.createElement("div", { className: css(styles.clipboardCopyToggleIcon) },
            React.createElement(AngleRightIcon, { "aria-hidden": "true" })) })));
};
ClipboardCopyToggle.displayName = 'ClipboardCopyToggle';
//# sourceMappingURL=ClipboardCopyToggle.js.map