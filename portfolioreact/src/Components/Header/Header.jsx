import { Nav } from '../Nav/Nav'
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Box } from '@chakra-ui/react'

export const Header = () => {

  return (
    <Box as='Header' display={'flex'} justifyContent={{base:'space-between', md:'center'}} p={['20px']} position={'fixed'} top={'0'} left={'0'} width={'100%'} height={{base:'3.6rem' ,md:'70px'}} zIndex={'999'} bg={'#fff'}>

          <Box></Box>

          <Nav></Nav>

          <Navbar></Navbar>

    </Box>
  )
}