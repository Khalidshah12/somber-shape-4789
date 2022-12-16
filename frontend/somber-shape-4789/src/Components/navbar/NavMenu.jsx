import { Button, Flex, Menu, MenuButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
function NavMenu() {
  return (
    <>
      <Flex
        justify="center"
        gap={10}
        display={["none", "none", "flex", "flex"]}
        p={5}
      >
         <Menu><Link>TOP OFFERS</Link></Menu>
          <Menu><Link>CANDELS</Link></Menu>
          <Menu><Link>HAND WASH</Link></Menu>
          <Menu><Link>SHAMPOO</Link></Menu>
          <Menu><Link>SHAMPOO</Link></Menu>
          <Menu><Link>SHAMPOO</Link></Menu>
          <Menu><Link>SHAMPOO</Link></Menu>
          <Menu><Link>SANITIZERS</Link></Menu>
        <UserMenu />
      </Flex>
    </>
  );
}
  export default NavMenu;
