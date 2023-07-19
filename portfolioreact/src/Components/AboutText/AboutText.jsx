import { Box,Text,UnorderedList,ListItem } from '@chakra-ui/react'
import React from 'react'

export const AboutText = () => {
  return (
    <Box >
        <Text pt={'20px'} pb={'20px'}>Mi nombre es <b>Ayrton Gonzales</b> y actualmente soy un <b>estudiante del curso de desarrollo web Full Stack</b>, pero actualmente trabajo como <b>desarrollador Front-End.</b></Text>

        <Text pt={'20px'} pb={'20px'}>A lo largo de mi experiencia estudiantil e logrado <b>desarrollar diferentes habilidades</b> que pueden ser de mucha utilidad en tus proyectos:</Text>

        <UnorderedList width={'90%'} m={'0 auto'} p={'30px'}>
            <ListItem>Desarrollo de sitios web.</ListItem>
            <ListItem>Conocimientos avanzados de HTML.    </ListItem>
            <ListItem>Conocimientos intermedios de CSS.</ListItem>
            <ListItem>Manejo de Medias Querys.</ListItem>
            <ListItem>Conocimientos intermedios de Java Script.</ListItem>
            <ListItem>Conocimientos basicos de React JS.</ListItem>
        </UnorderedList>
      </Box>
  )
}