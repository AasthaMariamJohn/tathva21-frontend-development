import { useUserContext } from "@/context/userContext";
import searchMember from "@/lib/events/searchMember";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useTeamMemberContext } from "@/context/teamMemberContext";

export default function SearchInput({ memberIn, inputId }) {
  const { user } = useUserContext();

  const { updatedTeamMembers, setUpdatedTeamMembers } = useTeamMemberContext();

  const [tathvaId, setTathvaId] = useState(memberIn ? memberIn.tathvaId : null);
  const [member, setMember] = useState(
    memberIn
      ? {
          id: memberIn.id,
          collegeName: memberIn.collegeName,
          name: memberIn.name,
        }
      : null
  );
  const [checked, setChecked] = useState(memberIn ? true : false);
  useEffect(() => {
    if (isCorrectTathvaId(tathvaId) && !member) {
      searchMember(tathvaId, user.jwt, setMember);
    } else {
      if (!memberIn && !member) {
        setMember(null);
      }
    }
  }, [tathvaId]);

  useEffect(() => {
    if (checked && member) {
      updatedTeamMembers[inputId] = {
        user: { id: member.id, name: member.name },
      };
      setUpdatedTeamMembers(updatedTeamMembers);
    } else if (!checked && member) {
      delete updatedTeamMembers[inputId];
      setUpdatedTeamMembers(updatedTeamMembers);
    }
  }, [checked]);

  function isCorrectTathvaId() {
    if (tathvaId && tathvaId.length == 10) return true;
    return false;
  }

  function handleTathvaIdChange(e) {
    setTathvaId(e.target.value);
    if (isCorrectTathvaId()) {
      searchMember(tathvaId, user.jwt, setMember);
    }
  }
  return (
    <tr>
      <td>
        <input
          disabled={memberIn ? "disabled" : ""}
          value={tathvaId ? tathvaId : ""}
          onChange={handleTathvaIdChange}
        ></input>
      </td>
      <td>
        <input
          disabled={memberIn ? "disabled" : ""}
          value={member && isCorrectTathvaId() ? member.name : ""}
          onChange={(e) => {
            e.target.value = member.name;
          }}
        ></input>
      </td>
      <td>
        <input
          type={"checkbox"}
          checked={memberIn ? "checked" : checked}
          disabled={memberIn ? "disabled" : ""}
          onChange={(e) => {
            setChecked(checked ? false : true);
          }}
        ></input>
      </td>
    </tr>
  );
}
