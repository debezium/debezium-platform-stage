import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector.mjs';
import { css } from '@patternfly/react-styles';
import { GenerateId } from '../../helpers';
import { DualListSelectorContext } from './DualListSelectorContext';
class DualListSelector extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { className, children, id, isTree } = _a, props = __rest(_a, ["className", "children", "id", "isTree"]);
        return (React.createElement(DualListSelectorContext.Provider, { value: { isTree } },
            React.createElement(GenerateId, null, (randomId) => (React.createElement("div", Object.assign({ className: css(styles.dualListSelector, className), id: id || randomId }, props), children)))));
    }
}
DualListSelector.displayName = 'DualListSelector';
DualListSelector.defaultProps = {
    children: '',
    isTree: false
};
export { DualListSelector };
//# sourceMappingURL=DualListSelector.js.map