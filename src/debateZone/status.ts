import { DebateZoneStatus } from "./types";

export const getLabelByDebateZoneStatus = (
  status: DebateZoneStatus
): string => {
  switch (status) {
    case DebateZoneStatus.PENDING:
      return "Pending";
    case DebateZoneStatus.ACTIVE:
      return "Active";
    case DebateZoneStatus.FINISHED:
      return "Finished";
    default:
      return "Pending";
  }
};
