import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    Link,
    VStack,
  } from '@chakra-ui/react';
  import { useRef } from 'react';
  import {GrMenu} from 'react-icons/gr'
  import {Link as RouterLink} from 'react-router-dom';
  function NavMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
  
    return (
      <>
        <IconButton
          icon={<GrMenu />}
          ref={btnRef}
          variant="ghost"
          colorScheme="purple"
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              color="purple.900
            "
            >
              Menu
            </DrawerHeader>
  
            <DrawerBody>
              <VStack align="start">
                <Link
                  color="red.500"
                  fontWeight="bold"
                  as={RouterLink}
                  to="/products"
                >
                  ALL SALE
                </Link>
                <Link as={RouterLink} to="/products?section=body care">
                  BODY CARE
                </Link>
                <Link as={RouterLink} to="/products?section=candles">
                  CANDLES
                </Link>
                <Link as={RouterLink} to="/products?section=home fragrance">
                  HOME FRAGRANCE
                </Link>
                <Link
                  as={RouterLink}
                  to="/products?section=hand soaps %26 sanitizers"
                >
                  HAND SOAPS & SANITIZERS
                </Link>
                <Link as={RouterLink} to="/products">
                  MEN'S
                </Link>
                <Link as={RouterLink} to="/products">
                  GIFTS
                </Link>
                <Link as={RouterLink} to="/products">
                  BEST SELLERS
                </Link>
              </VStack>
            </DrawerBody>
  
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default NavMenu;