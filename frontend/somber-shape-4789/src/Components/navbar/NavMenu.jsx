import { Button, Flex, Menu } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
function NavMenu() {
  const navigate = useNavigate();
  const { isAdmin, isSeller } = useSelector((state) => state);
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
            onClick={() => navigate("/products/parfum")}
          >
            PERFUMES
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/products/bodywash")}
          >
            BODYWASH
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/products/ShowerGel")}
          >
            SHOWERGEL
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/products/Cologne")}
          >
           COLOGNE
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/products/HandSoap")}
          >
            HANDWASH
          </Button>
        </Menu>
        <Menu>
          <Button
            color={"#004aad"}
            variant="ghost"
            onClick={() => navigate("/products/BodyCream")}
          >
            BODY CREAM
          </Button>
        </Menu>
        {isAdmin ? (
          <Menu>
            <Button
              color={"red"}
              variant="ghost"
              onClick={() => navigate("/admin")}
            >
              Admin
            </Button>
          </Menu>
        ) : null}
        {isSeller ? (
          <Menu>
            <Button
              color={"red"}
              variant="ghost"
              onClick={() => navigate("/seller")}
            >
              Seller
            </Button>
          </Menu>
        ) : null}
        <UserMenu />
      </Flex>
    </>
  );
}
export default NavMenu;
