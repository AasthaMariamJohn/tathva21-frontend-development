import { useUserContext } from "@/context/userContext";
import searchMember from "@/lib/events/searchMember";
import { useEffect, useState } from "react/cjs/react.development";
import "react-toastify/dist/ReactToastify.css";

export default function SearchInput({ memberIn }) {
  const { user } = useUserContext();
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
  const [checked, setChecked] = useState(memberIn ? true: false);
  useEffect(() => {
    if (isCorrectTathvaId(tathvaId) && !member) {
      searchMember(tathvaId, user.jwt, setMember);
    } else {
      if (!memberIn) setMember(null);
    }
  }, [tathvaId]);

  useEffect(() => {
    if (member) {
      memberIn = null;
    }
  }, [member]);


  useEffect(()=>{
    if(checked){
      a={
        user:member.id
      }
    }
  },[checked])

  function isCorrectTathvaId(tathvaId) {
    if (tathvaId && tathvaId.length == 10) return true;
    return false;
  }

  function handleTathvaIdChange(e) {
    setTathvaId(e.target.value);
    if (isCorrectTathvaId(tathvaId)) {
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
          value={member ? member.name : ""}
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
          onChange={(e)=>{setChecked(checked?false:true)}}
        ></input>
      </td>
    </tr>
  );
}
