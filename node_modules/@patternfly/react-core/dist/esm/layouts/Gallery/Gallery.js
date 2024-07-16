import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Gallery/gallery.mjs';
import cssGridTemplateColumnsMin from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import cssGridTemplateColumnsMax from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_max';
export const Gallery = (_a) => {
    var { children = null, className = '', component = 'div', hasGutter = false, minWidths, maxWidths } = _a, props = __rest(_a, ["children", "className", "component", "hasGutter", "minWidths", "maxWidths"]);
    const minWidthStyles = {};
    const Component = component;
    if (minWidths) {
        Object.entries(minWidths || {}).map(([breakpoint, value]) => (minWidthStyles[`${cssGridTemplateColumnsMin.name}${breakpoint !== 'default' ? `-on-${breakpoint}` : ''}`] =
            value));
    }
    const maxWidthStyles = {};
    if (maxWidths) {
        Object.entries(maxWidths || {}).map(([breakpoint, value]) => (maxWidthStyles[`${cssGridTemplateColumnsMax.name}${breakpoint !== 'default' ? `-on-${breakpoint}` : ''}`] =
            value));
    }
    const widthStyles = Object.assign(Object.assign({}, minWidthStyles), maxWidthStyles);
    return (React.createElement(Component, Object.assign({ className: css(styles.gallery, hasGutter && styles.modifiers.gutter, className) }, props, ((minWidths || maxWidths) && { style: Object.assign(Object.assign({}, widthStyles), props.style) })), children));
};
Gallery.displayName = 'Gallery';
//# sourceMappingURL=Gallery.js.map