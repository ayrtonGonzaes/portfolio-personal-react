import React from 'react'
import { Button, Link } from '@chakra-ui/react'

export const AboutButton = () => {
  return (
   <Button mt={'2rem'} minW={'130px'} height={'40px'} color={'#212121'} p={['5px','10px']} fontWeight={'bold'} fontSize={'1em'} cursor={'pointer'} transition={['all .3s ease']} position={'relative'} outline={'none'} borderRadius={'none'} bg={'#fff'} border={'2px'} borderColor={'#212121'} _hover={{bg:'#212121' , color:'#fff'}}><Link _hover={{textDecoration:'none'}} href='#contact'>Contacto</Link></Button>
  )
}