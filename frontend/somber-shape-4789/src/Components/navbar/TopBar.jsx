import {
    Flex,
    Spacer,
    Text,
    Img,
    Input,
    Button,
    IconButton,
    HStack,
  } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";
  import { FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";
  import { SearchIcon } from "@chakra-ui/icons";
  import Navbar from "./Navbar";
  function Topbar() {
    const navigate = useNavigate();  
    return (
      <>
      <Navbar />
        {" "}
        <Flex
          align="center"
          h="30px"
          w="100%"
          gap={3}
          p={5}
          display={["none", "none", "flex", "flex"]}
        >
          <Text color="pink.500">POINTS.PERKS.EXCLUSIVES</Text>
          <Link to="/home">Join Rewards!</Link>
          <Spacer />
          <FaMapMarkerAlt />
          <Text>PICK UP IN STORE</Text>
          <Link to="/home">Set Store</Link>
        </Flex>
        <Flex
          p={10}
          gap={5}
          pt={4}
          pl="40%"
          align="center"
          display={["none", "none", "flex", "flex"]}
        >
          <Img
            cursor="pointer"
            onClick={() => navigate("/")}
            w="350px"
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_"
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