import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image.mjs';
import cssBackgroundImage from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';
export const BackgroundImage = (_a) => {
    var { className, src } = _a, props = __rest(_a, ["className", "src"]);
    return (React.createElement("div", Object.assign({ className: css(styles.backgroundImage, className), style: {
            [cssBackgroundImage.name]: `url(${src})`
        } }, props)));
};
BackgroundImage.displayName = 'BackgroundImage';
//# sourceMappingURL=BackgroundImage.js.map