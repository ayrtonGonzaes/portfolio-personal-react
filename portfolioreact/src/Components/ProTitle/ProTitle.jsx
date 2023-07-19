import { Box,Text } from '@chakra-ui/react'
import React from 'react'

export const ProTitle = () => {
  return (

    <Box pb={'10rem'} w={{md:'95%'}} m={{md:'0 auto'}}>
        <Box>
            <Text as={'h1'} position={'absolute'} fontSize={'5em'} color={'#f5f5f5'} fontWeight={'bold'}>Proyectos</Text>
        </Box>

        <Box>
            <Text as={'h2'} position={'absolute'} pt={'50px'} pl={'15px'} fontSize={'2em'} color={'#212121'} fontWeight={'bold'}>Proyectos</Text>
        </Box>
    </Box>
  )
}