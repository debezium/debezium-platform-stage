import * as React from 'react';
import { EventListener, Node } from '../types';
import { WithDndDragProps } from './useDndDrag';
import { DragSourceSpec, DragEvent, ConnectDragSource, DragObjectWithType, DragSpecOperationType, DragOperationWithType } from './dnd-types';
export declare const DRAG_NODE_EVENT = "drag_node";
export declare const DRAG_NODE_START_EVENT: string;
export declare const DRAG_NODE_END_EVENT: string;
export declare type DragNodeEventListener = EventListener<[Node, DragEvent, DragOperationWithType]>;
export declare const DRAG_MOVE_OPERATION = "move.useDragNode";
export declare const useDragNode: <DragObject extends DragObjectWithType = DragObjectWithType, DropResult = any, CollectedProps extends {} = {}, Props extends {} = {}>(spec?: Omit<DragSourceSpec<DragObject, DragSpecOperationType<DragOperationWithType>, DropResult, CollectedProps, Props>, "item"> & {
    item?: DragObject;
}, props?: Props) => [CollectedProps, import("./dnd-types").DragElementWrapper];
export interface WithDragNodeProps {
    dragNodeRef?: WithDndDragProps['dndDragRef'];
}
export declare const withDragNode: <DragObject extends DragObjectWithType = DragObjectWithType, DropResult = any, CollectedProps extends {} = {}, Props extends {} = {}>(spec?: Omit<DragSourceSpec<DragObject, DragSpecOperationType<DragOperationWithType>, DropResult, CollectedProps, Props>, "item"> & {
    item?: DragObject;
}) => <P extends WithDragNodeProps & CollectedProps & Props>(WrappedComponent: React.ComponentType<P>) => React.FunctionComponent<Omit<P, "dragNodeRef">>;
//# sourceMappingURL=useDragNode.d.ts.map