import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload.mjs';
import { css } from '@patternfly/react-styles';
import { InputGroup, InputGroupItem } from '../InputGroup';
import { TextInput } from '../TextInput';
import { Button, ButtonVariant } from '../Button';
import { TextArea, TextAreResizeOrientation } from '../TextArea';
import { Spinner, spinnerSize } from '../Spinner';
import { fileReaderType } from '../../helpers/fileUtils';
export const FileUploadField = (_a) => {
    var { id, name, type, value = '', filename = '', onBrowseButtonClick = () => { }, onClearButtonClick = () => { }, onTextAreaClick, onTextChange, onTextAreaBlur, textAreaPlaceholder = '', className = '', isDisabled = false, isReadOnly = false, isLoading = false, spinnerAriaValueText, isRequired = false, isDragActive = false, validated = 'default', 'aria-label': ariaLabel = 'File upload', filenamePlaceholder = 'Drag a file here or browse to upload', filenameAriaLabel = filename ? 'Read only filename' : filenamePlaceholder, browseButtonText = 'Browse...', browseButtonAriaDescribedby, clearButtonText = 'Clear', isClearButtonDisabled = !filename && !value, containerRef = null, allowEditingUploadedText = false, hideDefaultPreview = false, children = null } = _a, props = __rest(_a, ["id", "name", "type", "value", "filename", "onBrowseButtonClick", "onClearButtonClick", "onTextAreaClick", "onTextChange", "onTextAreaBlur", "textAreaPlaceholder", "className", "isDisabled", "isReadOnly", "isLoading", "spinnerAriaValueText", "isRequired", "isDragActive", "validated", 'aria-label', "filenamePlaceholder", "filenameAriaLabel", "browseButtonText", "browseButtonAriaDescribedby", "clearButtonText", "isClearButtonDisabled", "containerRef", "allowEditingUploadedText", "hideDefaultPreview", "children"]);
    const onTextAreaChange = (event, newValue) => {
        onTextChange === null || onTextChange === void 0 ? void 0 : onTextChange(event, newValue);
    };
    return (React.createElement("div", Object.assign({ className: css(styles.fileUpload, isDragActive && styles.modifiers.dragHover, isLoading && styles.modifiers.loading, className), ref: containerRef }, props),
        React.createElement("div", { className: styles.fileUploadFileSelect },
            React.createElement(InputGroup, null,
                React.createElement(InputGroupItem, { isFill: true },
                    React.createElement(TextInput, { readOnlyVariant: "default" // Always read-only regardless of isReadOnly prop (which is just for the TextArea)
                        , isDisabled: isDisabled, id: `${id}-filename`, name: name || `${id}-filename`, "aria-label": filenameAriaLabel, placeholder: filenamePlaceholder, value: filename })),
                React.createElement(InputGroupItem, null,
                    React.createElement(Button, { variant: ButtonVariant.control, onClick: onBrowseButtonClick, isDisabled: isDisabled, "aria-describedby": browseButtonAriaDescribedby }, browseButtonText)),
                React.createElement(InputGroupItem, null,
                    React.createElement(Button, { variant: ButtonVariant.control, isDisabled: isDisabled || isClearButtonDisabled, onClick: onClearButtonClick }, clearButtonText)))),
        React.createElement("div", { className: styles.fileUploadFileDetails },
            !hideDefaultPreview && type === fileReaderType.text && (React.createElement(TextArea, { readOnly: isReadOnly || (!!filename && !allowEditingUploadedText), disabled: isDisabled, isRequired: isRequired, resizeOrientation: TextAreResizeOrientation.vertical, validated: validated, id: id, "aria-label": ariaLabel, value: value, onChange: onTextAreaChange, onClick: onTextAreaClick, onBlur: onTextAreaBlur, placeholder: textAreaPlaceholder })),
            isLoading && (React.createElement("div", { className: styles.fileUploadFileDetailsSpinner },
                React.createElement(Spinner, { size: spinnerSize.lg, "aria-valuetext": spinnerAriaValueText })))),
        children));
};
FileUploadField.displayName = 'FileUploadField';
//# sourceMappingURL=FileUploadField.js.map