import { useTeamMemberContext } from "@/context/teamMemberContext";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import SearchInput from "./searchInput";
import styles from "./test.module.css";
export default function SearchTeamMemberBox({ maxTeamSize, teamMembers }) {
  const { setTeamMembers } = useTeamMemberContext();
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

        <tbody>
          <tr style={{ colSpan: 2 }}>
            <td>
              <button>Add Members</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Inputs({ maxTeamSize }) {
  const { teamMembers } = useTeamMemberContext();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (teamMembers)
      for (var i = 0; i < maxTeamSize; i++) {
        if (teamMembers[i])
          setRows(
            rows.push(
              <SearchInput key={i} memberIn={teamMembers[i]} inputId={i} />
            )
          );
        else setRows(rows.push(<SearchInput key={i} inputId={i} />));
      }
  }, [teamMembers]);

  return <tbody>{rows}</tbody>;
}
