import { Box } from '@chakra-ui/react'
import React from 'react'
import { SkillCard } from '../SkillCard/SkillCard'
import { SkillsTitle } from '../SkillsTitle/SkillsTitle'

export const Skills = () => {
  return (
    <Box width={{base:'100%', md:'95%'}} m={'0 auto'} pt={{base:'50px', md:'60px', xl:'0'}} pb={{base:'50px', md:'60px',  xl:'0'}}>
        <SkillsTitle/>
        <SkillCard/>
    </Box>
  )
}