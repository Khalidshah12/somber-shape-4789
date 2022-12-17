import {
    Flex,
    Spacer,
    Text,
    Img,
    Input,
    Button,
    IconButton,
  } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";
  import { FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";
  import { SearchIcon } from "@chakra-ui/icons";
  import Navbar from "./Navbar";
  import logo from "../../images/logo3.png"
  function Topbar() {
    const navigate = useNavigate();  
    return (
      <>
      <Navbar  />
        {" "}
        <Flex
          align="center"
          h="30px"
          w="100%"
         mt={"10px"}
          gap={3}
          p={5}
          display={["none", "none", "none", "flex"]}
        >
          <Text color="pink.500">POINTS.PERKS.EXCLUSIVES</Text>
          <Link to="/">Join Rewards!</Link>
          <Spacer />
          <FaMapMarkerAlt />
          <Text>PICK UP IN STORE</Text>
          <Link to="/">Set Store</Link>
        </Flex>
        <Flex
          p={10}
          gap={5}
          pt={4}
          pb={2}
          pl={"25%"}
          align={"center"}
          display={["none", "none", "flex", "flex"]}
        >
          <Img
            cursor="pointer"
            onClick={() => navigate("/")}
            w="50%"
            mr={"5%"}
            src={logo}
          />
          <Flex border="1px" borderColor="gray" gap={2} w="40%">
            <Input
              pl={2}
              variant="unstyled"
              size="sm"
              placeholder="search by fragrence or product..."
            />
            <Button>
              <SearchIcon />
            </Button>
          </Flex>
  
          <IconButton
            onClick={() => navigate("/cart")}
            borderRadius="50%"
            icon={<FaShoppingBag />}
          />
        </Flex>
        
      </>
    );
  }
  
  export default Topbar;