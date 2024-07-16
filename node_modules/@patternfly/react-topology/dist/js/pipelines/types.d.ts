import { NodeModel } from '../types';
export declare enum RunStatus {
    Succeeded = "Succeeded",
    Failed = "Failed",
    Running = "Running",
    InProgress = "InProgress",
    FailedToStart = "FailedToStart",
    Skipped = "Skipped",
    Cancelled = "Cancelled",
    Pending = "Pending",
    Idle = "Idle"
}
export declare enum WhenStatus {
    Met = "Met",
    Unmet = "Unmet",
    Pending = "Pending",
    InProgress = "InProgress"
}
export declare type PipelineNodeModel = NodeModel & {
    runAfterTasks?: string[];
};
//# sourceMappingURL=types.d.ts.map