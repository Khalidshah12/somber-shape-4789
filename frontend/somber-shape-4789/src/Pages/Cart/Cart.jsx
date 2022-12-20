import React from 'react'
import { ArrowBackIcon, Icon } from "@chakra-ui/icons"
import { Box, Button, Center, Flex, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addproductrequest, adjustproductrequest, getproductrequest, removeproductrequest } from '../../Redux/CartReducer/action'

import {
    Heading,
    HStack,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import { CartItem } from './Cartitem'
import { CartOrderSummary } from './CartOrderSummary'

export default function Cart() {
    let total = 0

    const [data, setData] = useState(false)

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.CartReducer.cartdata)

    const handleminus = (cartid, prodid) => {
        let obj = {
            cartid: cartid,
            proId: prodid
        }
        // console.log(obj);
        dispatch(adjustproductrequest(obj))
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const images = [
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ];

    useEffect(() => {
        dispatch(getproductrequest())
        // setData(cart)
        console.log(cart);
        for(let i=0;i<cart.length;i++){
            total+=cart[i].product_id.price
        }
        console.log(total);
    }, [cart,total])
    return (
        <>
            <Link>
                <Flex w="95%" margin="auto" wrap="wrap" direction={"row"} marginTop="60px">
                    <Icon
                        as={ArrowBackIcon}
                        w={4}
                        h={6}
                    />
                    <div>&nbsp;</div>
                    <Text as="u"
                        fontSize='l'
                        _hover={{
                            textDecoration: "none"
                        }} >
                        CONTINUE SHOPPING
                    </Text>
                </Flex>
            </Link>
            <Flex w={["95%", "70%", "70%"]} margin={"auto"} marginTop="20px">
                {
                    (cart.length > 0) ?
                        <VStack>
                            <TableContainer width={"100%"}>
                                <Table colorScheme='teal'>
                                    <Thead>
                                        <Tr>
                                            <Th>Item</Th>
                                            <Th>Price</Th>
                                            <Th>QTY</Th>
                                            <Th>Delete</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>

                                        {
                                            cart.map((el) => {
                                                // total+=el.product_id.price
                                                return (
                                                    <Tr>
                                                        <Td>
                                                            <Flex>
                                                                <Image boxSize='150px'
                                                                    src={el.product_id.image[0]}
                                                                    alt='Empty Cart'></Image>
                                                                <VStack align={"right"}>
                                                                    <Text noOfLines={3}>{el.product_id.name}</Text>
                                                                </VStack>
                                                            </Flex>
                                                        </Td>
                                                        <Td>

                                                            ${el.product_id.price}
                                                        </Td>
                                                        <Td>
                                                            <HStack>
                                                                <Button cursor='pointer' fontSize='18px' onClick={() => handleminus(el._id, el.product_id._id)}>-</Button>
                                                                <Text fontSize='md' fontWeight='400'>{el.product_count}</Text>
                                                                <Button cursor='pointer' fontSize='18px' onClick={() => dispatch(addproductrequest(el.product_id._id))}>+</Button>
                                                            </HStack>
                                                        </Td>
                                                        <Td>
                                                            <Button cursor='pointer' fontSize='18px' onClick={() => dispatch(removeproductrequest(el._id))}>Delete</Button>
                                                        </Td>
                                                    </Tr>
                                                )
                                            })
                                        }
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            {
                                cart.map((el) => {
                                    return (
                                        <CartOrderSummary price={total} />
                                    )
                                })
                            }

                        </VStack>
                        // <Box
                        //     maxW={{
                        //         base: '3xl',
                        //         lg: '7xl',
                        //     }}
                        //     mx="auto"
                        //     px={{
                        //         base: '4',
                        //         md: '8',
                        //         lg: '12',
                        //     }}
                        //     py={{
                        //         base: '6',
                        //         md: '8',
                        //         lg: '12',
                        //     }}
                        // >
                        //     <Stack
                        //         direction={{
                        //             base: 'column',
                        //             lg: 'row',
                        //         }}
                        //         align={{
                        //             lg: 'flex-start',
                        //         }}
                        //         spacing={{
                        //             base: '8',
                        //             md: '16',
                        //         }}
                        //     >
                        //         <Stack
                        //             spacing={{
                        //                 base: '8',
                        //                 md: '10',
                        //             }}
                        //             flex="2"
                        //         >
                        //             <Heading fontSize="2xl" fontWeight="extrabold">
                        //                 Shopping Cart (3 items)
                        //             </Heading>

                        //             <Stack spacing="6">
                        //                 {cart.map((item) => (
                        //                     <CartItem key={item.id} {...item} />
                        //                 ))}
                        //             </Stack>
                        //         </Stack>
                        //         <Flex direction="column" align="center" flex="1">
                        //             <CartOrderSummary />
                        //             <HStack mt="6" fontWeight="semibold">
                        //                 <p>or</p>
                        //                 <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
                        //             </HStack>
                        //         </Flex>
                        //     </Stack>
                        // </Box>
                        :
                        <VStack
                            spacing="5"
                            w={"100%"}
                            margin={"auto"}>
                            <Text
                                marginTop={"20px"}
                                fontSize='xl'>
                                Your Shopping Bag is Empty
                            </Text>
                            <Box bg='black' w='100%' p={0.2} color='white'></Box>
                            <Image
                                boxSize='200px'
                                src='https://media2.giphy.com/media/QOlgbF4f0jG3nHyZjd/giphy.webp?cid=ecf05e479votvbg9b8023j3yuuwbozd1zvs4rg7bqej6cv0p&rid=giphy.webp&ct=s'
                                alt='Empty Cart'
                            />
                            <Box margin={"50px"}>
                                <Button
                                    size='sm'
                                    background={"black"}
                                    textColor={"white"}
                                    _hover={{
                                        background: "gray",
                                        textColor: "black"
                                    }}
                                    padding="10px"
                                    margin="-50px"
                                >
                                    CONTINUE SHOPPING
                                </Button>
                            </Box>
                            <Box w={["95%", "70%", "70%"]} padding="10px" boxShadow='xs'>
                                <Carousel
                                    ssr
                                    partialVisbile
                                    itemClass="image-item"
                                    responsive={responsive}
                                    autoPlay
                                >
                                    {
                                        images.map(image => {
                                            return (
                                                <Box>
                                                    <Image
                                                        draggable={false}
                                                        style={{ width: "100%", height: "100%" }}
                                                        src={image}
                                                    />
                                                    <Text>{image}</Text>
                                                </Box>
                                            );
                                        })
                                    }
                                </Carousel>
                            </Box>
                        </VStack>
                }
            </Flex>
        </>
    )
}
