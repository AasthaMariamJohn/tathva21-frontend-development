import Overlay from "../common/overlay";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Center,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";
export default function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="ghost"
        position="absolute"
        bottom={["69px" ,4]}
        right={100}
        onClick={onOpen}
      >
        <FaInfo color={"#00A3C4"} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bgColor={"black"} color={"white"} fontSize={14}>
          <ModalHeader>How To Use</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text display={["none", "block"]}>
            <Text>
                1) To pan, click and drag the cursor to the left or right.
              </Text>
              <Text>
                2) To zoom using a mouse, scroll upward (to zoom in) or downward
                (to zoom out). To zoom using a touchpad, place two fingers on
                the touchpad and drag them down (to zoom in) or up (to zoom
                out).
              </Text>
              <Text>
                3) To rotate, right click and move the cursor in the direction
                you want to rotate.
              </Text>
            </Text>
            <Text display={["block", "none"]}>
              <Text>1) To pan, swipe to the left or right.</Text>
              <Text>
                2) To zoom, touch two fingers on the screen and move them apart
                (to zoom in) or bring them together (to zoom out).
              </Text>
              <Text>
                3) To rotate, place two fingers on the screen, hold one finger
                steady and rotate the other in the direction you want to turn.
              </Text>
            </Text>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
