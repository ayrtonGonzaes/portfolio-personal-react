import React from 'react'
import { Menu,Link, MenuItem, MenuList, Box, Center } from '@chakra-ui/react'


export const Nav = () => {
  return (

    <Box display={{base:'none', md:'flex'}} alignItems={'center'} justifyContent={'center'} gap={'3rem'}>

      <Link href='#hero' color={'#212121'} fontWeight={'bold'} transition={['all .3s ease']} _hover={{color:'#404040', transition:'all .3s ease'}}>Inicio</Link>
      <Link href='#projects' color={'#212121'} fontWeight={'bold'} transition={['all .3s ease']} _hover={{color:'#404040', transition:'all .3s ease'}}>Proyecto</Link>
      <Link href='#skills' color={'#212121'} fontWeight={'bold'} transition={['all .3s ease']} _hover={{color:'#404040', transition:'all .3s ease'}}>Habilidades</Link>
      <Link href='#about' color={'#212121'} fontWeight={'bold'} transition={['all .3s ease']} _hover={{color:'#404040', transition:'all .3s ease'}}>Sobre Mi</Link>
      <Link href='#contact' color={'#212121'} fontWeight={'bold'} transition={['all .3s ease']} _hover={{color:'#404040', transition:'all .3s ease'}}>Contacto</Link>
    </Box>

   )
}