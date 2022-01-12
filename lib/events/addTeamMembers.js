import axios from "axios";

export default function addTeamMembers({ eventId, userId, teamMembers }) {
  var data = [{ id: userId }];
  if (teamMembers) {
    for (var i = 0; i < teamMembers; i++) data.push({ id: teamMember[i].id });
  }

  axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details/${eventId}`,
    {
      teamMembers: data,
    }
  );
}
