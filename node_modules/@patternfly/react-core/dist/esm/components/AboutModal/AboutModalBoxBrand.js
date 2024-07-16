import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box.mjs';
export const AboutModalBoxBrand = (_a) => {
    var { src, alt } = _a, props = __rest(_a, ["src", "alt"]);
    return (React.createElement("div", Object.assign({ className: css(styles.aboutModalBoxBrand) }, props),
        React.createElement("img", { className: css(styles.aboutModalBoxBrandImage), src: src, alt: alt })));
};
AboutModalBoxBrand.displayName = 'AboutModalBoxBrand';
//# sourceMappingURL=AboutModalBoxBrand.js.map