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
import * as React from 'react';
import { getUniqueId } from '../util';
let currentId = 0;
// gives us a unique (enough) id to add to the generated id that it should prevent issues with duplicate ids
function getRandomId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    else {
        return getUniqueId();
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
GenerateId.displayName = 'GenerateId';
GenerateId.defaultProps = {
    prefix: 'pf-random-id-',
    isRandom: false
};
export { GenerateId };
//# sourceMappingURL=GenerateId.js.map