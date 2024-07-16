import * as React from 'react';
const EMPTY = [];
export const useSize = (dependencies = EMPTY) => {
    const [size, setSize] = React.useState();
    const sizeRef = React.useRef();
    sizeRef.current = size;
    const callbackRef = React.useCallback((node) => {
        if (node != null) {
            const bb = node.getBBox();
            if (!sizeRef.current || sizeRef.current.width !== bb.width || sizeRef.current.height !== bb.height) {
                setSize({ width: bb.width, height: bb.height });
            }
        }
        // dynamic dependencies
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
    return [size, callbackRef];
};
//# sourceMappingURL=useSize.js.map