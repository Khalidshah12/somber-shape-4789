import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginPage from "./loginPage";

function UserMenu() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const isAuth=false;

  return (
    <>
      <Menu>
        <MenuButton
          borderRadius="50%"
          as={IconButton}
          aria-label="Options"
          icon={<FaUser />}
          variant="outline"
        />
        <MenuList>
          {isAuth ? (
            <MenuItem icon={<FaUser />} onClick={() => console.log("log out")}>
              Log Out
            </MenuItem>
          ) : (
            <MenuItem icon={<FaUser />} onClick={() => setLoginVisible(true)}>
              Login
            </MenuItem>
          )}

          {isAuth ? null : (
            <MenuItem icon={<FaUser></FaUser>} >
              <Link>Sign Up</Link>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
      <LoginPage isOpen={isLoginVisible} setIsOpen={setLoginVisible} />
    </>
  );
}

export default UserMenu;