import {
  Box,
  Button,
  Flex,
  GridItem,
  IconButton,
  Image,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate()
  let data = [
    {
        "_id": "639c3c7b84de39215c174e13",
        "selerId": "639c36cf3bbdc9ab001188d6",
        "name": "IMAGES PRISMATIC STARS",
        "image": [
            "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw68998130/hires/026578802.jpg?sh=471&yocs=o_s_"
        ],
        "desc": "What it smells like: looking up at the sweet, shimmering stars on a warm night.",
        "sub_desc": "Fragrance notes: raspberry stardust, mystic plum and cosmic cashmere.",
        "price": 17,
        "size": 432,
        "category": "Shower Gel",
        "rating": 4.9,
        "offer": "Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE",
        "review": [],
        "createdAt": "2022-12-16T09:38:03.545Z",
        "updatedAt": "2022-12-16T09:38:03.545Z"
    },
    {
        "_id": "639c3cc884de39215c174e16",
        "selerId": "639c36cf3bbdc9ab001188d6",
        "name": "COZY EVENING",
        "image": [
            "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2ebb5be9/hires/026575584.jpg?sh=471&yocs=o_s_"
        ],
        "desc": "What it smells like: relaxing on the porch swing on a breezy night.",
        "sub_desc": "Fragrance notes: lavender blooms, fresh freesia and cozy musk.",
        "price": 26,
        "size": 245,
        "category": "Shower Gel",
        "rating": 3.4,
        "offer": "Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE",
        "review": [],
        "createdAt": "2022-12-16T09:39:20.548Z",
        "updatedAt": "2022-12-16T09:39:20.548Z"
    },
    {
        "_id": "639c3cf184de39215c174e19",
        "selerId": "639c36cf3bbdc9ab001188d6",
        "name": "EUCALYPTUS SPEARMINT",
        "image": [
            "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw03cbefc8/hires/026353200.jpg?sh=471&yocs=o_s_"
        ],
        "desc": "What it smells like: a day at the spa with your fresh, herbal favorites.",
        "sub_desc": "Fragrance notes: eucalyptus oil (clears the mind) and spearmint oil (soothes and uplifts).",
        "price": 33,
        "size": 456,
        "category": "Shower Gel",
        "rating": 3.4,
        "offer": "Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE",
        "review": [],
        "createdAt": "2022-12-16T09:40:01.086Z",
        "updatedAt": "2022-12-16T09:40:01.086Z"
    },
    {
        "_id": "639c3d1a84de39215c174e1b",
        "selerId": "639c36cf3bbdc9ab001188d6",
        "name": "YOU'RE THE ONE",
        "image": [
            "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw761f2125/hires/026139371.jpg?sh=471&yocs=o_s_",
            "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw78ad5557/hires/026139371_alt_1.jpg?sw=50&yocs=o_s_"
        ],
        "desc": "What it smells like: a sparkling, beautiful night with the one you love.",
        "sub_desc": "Fragrance notes: white birch, velvety rose and a drop of strawberry nectar.",
        "price": 34,
        "size": 398,
        "category": "Shower Gel",
        "rating": 4,
        "offer": "Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE",
        "review": [],
        "createdAt": "2022-12-16T09:40:42.417Z",
        "updatedAt": "2022-12-16T09:40:42.417Z"
    }
]
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
          <SimpleGrid bgColor="gray.100" p={10} columns={[1, 2, 2, 4]} gap={6}>
          {data.map((e)=>{
              return (
                <GridItem w="100%" bg="white" p={10}>
                  <Image src={e.image[0]}/>
                  <Text>{e.name}</Text>
                  <Text>10% off</Text>
                  <Button onClick={()=>navigate(`/products/${e._id}`)}>Shop</Button>
                </GridItem>
              )
            })}
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
          <SimpleGrid columns={[2, 3, 3, 6]} gap={6}>
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