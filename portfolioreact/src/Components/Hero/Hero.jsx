import React from 'react'
import { HeroTitle } from '../HeroTitle/HeroTitle'
import { TextTitle } from '../TextTitle/TextTitle'
import { Box } from '@chakra-ui/react'
import { ButtonHero } from '../ButtonHero/ButtonHero'
import { ImageHero } from '../ImageHero/ImageHero'
export const Hero = () => {

  

  return (
      <Box display={'flex'} flexDirection={{base:'column', md:'row-reverse'}} justifyContent={{base:'center'}} alignItems={{base:'start' , md:'center'}} gap={'1rem'} height={{base:'100vh' , 'md':'30vh', xl:'80vh'}} mt={{md:'15rem'}} w={{xl:'95%'}} m={{xl:'0 auto'}}>

          <ImageHero/>


          <Box display={'flex'} flexDirection={'column'} gap={'1.5rem'} width={{base:'95%', md:'90%' }} m={'0 auto'} pl={'20px'}>
            <HeroTitle/>
            <TextTitle/>
            <ButtonHero/>

          </Box>
          




      </Box>
  )
}