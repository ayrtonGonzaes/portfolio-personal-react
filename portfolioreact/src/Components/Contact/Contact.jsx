import React from 'react'
import {ContactTitle} from '../ContactTitle/ContactTitle'
import {ContactText} from '../ContactText/ContactText'
import {ContactForm} from '../ContactForm/ContactForm'
import {Box} from '@chakra-ui/react'

export const Contact = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'5rem'} mt={'4rem'}>

        <ContactTitle/>

        <Box width={'95%'} m={'0 auto'} display={{xl:'flex'}} justifyContent={{xl:'space-between'}} alignItems={{xl:'center'}} gap={{xl:'5rem'}}>

            <ContactText/>
            

            <ContactForm/>

        </Box>


    </Box>
  )
}
