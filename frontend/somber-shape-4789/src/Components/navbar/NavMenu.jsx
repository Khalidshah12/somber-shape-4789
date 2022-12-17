import { Button, Flex, Menu } from "@chakra-ui/react";
import UserMenu from "./UserMenu";
function NavMenu() {
  return (
    <>
      <Flex
        justifyContent="space-around"
        gap={10}
        display={["none", "none", "none", "flex"]}
        p={5}
      >
        <Menu>
          <Button color={"#004aad"} variant="ghost">
            BODY CARE
          </Button>
        </Menu>
        <Menu>
          <Button color={"#004aad"} variant="ghost">
            NEW & NOW
          </Button>
        </Menu>
        <Menu>
          <Button color={"#004aad"} variant="ghost">
            HANDSOAP & SANITIZERS
          </Button>
        </Menu>
        <Menu>
          <Button color={"#004aad"} variant="ghost">
            HOME FRAGRANCE
          </Button>
        </Menu>
        <Menu>
          <Button color={"#004aad"} variant="ghost">
            GIFTS
          </Button>
        </Menu>
        <Menu>
          <Button color={"#004aad"} variant="ghost">
            TOP OFFERS
          </Button>
        </Menu>
        <Menu>
          <Button color={"#004aad"} variant="ghost">
            GET INSPIRED
          </Button>
        </Menu>
        <UserMenu />
      </Flex>
    </>
  );
}
export default NavMenu;
