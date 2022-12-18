import React, { useState, useEffect } from 'react'
import { BsInstagram, BsStarFill, BsTwitter } from 'react-icons/bs'
import { FaHeart, FaPinterestP, FaRegHeart } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { useParams } from 'react-router-dom'
import styles from './SingleProduct.module.css'
import Pickup from '../../Components/SingleProduct/Pickup'
import Review from '../../Components/SingleProduct/Review'
import { backend_url } from '../../Utils/backendURL'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Image, ListItem, Radio, RadioGroup, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { useMediaQuery } from '@chakra-ui/react'

export default function SingleProduct() {
    const [value, setValue] = useState('1')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [wishlist, setWishlist] = useState(false)
    const [reviews, setReview] = useState([]);
    const params = useParams();
    const [product, setProduct] = useState({})
    const [isMobile] = useMediaQuery('(min-width: 320px)')
    const [isTablet] = useMediaQuery('(min-width: 769px)')

    useEffect(() => {
        axios.get(`${backend_url}/products/single/${params.id}`)
            .then((r) => {
                setProduct(r.data)
            })
            .catch((e) => {
                console.log(e)
            })

        axios.get(`${backend_url}/reviews/${params.id}`)
            .then(async (r) => {
                if (r.data.msg) {
                    setReview([])
                } else {
                    setReview(r.data);
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }, [params.id])

    return (
        <Box id={styles.mainDiv}>
            {(product && Object.keys(product).length > 0) ? <Box>
                <Box id={styles.topDiv}>
                    <Box id={styles.leftDiv}>
                        <Image id={styles.productImage} src={product.image} alt='product img' />
                        <Box>
                            <Image id={styles.productSmallImage} w='75px' h='100px' mt='10px' src={product.image} alt='product img' />
                            <Box id={styles.heartDiv} onClick={() => setWishlist(!wishlist)}>
                                {wishlist ? <FaHeart fontSize='28px' color='#F12E90' /> : <FaRegHeart fontSize='28px' color='#666666' />}
                            </Box>
                        </Box>
                    </Box>
                    <Box id={styles.rightDiv}>
                        <Box>
                            <Heading id={styles.type} fontSize='14px' fontWeight='350' >{product.category}</Heading>
                            <Heading id={styles.name} fontSize='18px' fontWeight='350' mt='5px' mb='5px' >{product.name}</Heading>
                            <Heading id={styles.type} fontSize='14px' fontWeight='350' mb='10px' >{product.desc}</Heading>

                            <Box id={styles.starBox}>
                                <BsStarFill color='#F0D520' size='20px' />
                                <BsStarFill color='#F0D520' size='20px' />
                                <BsStarFill color='#F0D520' size='20px' />
                                <BsStarFill color='#F0D520' size='20px' />
                                <BsStarFill color='#F0D520' size='20px' />
                            </Box>

                            <Heading id={styles.price} fontSize='14px' fontWeight='bold' letterSpacing='1px' >${product.price?.toFixed(2)}</Heading>
                            <Heading id={styles.size} fontSize='14px' fontWeight='350'>{product.size} mL</Heading>
                            <Heading id={styles.offer} fontWeight='350'>{product.offer}</Heading>
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
                            <Text id={styles.addToCartButton}>ADD TO BAG</Text>
                        </Box>
                        <Box>
                            <Accordion defaultIndex={[0]} allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' p='10px 0px 10px 0px' color='#333333'>
                                                {product.category?.toUpperCase()}
                                            </Box>
                                            <AccordionIcon fontSize='36px' color='#666666' />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Text fontSize='14px' color='#666666' lineHeight='24px' mb='10px'>{product.desc}</Text>
                                        <Text fontSize='14px' color='#666666' lineHeight='24px'>{product.sub_desc}</Text>
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
                                        <Text fontSize='14px' color='#666666' lineHeight='24px' mb='10px'>Why you'll love it:</Text>
                                        <UnorderedList fontSize='14px' color='#666666'>
                                            <ListItem>The truest way to {product.category}</ListItem>
                                            <ListItem>Designed for great coverage</ListItem>
                                            <ListItem>Made without parabens</ListItem>
                                            <ListItem>Dermatologist tested</ListItem>
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
                    <Review reviews={reviews} product_id={product._id} id={params.id} setReview={setReview} />
                </Box>
            </Box>
                : <Box h='70vh' display='flex' alignItems='center' justifyContent='center' >
                    <Heading color='red' >Product Not Found</Heading>
                </Box>

            }
        </Box >
    )
}
