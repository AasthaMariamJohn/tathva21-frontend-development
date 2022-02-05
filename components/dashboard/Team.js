import style from "./db.module.css";
import TeamMember from "./TeamMember";
import { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useUserContext } from "@/context/userContext";
import searchMember from "@/lib/events/searchMember";
import addTeamMembers, {
  updateTeamMemebers,
  setTeamLeader,
} from "@/lib/events/addTeamMembers";
import { useRouter } from "next/router";

export default function Team({ teamMembers, userEventId }) {
  const { user } = useUserContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const initialRef = useRef();
  const finalRef = useRef();

  const [newMember, setnewMember] = useState({
    name: "",
    tathvaId: "",
    college: "",
    id: "",
  });
  const [tathvaId, setTathvaId] = useState("");
  function isCorrectTathvaId() {
    if (tathvaId && tathvaId.length == 10) return true;
    return false;
  }
  function handleTathvaIdChange(e) {
    setTathvaId(e.target.value);
  }
  useEffect(() => {
    if (isCorrectTathvaId()) {
      searchMember(tathvaId, user.jwt, setnewMember);
    }
  }, [tathvaId]);

  function confirmAdding() {
    if (newMember) {
      var list = [];
      for (var key in teamMembers) {
        list.push({ id: teamMembers[key].id });
      }
      list.push({ id: newMember.id });
      updateTeamMemebers(userEventId, list, user.jwt, router);
    }
  }

  return (
    <div className={style.team}>
      <p className={style.header}>
        <span>TEAM</span>
        <span>ID-090392</span>
      </p>
      <div className={style.members}>
        {teamMembers.map((member) => (
          <TeamMember key={member.id} name={member.name} id={member.tathvaId} />
        ))}
      </div>

      <button className={style.addmember} onClick={onOpen}>
        ADD TEAM MEMBER
      </button>
      <button
        onClick={() => {
          setTeamLeader(user.jwt, userEventId, 1);
        }}
      >
        set Team Leader
      </button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Team Member</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tathva Id</FormLabel>
              <Input
                ref={initialRef}
                value={tathvaId}
                onChange={handleTathvaIdChange}
                placeholder="Tathva"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                value={newMember.name ? newMember.name : ""}
                onChange={() => {}}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>College</FormLabel>
              <Input
                placeholder="College"
                value={newMember.collegeName ? newMember.collegeName : ""}
                onChange={() => {}}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={confirmAdding}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
