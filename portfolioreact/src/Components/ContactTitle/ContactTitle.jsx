import { Box,Text } from '@chakra-ui/react'
import React from 'react'

export const ContactTitle = () => {
  return (
    <Box w={{md:'95%', xl:'95%'}} m={{md:'0 auto', xl:'0 auto'}} pb={'5rem'}>

        <Box position={'absolute'}>
            <Text as={'h1'} fontSize={'5em'} color={'#f5f5f5'} fontWeight={'bold'}>Contacto</Text>
        </Box>

        <Box position={'absolute'} pt={'60px'} pl={'15px'}>
            <Text as={'h2'} fontSize={'1.6em'} color={'#212121'} fontWeight={'bold'}>Contacto</Text>
        </Box>

    </Box>

  )
}