"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_dropzone_1 = require("react-dropzone");
const FileUploadField_1 = require("./FileUploadField");
const fileUtils_1 = require("../../helpers/fileUtils");
const file_selector_1 = require("file-selector");
const FileUpload = (_a) => {
    var { id, type, value = type === fileUtils_1.fileReaderType.text || type === fileUtils_1.fileReaderType.dataURL ? '' : null, filename = '', children = null, onFileInputChange = null, onReadStarted = () => { }, onReadFinished = () => { }, onReadFailed = () => { }, onClearClick, onClick = (event) => event.preventDefault(), onTextChange, onDataChange, dropzoneProps = {} } = _a, props = tslib_1.__rest(_a, ["id", "type", "value", "filename", "children", "onFileInputChange", "onReadStarted", "onReadFinished", "onReadFailed", "onClearClick", "onClick", "onTextChange", "onDataChange", "dropzoneProps"]);
    const onDropAccepted = (acceptedFiles, event) => {
        if (acceptedFiles.length > 0) {
            const fileHandle = acceptedFiles[0];
            onFileInputChange === null || onFileInputChange === void 0 ? void 0 : onFileInputChange(event, fileHandle);
            if (type === fileUtils_1.fileReaderType.text || type === fileUtils_1.fileReaderType.dataURL) {
                onReadStarted(event, fileHandle);
                (0, fileUtils_1.readFile)(fileHandle, type)
                    .then((data) => {
                    onReadFinished(event, fileHandle);
                    onDataChange === null || onDataChange === void 0 ? void 0 : onDataChange(event, data);
                })
                    .catch((error) => {
                    onReadFailed(event, error, fileHandle);
                    onReadFinished(event, fileHandle);
                    onDataChange === null || onDataChange === void 0 ? void 0 : onDataChange(event, '');
                });
            }
        }
        dropzoneProps.onDropAccepted && dropzoneProps.onDropAccepted(acceptedFiles, event);
    };
    const onDropRejected = (rejectedFiles, event) => {
        dropzoneProps.onDropRejected && dropzoneProps.onDropRejected(rejectedFiles, event);
    };
    const onClearButtonClick = (event) => {
        onClearClick === null || onClearClick === void 0 ? void 0 : onClearClick(event);
        setFileValue(null);
    };
    const { getRootProps, getInputProps, isDragActive, open, inputRef } = (0, react_dropzone_1.useDropzone)(Object.assign(Object.assign({ noClick: true, multiple: false }, dropzoneProps), { onDropAccepted,
        onDropRejected }));
    const setFileValue = (filename) => {
        inputRef.current.value = filename;
    };
    const oldInputProps = getInputProps();
    const inputProps = Object.assign(Object.assign({}, oldInputProps), { onChange: (e) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _b;
            (_b = oldInputProps.onChange) === null || _b === void 0 ? void 0 : _b.call(oldInputProps, e);
            const files = yield (0, file_selector_1.fromEvent)(e.nativeEvent);
            if (files.length === 1) {
                onFileInputChange === null || onFileInputChange === void 0 ? void 0 : onFileInputChange(e, files[0]);
            }
        }) });
    const rootProps = getRootProps(Object.assign(Object.assign({}, props), { tabIndex: null, // Omit the unwanted tabIndex from react-dropzone's getRootProps
        id,
        type,
        filename,
        value,
        isDragActive, onBrowseButtonClick: open, onClearButtonClick, onTextAreaClick: onClick, onTextChange,
        onClick, refKey: 'containerRef' }));
    return (React.createElement(FileUploadField_1.FileUploadField, Object.assign({}, rootProps),
        React.createElement("input", Object.assign({}, inputProps)),
        children));
};
exports.FileUpload = FileUpload;
exports.FileUpload.displayName = 'FileUpload';
//# sourceMappingURL=FileUpload.js.map