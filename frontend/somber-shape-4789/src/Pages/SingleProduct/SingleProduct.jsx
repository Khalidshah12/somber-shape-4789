import React, { useState } from 'react'
import { Box, Button, Heading, Image, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import styles from './SingleProduct.module.css'
import { BsStarFill } from 'react-icons/bs'

export default function SingleProduct() {
    const [value, setValue] = useState('')

    const data = {
        "image": "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4b491d20/crop/026535136_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        "badge": "New Fragrance",
        "name": "Dream Bright",
        "type": "Fine Fragrance Mist",
        "price": "17.50",
        "size": "8 fl oz / 236 mL",
        "offer": "Mix & Match Full-Size: Buy 3, Get 1 FREE",
        "rating": "491"
    };


    return (
        <Box id={styles.mainDiv}>
            <Box id={styles.leftDiv}>
                <Image border='1px solid black' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw16facf27/hires/026535136.jpg?sh=471&yocs=o_s_' alt='product img' />
            </Box>
            <Box id={styles.rightDiv}>
                <Box>
                    <Heading id={styles.name} fontSize='18px' fontWeight='350' >{data.name.toUpperCase()}</Heading>
                    <Heading id={styles.type} fontSize='14px' fontWeight='350' >{data.type}</Heading>
                    <Box id={styles.starBox}>
                        <BsStarFill color='gold' size='20px' />
                        <BsStarFill color='gold' size='20px' />
                        <BsStarFill color='gold' size='20px' />
                        <BsStarFill color='gold' size='20px' />
                        <BsStarFill color='gold' size='20px' />
                    </Box>
                    <Heading id={styles.price} fontSize='14px' fontWeight='bold'>${data.price}</Heading>
                    <Heading id={styles.size} fontSize='14px' fontWeight='350'>{data.size}</Heading>
                    <Heading id={styles.offer} fontWeight='350'>{data.offer}</Heading>
                    <Heading id={styles.detailsModal} fontWeight='350'>Details</Heading>
                </Box>
                <Box id={styles.receiveType} >
                    <Heading fontSize='14px' color='#333333' mb='20px' fontWeight='500'>How do you want to receive it?</Heading>
                    <Box display={'flex'}>
                        <RadioGroup defaultValue='1'>
                            <Box>
                                <Box display='flex' alignItems='start' mb='10px'>
                                    <Radio value='1' >
                                        <Image h='16px' w='32px' alt='delivery vehicle' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671101178428/images/svg-icons/bopis-shipping.svg?yocs=o_s_' />
                                    </Radio>
                                    <Box ml='10px' >
                                        <Text fontSize='sm' color='#333333' fontWeight='500'>Ship it</Text>
                                        <Text fontSize='xs' color='#1D6B49'>Available</Text>
                                    </Box>
                                </Box>

                                <Box display='flex' alignItems='start' >
                                    <Radio value='2'>
                                        <Image h='16px' w='32px' alt='delivery vehicle' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671101178428/images/svg-icons/bopis-icon-small.svg?yocs=o_s_' />
                                    </Radio>
                                    <Box ml='10px'>
                                        <Text fontSize='sm' color='#005699 ' fontWeight='500'>Pick Up in Store</Text>
                                        <Text fontSize='xs' pt='5px' textDecoration='underline' color='#333333'>Set Store</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </RadioGroup>
                    </Box>
                </Box>
                <Box id={styles.addToCartDiv} >
                    <Text id={styles.incDecButton} cursor='pointer' fontSize='18px'>-</Text>
                    <Text id={styles.count} fontSize='md' fontWeight='400'>1</Text>
                    <Text id={styles.incDecButton} cursor='pointer' fontSize='18px'>+</Text>
                    <Text id={styles.addToCartButton} fontSize='xs'>ADD TO BAG</Text>
                </Box>
            </Box>
        </Box>
    )
}
