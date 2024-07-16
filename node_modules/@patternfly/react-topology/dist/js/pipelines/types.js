"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhenStatus = exports.RunStatus = void 0;
var RunStatus;
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
})(RunStatus = exports.RunStatus || (exports.RunStatus = {}));
var WhenStatus;
(function (WhenStatus) {
    WhenStatus["Met"] = "Met";
    WhenStatus["Unmet"] = "Unmet";
    WhenStatus["Pending"] = "Pending";
    WhenStatus["InProgress"] = "InProgress";
})(WhenStatus = exports.WhenStatus || (exports.WhenStatus = {}));
//# sourceMappingURL=types.js.map