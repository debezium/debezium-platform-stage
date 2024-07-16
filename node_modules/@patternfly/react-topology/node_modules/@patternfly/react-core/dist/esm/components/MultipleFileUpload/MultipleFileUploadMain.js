import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload.mjs';
import { css } from '@patternfly/react-styles';
import { MultipleFileUploadTitle } from './MultipleFileUploadTitle';
import { MultipleFileUploadButton } from './MultipleFileUploadButton';
import { MultipleFileUploadInfo } from './MultipleFileUploadInfo';
export const MultipleFileUploadMain = (_a) => {
    var { className, titleIcon, titleText, titleTextSeparator, infoText, isUploadButtonHidden, browseButtonText = 'Upload' } = _a, props = __rest(_a, ["className", "titleIcon", "titleText", "titleTextSeparator", "infoText", "isUploadButtonHidden", "browseButtonText"]);
    const showTitle = !!titleIcon || !!titleText || !!titleTextSeparator;
    return (React.createElement("div", Object.assign({ className: css(styles.multipleFileUploadMain, className) }, props),
        showTitle && React.createElement(MultipleFileUploadTitle, { icon: titleIcon, text: titleText, textSeparator: titleTextSeparator }),
        isUploadButtonHidden || React.createElement(MultipleFileUploadButton, { browseButtonText: browseButtonText }),
        !!infoText && React.createElement(MultipleFileUploadInfo, null, infoText)));
};
MultipleFileUploadMain.displayName = 'MultipleFileUploadMain';
//# sourceMappingURL=MultipleFileUploadMain.js.map