import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, Flex, FormControl, FormLabel, Input, Radio, RadioGroup, Select, Stack, Text, VStack } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Address = () => {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [country, setcountry] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [zip, setzip] = useState("")
    const [phone, setphone] = useState("")
    const [shipping, setshipping] = useState("1")
    const [tabIndex, setTabIndex] = useState(0)

    const handleclick = () => {
        let obj = {
            fullname: firstname + " " + lastname,
            address: address1 + " " + address2,
            country: country,
            city: city,
            state: state,
            shipping: shipping
        }
        console.log(obj);
        setTabIndex(1)
    }

    const handlecheckout = () =>{
        setTabIndex(2)
    }

    let statedata = [{ "code": "AN", "name": "Andaman and Nicobar Islands" },
    { "code": "AP", "name": "Andhra Pradesh" },
    { "code": "AR", "name": "Arunachal Pradesh" },
    { "code": "AS", "name": "Assam" },
    { "code": "BR", "name": "Bihar" },
    { "code": "CG", "name": "Chandigarh" },
    { "code": "CH", "name": "Chhattisgarh" },
    { "code": "DH", "name": "Dadra and Nagar Haveli" },
    { "code": "DD", "name": "Daman and Diu" },
    { "code": "DL", "name": "Delhi" },
    { "code": "GA", "name": "Goa" },
    { "code": "GJ", "name": "Gujarat" },
    { "code": "HR", "name": "Haryana" },
    { "code": "HP", "name": "Himachal Pradesh" },
    { "code": "JK", "name": "Jammu and Kashmir" },
    { "code": "JH", "name": "Jharkhand" },
    { "code": "KA", "name": "Karnataka" },
    { "code": "KL", "name": "Kerala" },
    { "code": "LD", "name": "Lakshadweep" },
    { "code": "MP", "name": "Madhya Pradesh" },
    { "code": "MH", "name": "Maharashtra" },
    { "code": "MN", "name": "Manipur" },
    { "code": "ML", "name": "Meghalaya" },
    { "code": "MZ", "name": "Mizoram" },
    { "code": "NL", "name": "Nagaland" },
    { "code": "OR", "name": "Odisha" },
    { "code": "PY", "name": "Puducherry" },
    { "code": "PB", "name": "Punjab" },
    { "code": "RJ", "name": "Rajasthan" },
    { "code": "SK", "name": "Sikkim" },
    { "code": "TN", "name": "Tamil Nadu" },
    { "code": "TS", "name": "Telangana" },
    { "code": "TR", "name": "Tripura" },
    { "code": "UK", "name": "Uttarakhand" },
    { "code": "UP", "name": "Uttar Pradesh" },
    { "code": "WB", "name": "West Bengal" }]

    return (
        <>
            <Tabs width="80%" margin="auto" variant='soft-rounded' isFitted colorScheme='green' align='center' index={tabIndex}>
                <TabList w={"50%"}>
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                    <Tab>3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex direction={["column", "column", "row"]} w={"100%"}>
                            <VStack w={["100%","55%"]} m="auto">
                                <Text marginTop={"10px"}>SHIPPING ADDRESS</Text>
                                <FormControl >
                                    <FormLabel>First Name</FormLabel>
                                    <Input type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                    <FormLabel marginTop={5}>Last address</FormLabel>
                                    <Input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                    <FormLabel marginTop={5}>Address 1</FormLabel>
                                    <Input type='text' value={address1} onChange={(e) => setAddress1(e.target.value)} />
                                    <FormLabel marginTop={5}>Address 2</FormLabel>
                                    <Input type='text' value={address2} onChange={(e) => setAddress2(e.target.value)} />
                                    <FormLabel marginTop={5}>Country</FormLabel>
                                    <Select placeholder='Select country' value={country} onChange={(e) => setcountry(e.target.value)}>
                                        <option value="india">India</option>
                                    </Select>
                                    <FormLabel marginTop={5}>City</FormLabel>
                                    <Input type='text' value={city} onChange={(e) => setcity(e.target.value)} />
                                    <FormLabel marginTop={5}>State</FormLabel>
                                    <Select placeholder='Select State' value={state} onChange={(e) => setstate(e.target.value)}>
                                        {
                                            statedata.map((elem) => {
                                                return <option key={elem.code}>{elem.name}</option>
                                            })
                                        }
                                    </Select>
                                    <FormLabel marginTop={5}>Zip Code</FormLabel>
                                    <Input type='number' value={zip} onChange={(e) => setzip(e.target.value)} />
                                    <FormLabel marginTop={5}>Phone</FormLabel>
                                    <Input type='tel' value={phone} onChange={(e) => setphone(e.target.value)} />
                                    <Flex direction={"column"} marginTop={5}>
                                        <Text align={"left"}>SHIPPING METHOD</Text>
                                        <RadioGroup defaultValue={shipping}>
                                            <Stack spacing={4} marginTop={5}>
                                                <Radio value='1' onChange={(e) => setshipping(e.target.value)}>
                                                    Standard $6.99
                                                </Radio>
                                                <Radio value='2' onChange={(e) => setshipping(e.target.value)}>
                                                    Expedited $15.99
                                                </Radio>
                                                <Radio value='3' onChange={(e) => setshipping(e.target.value)}>
                                                    Overnight $20.99
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Flex>
                                    <Text marginTop={5}>Please Complete all form fields before continuing</Text>
                                    <Button
                                        onClick={handleclick}
                                        mt={4}
                                        colorScheme='teal'
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </FormControl>
                            </VStack>
                            <VStack w={"40%"} m="auto" background={"Green"}>
                                <Text>SHIPPING ADDRESS</Text>
                            </VStack>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <div className="mainscreen">
                            <div className="card">
                                <div className="leftside">
                                    <img src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png" className="product" alt="Shoes" />
                                </div>
                                <div className="rightside">
                                    <form>
                                        <h1>CheckOut</h1>
                                        <h2>Payment Information</h2>
                                        <p>Cardholder Name</p>
                                        <input type="text" className="inputbox" name="name" required />
                                        <p>Card Number</p>
                                        <input type="number" className="inputbox" name="card_number" id="card_number" required />
                                        <p>Card Type</p>
                                        <select className="inputbox" name="card_type" id="card_type" required>
                                            <option value>--Select a Card Type--</option>
                                            <option value="Visa">Visa</option>
                                            <option value="RuPay">RuPay</option>
                                            <option value="MasterCard">MasterCard</option>
                                        </select>
                                        <div className="expcvv">
                                            <p className="expcvv_text">Expiry</p>
                                            <input type="date" className="inputbox" name="exp_date" id="exp_date" required />
                                            <p className="expcvv_text2">CVV</p>
                                            <input type="password" className="inputbox" name="cvv" id="cvv" required />
                                        </div>
                                        <p />
                                        <button type="submit" className="button" onClick={handlecheckout}>CheckOut</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Box textAlign="center" py={10} px={6}>
                            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                            <Heading as="h2" size="xl" mt={6} mb={2}>
                                Order Successfull Placed
                            </Heading>
                            <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.
                            </Text>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </>
    );
};

export default Address;