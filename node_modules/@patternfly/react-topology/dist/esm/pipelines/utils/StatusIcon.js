import { __rest } from "tslib";
import * as React from 'react';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import CircleIcon from '@patternfly/react-icons/dist/esm/icons/circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import NotStartedIcon from '@patternfly/react-icons/dist/esm/icons/not-started-icon';
import HourglassHalfIcon from '@patternfly/react-icons/dist/esm/icons/hourglass-half-icon';
import SyncAltIcon from '@patternfly/react-icons/dist/esm/icons/sync-alt-icon';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import { RunStatus } from '../types';
const StatusIcon = (_a) => {
    var { status } = _a, props = __rest(_a, ["status"]);
    switch (status) {
        case RunStatus.InProgress:
            return React.createElement(InProgressIcon, Object.assign({}, props));
        case RunStatus.Running:
            return React.createElement(SyncAltIcon, Object.assign({}, props));
        case RunStatus.Succeeded:
            return React.createElement(CheckCircleIcon, Object.assign({}, props));
        case RunStatus.Failed:
        case RunStatus.FailedToStart:
            return React.createElement(ExclamationCircleIcon, Object.assign({}, props));
        case RunStatus.Idle:
            return React.createElement(NotStartedIcon, Object.assign({}, props));
        case RunStatus.Pending:
            return React.createElement(HourglassHalfIcon, Object.assign({}, props));
        case RunStatus.Cancelled:
            return React.createElement(ExclamationTriangleIcon, Object.assign({}, props));
        case RunStatus.Skipped:
            return React.createElement(AngleDoubleRightIcon, Object.assign({}, props));
        default:
            return React.createElement(CircleIcon, Object.assign({}, props));
    }
};
export default StatusIcon;
//# sourceMappingURL=StatusIcon.js.map