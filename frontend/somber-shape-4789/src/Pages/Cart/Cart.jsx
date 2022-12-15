import React from 'react'
import { ArrowBackIcon, Icon } from "@chakra-ui/icons"
import { Box, Button, Center, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Cart() {

    const [data, setData] = useState(false)

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
        // setTimeout(() => {
        //     setData(true)
        // }, 5000);
    })

    return (
        <>
            <Link>
                <Flex w="95%" margin="auto" wrap="wrap" direction={"row"}>
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
            <Flex w={["95%", "70%", "70%"]} margin={"auto"}>
                {
                    (data) ?
                        <h1>This is {data.toString()}</h1>
                        :
                        <VStack
                            w={"100%"}
                            margin={"auto"}>
                            <Text
                                fontSize='xl'>
                                Your Shopping Bag is Empty
                            </Text>
                            <Box bg='black' w='100%' p={0.2} color='white'></Box>
                            <Image
                                boxSize='100px'
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
