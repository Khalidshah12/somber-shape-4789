import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    IconButton,
    Img,
    Input,
    ListItem,
    SimpleGrid,
    Text,
    UnorderedList,
  } from "@chakra-ui/react";
  import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <>
        <SimpleGrid columns={[1, 3, 3, 5]} spacing={10} mt={10} p={5}>
          <Box gridColumnStart={1} gridColumnEnd={2}>
            <Text>
              Get email offers & the latest news from Bath & Body Works!
            </Text>
            <FormControl isRequired>
              <FormLabel>Enter Email</FormLabel>
              <Input placeholder="First Email" />
              <FormLabel>Confirm Email</FormLabel>
              <Input placeholder="Confirm Email" />
              <Button mt={2} variant="outline" colorScheme="black">
                SUBMIT
              </Button>
            </FormControl>
            <Box mt={4}>
              <Text>Get Connected</Text>
              <HStack mt={2}>
                {" "}
                <IconButton borderRadius="50%" icon={<FaInstagram />} />
                <IconButton borderRadius="50%" icon={<FaTwitter />} />
                <IconButton borderRadius="50%" icon={<FaFacebookF />} />
                <IconButton borderRadius="50%" icon={<FaYoutube />} />
                <IconButton borderRadius="50%" icon={<FaTiktok />} />
              </HStack>
            </Box>
          </Box>
          <Box w="250px">
            <UnorderedList listStyleType="none" spacing={3}>
              <Text fontWeight="semibold" fontSize="18px">
                CUSTOMER CARE
              </Text>
              <ListItem>Help & FAQs</ListItem>
              <ListItem>Shipping</ListItem>
              <ListItem>Returns & Exchanges</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Corporate Sales & Gifts</ListItem>
              <ListItem>Contact Us</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <UnorderedList listStyleType="none" spacing={3}>
              <Text fontWeight="semibold" fontSize="18px">
                MY ACCOUNT
              </Text>
              <ListItem>Sign In Or Sign Up</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>My Auto Refresh</ListItem>
              <ListItem>My Love-It List</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <UnorderedList listStyleType="none" spacing={3}>
              <Text fontWeight="semibold" fontSize="18px">
                DISCOVER
              </Text>
              <ListItem>About Us</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Gift Cards</ListItem>
              <ListItem>Shop By Fragrance</ListItem>
              <ListItem>Product Ingradients</ListItem>
              <ListItem>Get Inspired</ListItem>
              <ListItem>Diversity, Equity & Inclusion</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <UnorderedList listStyleType="none" spacing={3}>
              <Text fontWeight="semibold" fontSize="18px">
                FIND US
              </Text>
              <ListItem>Store Locator</ListItem>
              <ListItem>Global Locations</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
        <Flex justify="flex-end" p={5}>
          <Img
            w="400px"
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
          />
        </Flex>
        <Box height="100px" mt={25}>
          <SimpleGrid columns={[1, 3, 7]}>
            <Button variant="link" fontSize="14px">
              Terms Of Use
            </Button>
            <Button variant="link" fontSize="14px">
              Privacy Policy
            </Button>
            <Button variant="link" fontSize="14px">
              Security Bug Report
            </Button>
            <Button variant="link" fontSize="14px">
              California Privacy Rights
            </Button>
            <Button variant="link" fontSize="14px" mr={5}>
              Do Not Sell My Personal <br /> Information (California)
            </Button>
            <Button variant="link" fontSize="14px">
              Transparency in Supply Chains
            </Button>
            <Button variant="link" fontSize="14px">
              Ad Preferences
            </Button>
          </SimpleGrid>
          <Text align="center" p={10}>
            © 2022 Bath & Body Works Direct, Inc. All Rights Reserved.
          </Text>
        </Box>
      </>
    );
  }
  
  export default Footer;