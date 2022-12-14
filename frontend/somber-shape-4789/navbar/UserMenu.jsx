import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Link,
    Image,
    Button,
  } from '@chakra-ui/react';
  
  import { useNavigate } from 'react-router-dom';
  import { useSelector, useDispatch } from 'react-redux';
  import { signOut } from '../../redux/auth/authSlice';
  function UserMenu(){
      const navigate = useNavigate();
      const {isAuth} = useSelector(store => store.auth); 
      const dispatch = useDispatch();
      return (
        <Menu>
          <MenuButton as={Button} bg='white' w='35px' p={'1'}>
            <Image
              boxSize={'35px'}
              minW='35px'
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwf6281149/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
            />
          </MenuButton>
          <MenuList>
            {!isAuth &&<MenuItem onClick={() => navigate('/sign-in')}>Sign in Or Sign Up</MenuItem>}
            <MenuItem onClick={() => navigate('/shopping-cart')}>Cart</MenuItem>
            <MenuItem onClick={() => navigate('/checkout/shipping')}>Checkout</MenuItem>
            {isAuth && <MenuItem onClick={() => {
              dispatch(signOut());
              navigate("/");
            }}>Sign out</MenuItem>}
            
          </MenuList>
        </Menu>
      );
  }
  
  export default UserMenu;