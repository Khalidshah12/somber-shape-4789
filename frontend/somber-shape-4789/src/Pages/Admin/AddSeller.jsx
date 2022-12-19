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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSeller(props) {
  const { isOpen, setIsOpen,setData ,Data} = props;
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const[confirmPassword,setConfirmPassword]=useState("")
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobile,setMobile]=useState("")
  const navigate = useNavigate();
  const toast=useToast();
  const onClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (email, password,confirmPassword) => {
    if(password===confirmPassword){
      axios
      .post("", {
        first_name: firstName,
        last_Name: lastName,
        mobile,
        email,
        password,
        confirm_password: confirmPassword,
        isSeller: true,
      })
      .then((res) => {
        setData([...Data,{
          first_name: firstName,
          last_Name: lastName,
          mobile,
          email,
          password,
          confirm_password: confirmPassword,
          isSeller: true,
        }])
        setIsOpen(false)
        toast({
          title: 'seller Account created.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      })
      .catch((e) => {
        console.log(e);
      });
    }
    else{
      toast({
        title:"password not equal to confirm password",
        status: 'failed',
        duration: 2000,
        isClosable: true,
      })

    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Seller Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="First name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Seller Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter Passwword"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormLabel>Confirm Password</FormLabel>
              <Input
                name="password"
                type="confirm_password"
                placeholder="confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FormLabel>First Name</FormLabel>
              <Input
                name="first_name"
                type="text"
                placeholder="First name"
                onChange={(e) => setfirstName(e.target.value)}
              />
              
              <FormLabel>Last Name</FormLabel>
              <Input
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
              />
            </FormControl>
            <FormLabel>Mobile No.</FormLabel>
              <Input
                name="first_name"
                type="number"
                placeholder="Mobile No."
                onChange={(e) => setMobile(e.target.value)}
              />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setIsOpen(false);
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSeller;
