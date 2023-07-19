import React from 'react'
import { Button, Link } from '@chakra-ui/react'

export const FooterButton = () => {
  return (
    <Button minW={'130px'} h={'40px'} color={'#f5f5f5'} p={['8px 40px']} fontWeight={'bold'} fontSize={'1em'} cursor={'pointer'} transition={['all 0.3s ease']} position={'relative'} display={'inline-block'} outline={'none'} border={'2px solid #fff'} bg={'#212121'} zIndex={'0'} _hover={{color:'#212121',bg:'#f5f5f5',border:'2px solid #212121'}}
    > <Link _hover={{textDecoration:'none'}} href='#contact'>Contactame <i className="bi bi-arrow-right" ></i></Link></Button>
  )
}