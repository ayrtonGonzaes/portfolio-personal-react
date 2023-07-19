import React from 'react'
import {Box,Text } from '@chakra-ui/react'

export const HeroTitle = () => {

  const styleTitle = {
    fontSize:35,
    color:'#212121',
    fontWeight:'bold'
  }

  return (
    <Box>
        <Text as={'h1'} sx={styleTitle}>Hola, soy Ayrton Gonzales.</Text>
  
        <Text as={'h1'} sx={styleTitle}>Desarrollador Web Front-End</Text>
    </Box>
  )
}
