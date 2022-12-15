import { Checkbox, Flex, FormControl, FormLabel, Input, Select, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const AddressSub = () => {

    return (
        <>
            <Flex direction={["column", "column", "row"]} w={"100%"}>
                <VStack w={"55%"} m="auto">
                    <Text>SHIPPING ADDRESS</Text>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input type='text' />
                        <FormLabel>Last address</FormLabel>
                        <Input type='text' />
                        <FormLabel>Address 1</FormLabel>
                        <Input type='text' />
                        <FormLabel>Address 2</FormLabel>
                        <Input type='text' />
                        <FormLabel>Country</FormLabel>
                        <Select placeholder='Select country'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                        <FormLabel>City</FormLabel>
                        <Input type='text' />
                        <FormLabel>State</FormLabel>
                        <Select placeholder='Select country'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                        <FormLabel>Zip Code</FormLabel>
                        <Input type='number' />
                        <FormLabel>Phone</FormLabel>
                        <Input type='tel' />
                        <Checkbox defaultChecked>Use Address for Billing</Checkbox>
                    </FormControl>
                </VStack>
                <VStack w={"40%"} background={"Green"}>
                    <Text>SHIPPING ADDRESS</Text>
                </VStack> 
            </Flex>
        </>
    );
};

export default AddressSub;