import { DndManager, Identifier, DropTarget, DragEvent, DragSource, Unregister, DndState, DragOperationWithType } from './dnd-types';
export declare const matchesType: (targetType: Identifier | Identifier[] | undefined, draggedItemType: Identifier | undefined) => boolean;
export declare class DndManagerImpl implements DndManager {
    private state;
    private ending;
    constructor(state: DndState);
    private sources;
    private targets;
    get dropHints(): string[];
    registerSource(source: DragSource): [string, Unregister];
    registerTarget(target: DropTarget): [string, Unregister];
    getDropHints(): string[];
    canDragSource(sourceId: string | undefined): boolean;
    canDropOnTarget(targetId: string | undefined): boolean;
    isDragging(): boolean;
    isDraggingSource(sourceId: string | undefined): boolean;
    isOverTarget(targetId: string | undefined, options?: {
        shallow: boolean;
    }): boolean;
    getItemType(): Identifier | undefined;
    getItem(): any;
    getSourceId(): string | undefined;
    getTargetIds(): string[];
    hasDropTarget(): boolean;
    getDropResult(): any;
    didDrop(): boolean;
    getDragEvent(): DragEvent | undefined;
    getOperation(): DragOperationWithType | undefined;
    isCancelled(): boolean;
    beginDrag(sourceIds: string | string[], operation: DragOperationWithType | undefined, x: number, y: number, pageX: number, pageY: number): void;
    hover(targetIds: string[]): void;
    endDrag(): Promise<void>;
    drop(): void;
    drag(x: number, y: number, pageX: number, pageY: number): void;
    cancel(): boolean;
    private performHitTests;
    private getSource;
    private getTarget;
}
export declare const useDndManager: () => DndManager;
//# sourceMappingURL=useDndManager.d.ts.map