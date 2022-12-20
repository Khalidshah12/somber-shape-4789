import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../Redux/AuthReducer/action";
import LoginPage from "./loginPage";


function UserMenu() {

  const [isLoginVisible, setLoginVisible] = useState(false);
  const navigate = useNavigate();
  const { isAuth, isAdmin, isSeller } = useSelector((state) => state.AuthReducer)
  const dispatch = useDispatch();
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
          {isAuth || isAdmin || isSeller ? (
            <MenuItem icon={<FaUser />} onClick={() => {
              dispatch(userLogout())
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
      <LoginPage isOpen={isLoginVisible} setIsOpen={setLoginVisible} />
    </>
  );
}

export default UserMenu;
