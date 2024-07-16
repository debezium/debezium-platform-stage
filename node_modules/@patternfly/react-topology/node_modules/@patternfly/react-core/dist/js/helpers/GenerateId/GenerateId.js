"use strict";
/** This Component can be used to wrap a functional component in order to generate a random ID
 * Example of how to use this component
 *
 * const Component = ({id}: {id: string}) => (
 *  <GenerateId>{randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </GenerateId>
 *  );
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateId = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const util_1 = require("../util");
let currentId = 0;
// gives us a unique (enough) id to add to the generated id that it should prevent issues with duplicate ids
function getRandomId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    else {
        return (0, util_1.getUniqueId)();
    }
}
class GenerateId extends React.Component {
    constructor() {
        super(...arguments);
        this.uniqueElement = this.props.isRandom ? getRandomId() : currentId++;
        this.id = `${this.props.prefix}${this.uniqueElement}`;
    }
    render() {
        return this.props.children(this.id);
    }
}
exports.GenerateId = GenerateId;
GenerateId.displayName = 'GenerateId';
GenerateId.defaultProps = {
    prefix: 'pf-random-id-',
    isRandom: false
};
//# sourceMappingURL=GenerateId.js.map