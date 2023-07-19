import { Box,Text} from '@chakra-ui/react'
import React from 'react'

export const AboutTitle = () => {
  return (
    <Box pb={'10rem'} w={{md:'95%'}} m={{md:'0 auto'}}>
        <Box position={'absolute'}>
            <Text as={'h1'} fontSize={'5em'} color={'#f5f5f5'} fontWeight={'bold'}>Sobre mi</Text>
        </Box>

        <Box position={'absolute'} pt={'60px'} pl={'15px'}>
            <Text as={'h2'} fontSize={'1.6em'} color={'#212121'} fontWeight={'bold'}>Sobre mi</Text>
        </Box>

    </Box>
  )
}