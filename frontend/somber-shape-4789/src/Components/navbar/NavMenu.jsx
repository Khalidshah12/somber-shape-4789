import { Button, Flex, Menu } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
function NavMenu() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        justifyContent="space-around"
        gap={10}
        display={["none", "none", "none", "flex"]}
        p={5}
      >
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/")}
          >
            BODY CARE
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/")}
          >
            NEW & NOW
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/")}
          >
            HANDSOAP & SANITIZERS
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/")}
          >
            HOME FRAGRANCE
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/")}
          >
            GIFTS
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/")}
          >
            TOP OFFERS
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/")}
          >
            GET INSPIRED
          </Button>
        </Menu>
        <UserMenu />
      </Flex>
    </>
  );
}
export default NavMenu;
