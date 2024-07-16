import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useIsomorphicLayoutEffect } from '@patternfly/react-core';
const getContainer = (container) => typeof container === 'function' ? container() : container;
const Portal = ({ children, container }) => {
    const [containerNode, setContainerNode] = React.useState();
    useIsomorphicLayoutEffect(() => {
        setContainerNode(getContainer(container) || document.body);
    }, [container]);
    return containerNode ? ReactDOM.createPortal(children, containerNode) : null;
};
export default Portal;
//# sourceMappingURL=Portal.js.map