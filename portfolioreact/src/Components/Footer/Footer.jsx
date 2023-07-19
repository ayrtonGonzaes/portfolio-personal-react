import React from 'react'
import {FooterText} from '../FooterText/FooterText'
import {FooterCopy} from '../FooterCopy/FooterCopy'
import {FooterButton} from '../FooterButton/FooterButton'
import { Box } from '@chakra-ui/react'

export const Footer = () => {
  return (
      <Box as='footer' display={'flex'}
      flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'5rem'} pt={'50px'} pb={'10px'} bg={'#212121'} mt={'5rem'}>
        
        <FooterText/>

        <FooterButton/>

        <FooterCopy/>
      </Box>
  )
}