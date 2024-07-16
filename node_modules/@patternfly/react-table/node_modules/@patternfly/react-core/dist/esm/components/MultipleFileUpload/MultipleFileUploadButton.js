import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload.mjs';
import { css } from '@patternfly/react-styles';
import { MultipleFileUploadContext } from './MultipleFileUpload';
import { Button } from '../Button';
export const MultipleFileUploadButton = (_a) => {
    var { className, 'aria-label': ariaLabel, browseButtonText = 'Upload' } = _a, props = __rest(_a, ["className", 'aria-label', "browseButtonText"]);
    if (!ariaLabel && !browseButtonText) {
        // eslint-disable-next-line no-console
        console.warn("For accessibility reasons an aria-label should be specified on MultipleFileUploadButton if a browseButtonText isn't");
    }
    const { open } = React.useContext(MultipleFileUploadContext);
    return (React.createElement("div", Object.assign({ className: css(styles.multipleFileUploadUpload, className) }, props),
        React.createElement(Button, { variant: "secondary", "aria-label": ariaLabel, onClick: open }, browseButtonText)));
};
MultipleFileUploadButton.displayName = 'MultipleFileUploadButton';
//# sourceMappingURL=MultipleFileUploadButton.js.map