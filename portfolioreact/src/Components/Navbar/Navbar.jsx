import React from 'react'
import {Button, Icon, Link, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'



export const Navbar = () => {


  return (

      <Menu>

          {({isOpen}) => (
            <>
            <MenuButton display={{base:'flex', md:'none'}} border={'0'} fontSize={'2em'} bg={'transparent'} cursor={'pointer'} color={'#212121'}  _hover={{bg:'transparent'}} isActive={isOpen} as={Button}
            > {isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i> }</MenuButton>

            <MenuList display={'flex'} flexDirection={'column'} alignItems={'end'} bg={'#212121'} p={['20px']} gap={'1rem'} transition={['all .2s ease']} height={'100vh'} boxShadow={['0 0 0 100vmax rgba(0,0,0, .5)' ]}>
                <MenuItem bg={'#212121'}><Link textDecoration={'none'} color={'#f8f8f8'} fontWeight={'bold'} transition={['all .3s ease']}_hover ={{color:'#404040'}} href='#hero'>Inicio</Link></MenuItem>
                <MenuItem bg={'#212121'}><Link textDecoration={'none'} color={'#f8f8f8'} fontWeight={'bold'} transition={['all .3s ease']}  _hover ={{color:'#404040'}} href='#projects'>Proyecto</Link></MenuItem>
                <MenuItem bg={'#212121'}><Link textDecoration={'none'} color={'#f8f8f8'} fontWeight={'bold'} transition={['all .3s ease']}  _hover ={{color:'#404040'}} href='#skills'>Habilidades</Link></MenuItem>
                <MenuItem bg={'#212121'}><Link textDecoration={'none'} color={'#f8f8f8'} fontWeight={'bold'} transition={['all .3s ease']}  _hover ={{color:'#404040'}} href='#about' >Sobre Mi</Link></MenuItem>
                <MenuItem bg={'#212121'}><Link textDecoration={'none'} color={'#f8f8f8'} fontWeight={'bold'} transition={['all .3s ease']} _hover ={{color:'#404040'}} href='#contact'>Contacto</Link></MenuItem>
            </MenuList>
            </>
          )
          }

      </Menu>
      )
  }