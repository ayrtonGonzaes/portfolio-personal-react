import { Box } from '@chakra-ui/react'
import React from 'react'
import { ProTitle } from '../ProTitle/ProTitle'
import { ProCard } from '../ProCard/ProCard'

export const Projects = () => {
  return (
    <Box w={{base:'100%' , md:'100%','xl':'100%'}} m={'0 auto'} >
        <ProTitle/>

        <ProCard/>
    </Box>
  )
}
