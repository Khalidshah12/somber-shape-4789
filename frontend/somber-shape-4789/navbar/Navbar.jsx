import {
    Badge,
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Spacer,
  } from '@chakra-ui/react';
  import { FiSearch } from 'react-icons/fi';
  import NavMenu from './NavMenu';
  import { useSelector } from 'react-redux';
  import { Link as RouterLink } from 'react-router-dom';
  import UserMenu from './UserMenu';
  function Navbar() {
    const { total_items } = useSelector(store => store.cart);
    return (
      <Box p={4} maxW="100%">
        <Grid
          templateColumns={'repeat(24,1fr)'}
          // gap={4}
          justify="space-between"
          align="center"
          my={4}
          boxSizing="bor"
        >
          <NavMenu />
  
          <GridItem
            colStart={{ base: 7, md: 7, lg: 9 }}
            colSpan={{ base: 11, md: 8, lg: 6 }}
            alignSelf="center"
          >
            <RouterLink to="/">
              <Heading
                color={'purple.700'}
                ml="auto"
                minW="fit-content"
                fontSize={{ base: '1.2rem', md: '1.8rem' }}
              >
                Bath & Body Works
              </Heading>
            </RouterLink>
          </GridItem>
          <GridItem colStart={{ base: 19, md: 16,lg:18}} colSpan={{ base: 5, md: 5 }}>
            <HStack justifySelf={'end'} spacing={'1.2rem'}>
              <InputGroup w="20vw" display={{ base: 'none', md: 'inline' }}>
                <Input placeholder="Search by fragrance or product" />
                <InputRightElement
                  pointerEvents={'none'}
                  children={<FiSearch color="purple" />}
                />
              </InputGroup>
              <UserMenu />
              <Box as={RouterLink} to="/shopping-cart">
                <Image
                  boxSize={'30px'}
                  minW="30px"
                  position="relative"
                  top="10px"
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/UI-AddToBag.svg?yocs=o_s_"
                />
                <Badge
                  bg="transparent"
                  color="purple"
                  position={'relative'}
                  bottom="12px"
                  left="4px"
                  zIndex={'3'}
                >
                  {total_items}
                </Badge>
              </Box>
            </HStack>
          </GridItem>
        </Grid>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          justify={'space-around'}
          fontSize={['0.70rem', '0.75rem', '0.85rem', '0.9rem']}
          my={2}
        >
          <Link color="red.500" fontWeight="bold" as={RouterLink} to="/products">
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
          <Link as={RouterLink} to="/products?section=hand soaps %26 sanitizers">
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
        </Flex>
      </Box>
    );
  }
  
  export default Navbar;