import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, Text, Image, ModalCloseButton, FormLabel, Heading, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure, Select, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { BsStarFill } from 'react-icons/bs';
import styles from '../../Pages/SingleProduct/SingleProduct.module.css'

export default function Review({ reviews, product_id }) {

    const [isSpin, setIsSpin] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [review_rating, setReview_rating] = useState('');
    const [review_title, setReview_title] = useState('')
    const [review_desc, setReview_desc] = useState('');
    const toast = useToast();

    const HandleReview = () => {
        if (review_rating, review_title, review_desc) {
            const payload = {
                review_rating,
                review_title,
                review_desc,
                product_id: product_id,
                user_id: "639d890ea37380e5db53d3cc"
            }

            axios.post(`http://localhost:8080/reviews/write`, payload)
                .then((r) => {
                    console.log(r)
                    toast({
                        title: "Done",
                        description: "Review Written Successfully",
                        status: "success",
                        position: "top",
                        duration: 2500,
                        isClosable: true,
                    });
                    axios.get(`http://localhost:8080/reviews/639c384f84de39215c174e07`)
                        .then(async (r) => {

                        })
                        .catch((e) => {
                            console.log(e)
                        })
                    setTimeout(() => {
                        onClose()
                        setReview_rating('')
                        setReview_title('')
                        setReview_desc('')
                    }, 2000);
                })
                .catch((e) => {
                    console.log(e)
                    toast({
                        title: "Error",
                        description: "Something Went Wrong",
                        status: "error",
                        position: "top",
                        duration: 2500,
                        isClosable: true,
                    });
                })
        } else {
            toast({
                title: "Error",
                description: "Something is missing",
                status: "error",
                position: "top",
                duration: 2500,
                isClosable: true,
            });
        }
    }



    return (
        <>
            <Box id={styles.headDiv}>
                <Heading fontSize='24px' color='#333333' fontWeight='400'>Reviews</Heading>
                <Button id={styles.writeReviewButton}
                    h='34px'
                    backgroundColor='#333333'
                    color='#FFFFFF'
                    borderRadius=''
                    fontSize='12px'
                    letterSpacing='0.6px'
                    onClick={() => {
                        setIsSpin(true)
                        setTimeout(() => {
                            setIsSpin(false)
                            onOpen()
                        }, 1500);
                    }}
                >WRITE A REVIEW</Button>
                {
                    isSpin ? <Spinner
                        position='fixed'
                        right='50%'
                        top='50%'
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                        : ""
                }
            </Box>

            <Box id={styles.reviews}>
                <Box id={styles.reviewHead}>
                    <Text>{reviews.length} Reviews</Text>
                </Box>
                {
                    reviews.length > 0 && reviews.map((rev) => {
                        return <Box key={rev._id} className={styles.singleReviewDiv} >
                            <Box display='flex' alignItems={'center'}>
                                <Box display='flex'>
                                    {
                                        new Array(rev.review_rating).fill("").map((_, i) => <Box mr='2px' key={i + 1}><BsStarFill color='#F0D520' /></Box>)
                                    }
                                    {
                                        new Array(5 - rev.review_rating).fill("").map((_, i) => <Box mr='2px' key={i + 1}><BsStarFill color='#dcdcdc' /></Box>)
                                    }
                                </Box>
                                <Box>
                                    {
                                        reviews.length > 0 && <Text ml='10px'>{`${rev.user_id.first_name} ${rev.user_id.last_name}`}</Text>
                                    }
                                </Box>
                            </Box>
                            <Box>
                                <Text fontSize='14px' mt='10px' fontWeight='600' >{rev.review_title}</Text>
                            </Box>
                            <Box>
                                <Text fontSize='16px' mt='10px' mb='20px'>{rev.review_desc}</Text>
                            </Box>
                        </Box>
                    })
                }
            </Box>

            <Box>
                <Modal isOpen={isOpen} isCentered size={'xl'} onClose={() => {
                    onClose()
                    setReview_title('')
                    setReview_desc('')
                    setReview_rating('')
                }}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader display='flex' justifyContent='center'>
                            <Text fontSize='20px' color='#333333' >My Review for Dream Bright Fine Fragrance Mist</Text>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                                <Select w='80%' m='auto' mb='20px' value={review_rating} onChange={(e) => setReview_rating(e.target.value)} placeholder='Choose Review Rating'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Select>
                                <Input w='80%' display='block' m='auto' mb='20px' placeholder='Enter Review Title' value={review_title} onChange={(e) => setReview_title(e.target.value)} />
                                <Input w='80%' display='block' m='auto' mb='20px' placeholder='Enter Review Description' value={review_desc} onChange={(e) => setReview_desc(e.target.value)} />
                                <Button display='block' m='auto' mb='30px' onClick={() => HandleReview()} >SUBMIT REVIEW</Button>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </>

    )
}
