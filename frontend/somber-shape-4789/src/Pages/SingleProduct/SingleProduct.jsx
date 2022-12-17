import React, { useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Image, ListItem, Radio, RadioGroup, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import styles from './SingleProduct.module.css'
import { BsInstagram, BsStarFill, BsTwitter } from 'react-icons/bs'
import { FaHeart, FaPinterestP, FaRegHeart } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import Pickup from '../../Components/SingleProduct/Pickup'
import Review from '../../Components/SingleProduct/Review'
import { useEffect } from 'react'
import axios from 'axios'
import { backend_url } from '../../Utils/backendURL'

export default function SingleProduct() {
    const [value, setValue] = useState('1')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [wishlist, setWishlist] = useState(false)
    const [reviews, setReview] = useState([])

    const data = {
        "id": "639c384f84de39215c174e07",
        "image": "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4b491d20/crop/026535136_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        "badge": "New Fragrance",
        "name": "Dream Bright",
        "type": "Fine Fragrance Mist",
        "price": "17.50",
        "size": "8 fl oz / 236 mL",
        "offer": "Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE",
        "rating": "491"
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/reviews/639c384f84de39215c174e07`)
            .then(async (r) => {
                setReview(r.data);
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <Box id={styles.mainDiv}>
            <Box id={styles.topDiv}>
                <Box id={styles.leftDiv}>
                    <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw16facf27/hires/026535136.jpg?sh=471&yocs=o_s_' alt='product img' />
                    <Box>
                        <Image w='75px' h='100px' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw16facf27/hires/026535136.jpg?sh=471&yocs=o_s_' alt='product img' />
                        <Box id={styles.heartDiv} onClick={() => setWishlist(!wishlist)}>
                            {wishlist ? <FaHeart fontSize='28px' color='#F12E90' /> : <FaRegHeart fontSize='28px' color='#666666' />}
                        </Box>
                    </Box>
                </Box>
                <Box id={styles.rightDiv}>
                    <Box>
                        <Heading id={styles.name} fontSize='18px' fontWeight='350' >{data.name.toUpperCase()}</Heading>
                        <Heading id={styles.type} fontSize='14px' fontWeight='350' >{data.type}</Heading>
                        <Box id={styles.starBox}>
                            <BsStarFill color='#F0D520' size='20px' />
                            <BsStarFill color='#F0D520' size='20px' />
                            <BsStarFill color='#F0D520' size='20px' />
                            <BsStarFill color='#F0D520' size='20px' />
                            <BsStarFill color='#F0D520' size='20px' />
                        </Box>
                        <Heading id={styles.price} fontSize='14px' fontWeight='bold'>${data.price}</Heading>
                        <Heading id={styles.size} fontSize='14px' fontWeight='350'>{data.size}</Heading>
                        <Heading id={styles.offer} fontWeight='350'>{data.offer}</Heading>
                        <Heading id={styles.detailsModal} fontWeight='350'>Details</Heading>
                    </Box>
                    <Box id={styles.receiveType} >
                        <Heading fontSize='14px' color='#333333' mb='20px' fontWeight='500'>How do you want to receive it?</Heading>
                        <Box display={'flex'}>
                            <RadioGroup onChange={setValue} value={value}>
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
                                        <Radio value='2' onClick={onOpen} >
                                            <Image h='16px' w='32px' alt='delivery vehicle' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671101178428/images/svg-icons/bopis-icon-small.svg?yocs=o_s_' />
                                        </Radio>
                                        <Box ml='10px'>
                                            <Pickup isOpen={isOpen} onOpen={onOpen} onClose={onClose} setValue={setValue} />
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
                    <Box>
                        <Accordion defaultIndex={[0]} allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' p='10px 0px 10px 0px' color='#333333'>
                                            FRAGRANCE
                                        </Box>
                                        <AccordionIcon fontSize='36px' color='#666666' />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text fontSize='14px' color='#666666' lineHeight='24px' mb='10px'>What it smells like: a floral-fruity fragrance dream come true—brilliant, unforgettable and bold.</Text>
                                    <Text fontSize='14px' color='#666666' lineHeight='24px'>Fragrance notes: sapphire berries, night-blooming orchid and crystalized vanilla.</Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' p='10px 0px 10px 0px' color='#333333'>
                                            OVERVIEW
                                        </Box>
                                        <AccordionIcon fontSize='36px' color='#666666' />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text fontSize='14px' color='#666666' lineHeight='24px' mb='10px'>What it does: scents your skin with a light-as-air-mist that's super layerable.</Text>
                                    <Text fontSize='14px' color='#666666' lineHeight='24px' mb='10px'>Why you'll love it:</Text>
                                    <UnorderedList fontSize='14px' color='#666666'>
                                        <ListItem>The truest way to fragrance</ListItem>
                                        <ListItem>Designed for great coverage</ListItem>
                                        <ListItem>Made without parabens</ListItem>
                                        <ListItem>Dermatologist tested</ListItem>
                                        <ListItem>Bottle made with 50% recycled plastic</ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box id={styles.socialIconsMainDiv}>
                        <Box className={styles.socialIconsDiv} id={styles.facebook}>
                            <ImFacebook fontSize='20px' />
                        </Box>
                        <Box className={styles.socialIconsDiv} id={styles.twitter}>
                            <BsTwitter fontSize='20px' />
                        </Box>
                        <Box className={styles.socialIconsDiv} id={styles.instagram}>
                            <BsInstagram fontSize='20px' />
                        </Box>
                        <Box className={styles.socialIconsDiv} id={styles.pinterest}>
                            <FaPinterestP fontSize='20px' />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box id={styles.reviewDiv}>
                <Review reviews={reviews} />
            </Box>
        </Box>
    )
}
