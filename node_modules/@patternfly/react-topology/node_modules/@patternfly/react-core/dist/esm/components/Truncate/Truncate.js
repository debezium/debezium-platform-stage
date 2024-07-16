import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Truncate/truncate.mjs';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '../Tooltip';
import { getResizeObserver } from '../../helpers/resizeObserver';
export var TruncatePosition;
(function (TruncatePosition) {
    TruncatePosition["start"] = "start";
    TruncatePosition["end"] = "end";
    TruncatePosition["middle"] = "middle";
})(TruncatePosition || (TruncatePosition = {}));
const truncateStyles = {
    start: styles.truncateEnd,
    end: styles.truncateStart
};
const minWidthCharacters = 12;
const sliceContent = (str, slice) => [str.slice(0, str.length - slice), str.slice(-slice)];
export const Truncate = (_a) => {
    var { className, position = 'end', tooltipPosition = 'top', trailingNumChars = 7, content } = _a, props = __rest(_a, ["className", "position", "tooltipPosition", "trailingNumChars", "content"]);
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
            const observer = getResizeObserver(parentElement, handleResize);
            return () => {
                observer();
            };
        }
    }, [textElement, parentElement]);
    const truncateBody = (React.createElement("span", Object.assign({ ref: subParentRef, className: css(styles.truncate, className) }, props),
        (position === TruncatePosition.end || position === TruncatePosition.start) && (React.createElement("span", { ref: textRef, className: truncateStyles[position] },
            content,
            position === TruncatePosition.start && React.createElement(React.Fragment, null, "\u200E"))),
        position === TruncatePosition.middle &&
            content.slice(0, content.length - trailingNumChars).length > minWidthCharacters && (React.createElement(React.Fragment, null,
            React.createElement("span", { ref: textRef, className: styles.truncateStart }, sliceContent(content, trailingNumChars)[0]),
            React.createElement("span", { className: styles.truncateEnd }, sliceContent(content, trailingNumChars)[1]))),
        position === TruncatePosition.middle &&
            content.slice(0, content.length - trailingNumChars).length <= minWidthCharacters &&
            content));
    return isTruncated ? (React.createElement(Tooltip, { hidden: !isTruncated, position: tooltipPosition, content: content }, truncateBody)) : (truncateBody);
};
Truncate.displayName = 'Truncate';
//# sourceMappingURL=Truncate.js.map