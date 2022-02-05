import axios from "axios";
import { toast } from "react-toastify";

export default function addTeamMembers(eventId, teamMembers, jwt, router) {
  var teamMemberList = [],
    teamMemberNames = "";
  for (var key in teamMembers) {
    teamMemberList.push({ id: teamMembers[key].user.id });
    teamMemberNames += `${teamMembers[key].user.name}, `;
  }

  // if (confirm(`confirm adding ${teamMemberNames} to this event`))
  updateTeamMemebers(eventId, teamMemberList, jwt);
}

export function updateTeamMemebers(eventId, teamMemberList, jwt, router) {
  axios
    .put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details/${eventId}`,
      {
        teamMembers: teamMemberList,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    .then(() => {
      toast.success("Members added please refresh the page", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.reload();
    });
}

export function setTeamLeader(jwt, eventId, teamLeaderId) {
  axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details/${eventId}`,
    {
      MetaValues: { teamLeader: { id: teamLeaderId } },
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
}
