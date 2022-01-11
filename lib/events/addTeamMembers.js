import axios from "axios";

export default function addTeamMembers({ eventId, userId, teamMemberIds }) {
  var data = [{ id: userId }];
  if (teamMemberIds) {
    for (var i = 0; i < teamMemberIds; i++) data.push({ id: teamMemberIds[i] });
  }

  axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details/${eventId}`,
    {
      teamMembers: data,
    }
  );
}
