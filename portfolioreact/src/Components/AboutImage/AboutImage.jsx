import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import FotoPersonal from '../../assets/foto-principal.jpg'

export const AboutImage = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pt={'50px'} pb={'50px'}>

      <Image  w={{base:'50%', md:'80%'}} border={['3px solid #212121']} src={FotoPersonal}></Image>
     
    </Box>
  )
}