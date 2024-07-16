import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Title/title.mjs';
import { useOUIAProps } from '../../helpers';
export var TitleSizes;
(function (TitleSizes) {
    TitleSizes["md"] = "md";
    TitleSizes["lg"] = "lg";
    TitleSizes["xl"] = "xl";
    TitleSizes["2xl"] = "2xl";
    TitleSizes["3xl"] = "3xl";
    TitleSizes["4xl"] = "4xl";
})(TitleSizes || (TitleSizes = {}));
export const Title = (_a) => {
    var { className = '', children = '', headingLevel: HeadingLevel, size, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["className", "children", "headingLevel", "size", "ouiaId", "ouiaSafe"]);
    const ouiaProps = useOUIAProps(Title.displayName, ouiaId, ouiaSafe);
    return (React.createElement(HeadingLevel, Object.assign({}, ouiaProps, props, { className: css(styles.title, size ? styles.modifiers[size] : styles.modifiers[HeadingLevel], className) }), children));
};
Title.displayName = 'Title';
//# sourceMappingURL=Title.js.map