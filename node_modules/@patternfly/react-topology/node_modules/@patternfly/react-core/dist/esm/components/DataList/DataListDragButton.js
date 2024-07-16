import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list.mjs';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';
export const DataListDragButton = (_a) => {
    var { className = '', isDisabled = false } = _a, props = __rest(_a, ["className", "isDisabled"]);
    return (React.createElement("button", Object.assign({ className: css(styles.dataListItemDraggableButton, isDisabled && styles.modifiers.disabled, className), type: "button", disabled: isDisabled }, props),
        React.createElement("span", { className: css(styles.dataListItemDraggableIcon) },
            React.createElement(GripVerticalIcon, null))));
};
DataListDragButton.displayName = 'DataListDragButton';
//# sourceMappingURL=DataListDragButton.js.map