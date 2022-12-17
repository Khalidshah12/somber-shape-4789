import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AddressSub = () => {
  return (
    <>
      <Flex direction={["column", "column", "row"]} w={"100%"}>
        <VStack w={"55%"} m="auto">
          <Text>SHIPPING ADDRESS</Text>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" />
            <FormLabel>Last address</FormLabel>
            <Input type="text" />
            <FormLabel>Address 1</FormLabel>
            <Input type="text" />
            <FormLabel>Address 2</FormLabel>
            <Input type="text" />
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormLabel>City</FormLabel>
            <Input type="text" />
            <FormLabel>State</FormLabel>
            <Select placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormLabel>Zip Code</FormLabel>
            <Input type="number" />
            <FormLabel>Phone</FormLabel>
            <Input type="tel" />
            <Flex>
              <Checkbox defaultChecked>Use Address for Billing</Checkbox>
            </Flex>
            <FormLabel>Are you shipping a gift?</FormLabel>
            <RadioGroup defaultValue="2">
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="2" checked>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
            <Flex direction={"column"}>
              <Text align={"left"}>SHIPPING METHOD</Text>
              <RadioGroup defaultValue="1">
                <Stack spacing={4}>
                  <Flex>
                    <Radio value="1">Standard $6.99</Radio>
                  </Flex>
                  <Radio value="2">Expedited $15.99</Radio>
                  <Radio value="3">Overnight $20.99</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </FormControl>
        </VStack>
        <VStack w={"40%"} m="auto" background={"Green"}>
          <Text>SHIPPING ADDRESS</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default AddressSub;
