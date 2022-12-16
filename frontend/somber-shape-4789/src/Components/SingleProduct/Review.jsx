import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, Text, Image, ModalCloseButton, FormLabel, Heading, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from '../../Pages/SingleProduct/SingleProduct.module.css'

export default function Review() {

    const [isSpin, setIsSpin] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

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

            <Box>

            </Box>

            <Box>
                <Modal isCentered isOpen={isOpen} onClose={() => {
                    onClose()
                }}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader display='flex' justifyContent='center'>
                            <Image h='23px' w='32px' alt='delivery vehicle' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671101178428/images/svg-icons/bopis-icon-small.svg?yocs=o_s_' />
                            <Text fontSize='16px' color='#005699' ml='10px'>PICK UP IN STORE</Text>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text fontSize='14px' color='#666666'>Set your location. Place your order. We'll have it waiting for you.</Text>
                            <Text fontSize='14px' color='#666666' textAlign='center' textDecoration='underline'>Use my current location</Text>
                        </ModalBody>

                        <ModalFooter>
                            <FormControl>
                                <FormLabel fontSize='14px' color='#333333' fontWeight='normal' >ZIP Code</FormLabel>
                                <InputGroup>
                                    <Input borderRadius='' onChange={() => {

                                    }} />
                                    <InputRightElement

                                        children={<SearchIcon color='#333333' fontSize='20px' _hover={{ color: "blue" }} cursor='pointer' />}
                                    />
                                </InputGroup>
                            </FormControl>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>

    )
}
