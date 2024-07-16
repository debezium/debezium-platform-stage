"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truncate = exports.TruncatePosition = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const truncate_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Truncate/truncate"));
const react_styles_1 = require("@patternfly/react-styles");
const Tooltip_1 = require("../Tooltip");
const resizeObserver_1 = require("../../helpers/resizeObserver");
var TruncatePosition;
(function (TruncatePosition) {
    TruncatePosition["start"] = "start";
    TruncatePosition["end"] = "end";
    TruncatePosition["middle"] = "middle";
})(TruncatePosition || (exports.TruncatePosition = TruncatePosition = {}));
const truncateStyles = {
    start: truncate_1.default.truncateEnd,
    end: truncate_1.default.truncateStart
};
const minWidthCharacters = 12;
const sliceContent = (str, slice) => [str.slice(0, str.length - slice), str.slice(-slice)];
const Truncate = (_a) => {
    var { className, position = 'end', tooltipPosition = 'top', trailingNumChars = 7, content } = _a, props = tslib_1.__rest(_a, ["className", "position", "tooltipPosition", "trailingNumChars", "content"]);
    const [isTruncated, setIsTruncated] = React.useState(true);
    const [parentElement, setParentElement] = React.useState(null);
    const [textElement, setTextElement] = React.useState(null);
    const textRef = React.useRef(null);
    const subParentRef = React.useRef(null);
    const observer = React.useRef(null);
    const getActualWidth = (element) => {
        const computedStyle = getComputedStyle(element);
        return (parseFloat(computedStyle.width) -
            parseFloat(computedStyle.paddingLeft) -
            parseFloat(computedStyle.paddingRight) -
            parseFloat(computedStyle.borderRight) -
            parseFloat(computedStyle.borderLeft));
    };
    const calculateTotalTextWidth = (element, trailingNumChars, content) => {
        const firstTextWidth = element.scrollWidth;
        const firstTextLength = content.length;
        return (firstTextWidth / firstTextLength) * trailingNumChars + firstTextWidth;
    };
    React.useEffect(() => {
        if (textRef && textRef.current && !textElement) {
            setTextElement(textRef.current);
        }
        if (subParentRef && subParentRef.current.parentElement.parentElement && !parentElement) {
            setParentElement(subParentRef.current.parentElement.parentElement);
        }
    }, [textRef, subParentRef]);
    React.useEffect(() => {
        if (textElement && parentElement && !observer.current) {
            const totalTextWidth = calculateTotalTextWidth(textElement, trailingNumChars, content);
            const textWidth = position === 'middle' ? totalTextWidth : textElement.scrollWidth;
            const handleResize = () => {
                const parentWidth = getActualWidth(parentElement);
                setIsTruncated(textWidth >= parentWidth);
            };
            const observer = (0, resizeObserver_1.getResizeObserver)(parentElement, handleResize);
            return () => {
                observer();
            };
        }
    }, [textElement, parentElement]);
    const truncateBody = (React.createElement("span", Object.assign({ ref: subParentRef, className: (0, react_styles_1.css)(truncate_1.default.truncate, className) }, props),
        (position === TruncatePosition.end || position === TruncatePosition.start) && (React.createElement("span", { ref: textRef, className: truncateStyles[position] },
            content,
            position === TruncatePosition.start && React.createElement(React.Fragment, null, "\u200E"))),
        position === TruncatePosition.middle &&
            content.slice(0, content.length - trailingNumChars).length > minWidthCharacters && (React.createElement(React.Fragment, null,
            React.createElement("span", { ref: textRef, className: truncate_1.default.truncateStart }, sliceContent(content, trailingNumChars)[0]),
            React.createElement("span", { className: truncate_1.default.truncateEnd }, sliceContent(content, trailingNumChars)[1]))),
        position === TruncatePosition.middle &&
            content.slice(0, content.length - trailingNumChars).length <= minWidthCharacters &&
            content));
    return isTruncated ? (React.createElement(Tooltip_1.Tooltip, { hidden: !isTruncated, position: tooltipPosition, content: content }, truncateBody)) : (truncateBody);
};
exports.Truncate = Truncate;
exports.Truncate.displayName = 'Truncate';
//# sourceMappingURL=Truncate.js.map