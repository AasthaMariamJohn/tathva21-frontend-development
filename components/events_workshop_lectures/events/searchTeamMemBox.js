import { useTeamMemberContext } from "@/context/teamMemberContext";
import { useState,useEffect } from "react";
import SearchInput from "./searchInput";
import styles from "./test.module.css";
import addTeamMembers from "@/lib/events/addTeamMembers";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";
export default function SearchTeamMemberBox({
  eventId,
  maxTeamSize,
  teamMembers,
}) {
  const { setTeamMembers, updatedTeamMembers } = useTeamMemberContext();
  const { user } = useUserContext();
  const router=useRouter()
  
  useEffect(() => {
    if (teamMembers) {
      setTeamMembers(teamMembers);
    }
  }, [teamMembers]);
  return (
    <div className={styles["search-member-box"]}>
      <table>
        <thead>
          <tr>
            <th>Tathva Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <Inputs maxTeamSize={maxTeamSize}></Inputs>
        {teamMembers.length < maxTeamSize ? (
          <tbody>
            <tr style={{ colSpan: 2 }}>
              <td>
                <button
                  onClick={() => {
                    addTeamMembers(eventId, updatedTeamMembers, user.jwt,router);
                  }}
                >
                  Add Members
                </button>
              </td>
            </tr>
          </tbody>
        ) : (
          <></>
        )}
      </table>
    </div>
  );
}

function Inputs({ maxTeamSize }) {
  const { teamMembers } = useTeamMemberContext();
  const [rows, setRows] = useState();
  var row = [];
  useEffect(() => {
    if (teamMembers && row.length <= maxTeamSize)
      for (var i = 0; i < maxTeamSize; i++) {
        if (teamMembers[i]) {
          row.push(
            <SearchInput key={i} memberIn={teamMembers[i]} inputId={i} />
          );
        } else {
          row.push(<SearchInput key={i} inputId={i} />);
        }
        setRows(row);
      }
  }, [teamMembers]);

  return <tbody>{rows}</tbody>;
}
