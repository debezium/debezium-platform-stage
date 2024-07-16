import { __rest } from "tslib";
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload.mjs';
import { css } from '@patternfly/react-styles';
export const MultipleFileUploadContext = React.createContext({
    open: () => { }
});
export const MultipleFileUpload = (_a) => {
    var { className, children, dropzoneProps = {}, isHorizontal, onFileDrop = () => { } } = _a, props = __rest(_a, ["className", "children", "dropzoneProps", "isHorizontal", "onFileDrop"]);
    const onDropAccepted = (acceptedFiles, event) => {
        onFileDrop(event, acceptedFiles);
        // allow users to set a custom drop accepted handler rather than using on data change
        dropzoneProps.onDropAccepted && dropzoneProps.onDropAccepted(acceptedFiles, event);
    };
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone(Object.assign(Object.assign({ multiple: true }, dropzoneProps), { onDropAccepted }));
    const rootProps = getRootProps(Object.assign(Object.assign({}, props), { onClick: (event) => event.stopPropagation() // Prevents clicking TextArea from opening file dialog
     }));
    return (React.createElement(MultipleFileUploadContext.Provider, { value: { open } },
        React.createElement("div", Object.assign({ className: css(styles.multipleFileUpload, isDragActive && styles.modifiers.dragOver, isHorizontal && styles.modifiers.horizontal, className) }, rootProps, props),
            React.createElement("input", Object.assign({}, getInputProps())),
            children)));
};
MultipleFileUpload.displayName = 'MultipleFileUpload';
//# sourceMappingURL=MultipleFileUpload.js.map