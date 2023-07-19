import { Box } from '@chakra-ui/react'
import React from 'react'
import {AboutTitle} from '../AboutTitle/AboutTitle'
import {AboutText} from '../AboutText/AboutText'
import {AboutImage} from '../AboutImage/AboutImage'
import {AboutButton} from '../AboutButton/AboutButton'


export const About = () => {
  return (
    <Box w={{base:'100%', md:'100%', xl:'92%'}} m={'0 auto'}>
        
       <AboutTitle/>

        <Box display={'flex'} flexDirection={{base:'column', md:'row-reverse'}}
        gap={{md:'4rem'}} justifyContent={{base:'center', md:'center', xl:'space-between'}} alignItems={'center'} w={{xl:'97%'}} m={{xl:'0 auto'}}>
            <AboutImage/>

            <Box w={{base:'95%'}} m={{base:'0 auto'}} pl={{md:'22px'}}>
                <AboutText/>
                <AboutButton/>
            </Box>
        </Box>


    </Box>
  )
}
