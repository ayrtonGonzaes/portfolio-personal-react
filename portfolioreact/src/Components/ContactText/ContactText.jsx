import React from 'react'
import {Box,Text,Link} from '@chakra-ui/react'

export const ContactText = () => {
  return (
    <Box w={{xl:'80%'}}>
        <Text color={'#404040'}>Luego de trabajar en distintos proyectos, pude experimentar las dificultades que muchas personas suelen sufrir. Por eso siempre estoy a disposicion de cada persona que necesita ayuda, ya sea alguna duda sobre conociminetos teoricos y necesidades especificas de algun proyecto.</Text>
        <br />
        <br />
        <Text color={'#404040'}>Para poder contactarme, solo dejame un mensaje a mi mail personal y yo lo respondere lo mas rapido posible.</Text>
        <br />
        <br />
        <Text>Mi mail es:</Text>
        <Link textDecoration={'none'} color={'#212121'} transition={['all', '.3s', 'ease']} _hover={{color:'#404040', textDecoration:'underline', transition:'all .3s ease'}}  href="mailto:ayrtongonzales-2003@outlook.com">ayrtongonzales-2003@outlook.com</Link>
    </Box>
  )
}
