import { Button, Flex, Menu, MenuButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
function NavMenu() {
  return (
    <>
      <Flex
        // justify="center"
        justifyContent="space-around"
        gap={10}
        display={["none", "none", "flex", "flex"]}
        p={5}
      >
        <Menu>
          <Button variant="ghost">TOP OFFERS</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">CANDELS</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">HAND WASH</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">SHAMPOO</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">SHAMPOO</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">SHAMPOO</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">SHAMPOO</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">SANITIZERS</Button>
        </Menu>
        <UserMenu />
      </Flex>
    </>
  );
}
export default NavMenu;
