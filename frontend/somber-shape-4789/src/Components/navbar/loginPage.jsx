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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../Redux/AuthReducer/action";
import {useDispatch} from "react-redux"

function LoginPage(props) {
  const { isOpen, setIsOpen } = props;
  let dispatch = useDispatch();
  const navigate=useNavigate();
  const onClose = () => {
    setIsOpen(false);
  };
  const [input, setInput] = useState({
    email : "",
    password : ""
  });

  const handleChange = (event) =>{
    let {name, value} = event.target;
    setInput({...input, [name] : value});
  }

const handleSubmit = (event) => {
  event.preventDefault();
   dispatch(getUserLogin(input))
}

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
              <Input name="email" type="email" placeholder="First name" onChange={handleChange}/>
              <FormLabel>Enter Password</FormLabel>
              <Input name="password" type="password" placeholder="First name" onChange={handleChange}/>
            </FormControl>
            
          </ModalBody>


          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
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
