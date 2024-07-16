"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionExpandableContentBody = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const accordion_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Accordion/accordion"));
const AccordionExpandableContentBody = ({ children = null }) => React.createElement("div", { className: (0, react_styles_1.css)(accordion_1.default.accordionExpandableContentBody) }, children);
exports.AccordionExpandableContentBody = AccordionExpandableContentBody;
exports.AccordionExpandableContentBody.displayName = 'AccordionExpandableContentBody';
//# sourceMappingURL=AccordionExpandableContentBody.js.map