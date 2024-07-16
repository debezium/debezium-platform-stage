import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload.mjs';
import { css } from '@patternfly/react-styles';
export const FileUploadHelperText = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(`${styles.fileUpload}__helper-text`, className) }, props), children));
};
FileUploadHelperText.displayName = 'FileUploadHelperText';
//# sourceMappingURL=FileUploadHelperText.js.map