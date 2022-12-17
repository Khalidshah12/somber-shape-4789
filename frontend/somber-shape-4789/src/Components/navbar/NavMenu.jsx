import { Button, Flex, Menu, MenuButton } from "@chakra-ui/react";
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
          <Button variant="ghost">BODY CARE</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">NEW & NOW</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">HANDSOAP & SANITIZERS</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">HOME FRAGRANCE</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">GIFTS</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">TOP OFFERS</Button>
        </Menu>
        <Menu>
          <Button variant="ghost">GET INSPIRED</Button>
        </Menu>
        <UserMenu />
      </Flex>
    </>
  );
}
export default NavMenu;
