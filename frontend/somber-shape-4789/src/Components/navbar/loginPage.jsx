import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const { isOpen, setIsOpen } = props;
  const navigate=useNavigate();
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>First Email</FormLabel>
              <Input name="email" type="email" placeholder="First name" />
              <FormLabel>Enter Password</FormLabel>
              <Input name="password" type="password" placeholder="First name" />
            </FormControl>
            
          </ModalBody>


          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={()=>console.log("hello")}>
              Submit
            </Button>
            <Button colorScheme="red" mr={5} onClick={()=>{
              setIsOpen(false);
              navigate("/signup")
              }}>
              Sign Up
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginPage;
