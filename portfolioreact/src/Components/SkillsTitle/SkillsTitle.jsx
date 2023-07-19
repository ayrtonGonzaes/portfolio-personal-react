import React from 'react'
import {Box,Text} from '@chakra-ui/react'

export const SkillsTitle = () => {
  return (
    <Box pb={'10rem'}>

        <Box position={'absolute'}>
            <Text as={'h1'} fontSize={'5em'} color={'#f5f5f5'} fontWeight={'bold'}>Mis Habilidades </Text>
        </Box>

        <Box position={'absolute'} pt={'50px'} pl={'15px'}>
            <Text as={'h2'} fontSize={'2em'} color={'#212121'} fontWeight={'bold'}>Mis Habilidades</Text>
        </Box>

    </Box>
  )
}
