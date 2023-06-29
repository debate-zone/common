import { ParticipantStatus } from "./types";

export const getLabelByParticipantStatus = (
  status?: ParticipantStatus
): string => {
  switch (status) {
    case ParticipantStatus.PENDING:
      return "Pending";
    case ParticipantStatus.ACCEPTED:
      return "Accepted";
    case ParticipantStatus.REJECTED:
      return "Rejected";
    case ParticipantStatus.LEFT:
      return "Left";
    default:
      return "Pending";
  }
};
