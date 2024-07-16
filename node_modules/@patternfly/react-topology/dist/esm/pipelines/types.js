export var RunStatus;
(function (RunStatus) {
    RunStatus["Succeeded"] = "Succeeded";
    RunStatus["Failed"] = "Failed";
    RunStatus["Running"] = "Running";
    RunStatus["InProgress"] = "InProgress";
    RunStatus["FailedToStart"] = "FailedToStart";
    RunStatus["Skipped"] = "Skipped";
    RunStatus["Cancelled"] = "Cancelled";
    RunStatus["Pending"] = "Pending";
    RunStatus["Idle"] = "Idle";
})(RunStatus || (RunStatus = {}));
export var WhenStatus;
(function (WhenStatus) {
    WhenStatus["Met"] = "Met";
    WhenStatus["Unmet"] = "Unmet";
    WhenStatus["Pending"] = "Pending";
    WhenStatus["InProgress"] = "InProgress";
})(WhenStatus || (WhenStatus = {}));
//# sourceMappingURL=types.js.map