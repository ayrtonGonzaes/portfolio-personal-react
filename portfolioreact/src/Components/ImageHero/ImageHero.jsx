import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import ImagenPrincipal from '../../assets/imagen_principal.png'

export const ImageHero = () => {
  return (
    <Box>
        <Image src={ImagenPrincipal}></Image>
    </Box>
  )
}