import {
  Box,
  Button,
  Flex,
  GridItem,
  IconButton,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <Box pl={"6%"} pr={"6%"}>
      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw10c21dc4/images/Fall2022/boc-launch-prospects_hm_0.gif?yocs=s_" />
      </Box>
      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw32f3ac58/images/Fall2022/cndl_pumpkinbreadth_fa1_hm.gif?yocs=s_" />
      </Box>
      <Box p={5} align="center">
        <Box color="pink.500">
          <Text align="center" fontSize="3xl" mb={5}>
            TODAY'S TOP OFFERS
          </Text>
          <SimpleGrid bgColor="gray.100" p={10} columns={[1, 2, 2, 5]} gap={6}>
            <GridItem w="100%" bg="white" p={10}>
              <VStack>
                <Text>Today Only!</Text>
                <Text>$10 Off</Text>
                <Button w="100%" bgColor="black" color="white">
                  SHOP
                </Button>
              </VStack>
            </GridItem>
            <GridItem w="100%" bg="white" p={10}>
              <VStack>
                <Text>Today Only!</Text>
                <Text>$10 Off</Text>
                <Button w="100%" bgColor="black" color="white">
                  SHOP
                </Button>
              </VStack>
            </GridItem>
            <GridItem w="100%" bg="white" p={10}>
              <VStack>
                <Text>Today Only!</Text>
                <Text>$10 Off</Text>
                <Button w="100%" bgColor="black" color="white">
                  SHOP
                </Button>
              </VStack>
            </GridItem>
            <GridItem w="100%" bg="white" p={10}>
              <VStack>
                <Text>Today Only!</Text>
                <Text>$10 Off</Text>
                <Button w="100%" bgColor="black" color="white">
                  SHOP
                </Button>
              </VStack>
            </GridItem>
            <GridItem w="100%" bg="white" p={10}>
              <VStack>
                <Text>Today Only!</Text>
                <Text>$10 Off</Text>
                <Button w="100%" bgColor="black" color="white">
                  SHOP
                </Button>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw45ce316f/images/Fall2022/bc_sweaterweather_fa1_hm.jpg?yocs=s_" />
      </Box>
      <Box p={5}>
        <Box>
          <Text align="center" fontSize="3xl" mb={5}>
            SHOP BY CATEGORIES
          </Text>
          <SimpleGrid columns={[2, 3, 6]} gap={6}>
            <GridItem>
              <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw415d6bf8/images/Fall2022/bc_midamber_sfl_fa1_vn2.jpg?yocs=o_s_" />
              <Text align="center">Today Only!</Text>
            </GridItem>
            <GridItem>
              <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc2ca0b55/images/Fall2022/cndl_roadtrip_fa1_vn.jpg?yocs=o_s_" />
              <Text align="center">Today Only!</Text>
            </GridItem>
            <GridItem>
              <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf6577e0c/images/Fall2022/diff_Ingredient_fa1_vn.jpg?yocs=o_s_" />
              <Text align="center">Today Only!</Text>
            </GridItem>
            <GridItem>
              <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw806578a9/images/Fall2022/sp_roadtrip_decor_fa1_vn.jpg?yocs=o_s_" />
              <Text align="center">Today Only!</Text>
            </GridItem>
            <GridItem>
              <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc728cf91/images/Fall2022/bc_at_sanctuary_fa1_vn2.jpg?yocs=o_s_" />
              <Text align="center">Today Only!</Text>
            </GridItem>
            <GridItem>
              <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5a02a7ff/images/Fall2022/bc_ingredientled_fa1_vn2.jpg?yocs=o_s_" />
              <Text align="center">Today Only!</Text>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
      <Box align="center">
        <VStack>
          <Text fontSize="3xl">NEW Midnight Amber Glow</Text>

          <Text w="40%" align="center">
            Our unique blend of smooth amber, vanilla bourbon and caramel latte
            is so rich, you can almost taste it.
          </Text>

          <Box rounded="false" pl={10} pr={10}>
            SHOP THE COLLECTION
          </Box>
        </VStack>
      </Box>

      <Box mt={10} p={5}>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
          <Box>
            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2209c56/images/Fall2022/bc_midamber_sfl_fa1_atb.jpg?yocs=o_s_" />
          </Box>
          <Box>
            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe67edd78/images/Fall2022/xcat_ingredientled_fa1_hps.jpg?yocs=o_s_" />
          </Box>
          <Box>
            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw241908af/images/Fall2022/xcat_roadtrip_fa1_hps.jpg?yocs=o_s_" />
          </Box>
          <Box>
            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe67edd78/images/Fall2022/xcat_ingredientled_fa1_hps.jpg?yocs=o_s_" />
          </Box>
          <Box>
            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw48de6656/images/Fall2022/xcat_fall_pumpkin_fa1_hps.jpg?yocs=o_s_" />
          </Box>
          <Box>
            <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw79491a41/images/Fall2022/bc_at_sanctuary_fa1_hps.jpg?yocs=o_s_" />
          </Box>
        </SimpleGrid>
      </Box>

      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfd31720e/images/Summer2022/xcat_halloween_su3_hb.jpg?yocs=s_" />
      </Box>

      <Box p={5}>
        <Img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwda661154/images/Fall2022/xcat_stl-givelove_fa1_hb%E2%80%8B.jpg?yocs=s_" />
      </Box>

      <Box p={5}>
        <SimpleGrid columns={[2, 2, 3, 6]} spacing={5}>
          <Button rounded="false">TOP COLLECTION</Button>
          <Button rounded="false">TOP COLLECTION</Button>
          <Button rounded="false">TOP COLLECTION</Button>
          <Button rounded="false">TOP COLLECTION</Button>
          <Button rounded="false">TOP COLLECTION</Button>
          <Button rounded="false">TOP COLLECTION</Button>
        </SimpleGrid>
      </Box>
      <Text align="center" fontSize="3xl">
        MORE GOOD THINGS, THIS WAY
      </Text>

      <Box p={5}>
        <SimpleGrid columns={[2, 2, 3, 6]} spacing={10}>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_"
            />
            <Text fontSize="16px" align="center">
              Shop—it’s fast, free, easy
            </Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_"
            />
            <Text align="center" fontSize="16px">
              Sign up for texts
            </Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_"
            />
            <Text align="center" fontSize="16px">
              Sign up for emails
            </Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_"
            />
            <Text align="center" fontSize="16px">
              Checkout for auto refresh
            </Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_"
            />
            <Text align="center" fontSize="16px">
              join the VIPs
            </Text>
          </Box>
          <Box>
            <Img
              boxSize="200"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_"
            />
            <Text align="center" fontSize="16px">
              See the return policy
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box mt="10">
        <Flex align="center" justify="center" gap={2}>
          <IconButton borderRadius="50%" icon={<FaInstagram />} />
          <Text>@BATHANDBODYWORKS</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;