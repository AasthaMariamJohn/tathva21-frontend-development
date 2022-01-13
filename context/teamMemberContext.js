import { createContext, useContext, useState, useEffect } from "react";

const TeamMemberContext = createContext();
TeamMemberContext.displayName = "TeamMemberContext";

export function TeamMemberWrapper({ children }) {
  const [teamMembers, setTeamMembers] = useState(null);
  const [updatedTeamMembers, setUpdatedTeamMembers] = useState({});

  return (
    <TeamMemberContext.Provider
      value={{
        teamMembers: teamMembers,
        setTeamMembers: setTeamMembers,
        updatedTeamMembers: updatedTeamMembers,
        setUpdatedTeamMembers: setUpdatedTeamMembers,
      }}
    >
      {children}
    </TeamMemberContext.Provider>
  );
}

export function useTeamMemberContext() {
  return useContext(TeamMemberContext);
}
