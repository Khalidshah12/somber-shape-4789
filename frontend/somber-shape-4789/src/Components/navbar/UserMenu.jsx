import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import LoginPage from "./loginPage";

function UserMenu() {
  
  const [isLoginVisible, setLoginVisible] = useState(false);
  const navigate = useNavigate();
  const {isAuth}=useSelector((state)=>state)

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
            <MenuItem icon={<FaUser />} onClick={() => {
              localStorage.removeItem("token");

            }}>
              Log Out
            </MenuItem>
          ) : (
            <MenuItem icon={<FaUser />} onClick={() => setLoginVisible(true)}>
              Login
            </MenuItem>
          )}

          {isAuth ? null : (
            <MenuItem
              icon={<FaUser></FaUser>}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </MenuItem>
          )}
        </MenuList>
      </Menu>
      <LoginPage isOpen={isLoginVisible}  setIsOpen={setLoginVisible} />
    </>
  );
}

export default UserMenu;
