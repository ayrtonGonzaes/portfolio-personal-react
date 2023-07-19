import { Box,Button,FormControl,Input,Textarea } from '@chakra-ui/react'
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('service_jt62h63', 'template_x4mf3nn', form.current, 'LnPgGrRtS75SRCYBw')
      .then((result) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tu mensaje se a mandado correctamente :)',
          showConfirmButton: false,
          timer: 1500
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tus datos no son validos :(',
        })
      });
  };


  return (
   <Box bg={'#212121'} pt={'30px'} pb={'30px'} mt={'3rem'} width={{xl:'80%'}} m={{xl:'0 auto'}}>

      <FormControl as={'form'} ref={form} onSubmit={sendEmail} display={'flex'} flexDirection={'column'} width={'88%'} m={'0 auto'} pt={'30px'} pb={'30px'} gap={'1.5rem'}>

          <Input type='text' name='user_name' placeholder='Tu nombre' required color={'#f5f5f5'} borderRadius={'none'} p={'10px'} transition={['all', '0.3s', 'ease']} position={'relative'} display={'inline-block'} outline={'none'} border={'none'} borderBottom={'1px'} borderColor={'#f5f5f5'} bg={'#212121'} _hover={{bg:'#f5f5f5', borderBottom:'1px', borderColor:'#212121' , color:'#212121'}}></Input>

          <Input type='email' name='user_email' placeholder='Tu email' required color={'#f5f5f5'} borderRadius={'none'} p={'10px'} transition={['all', '0.3s', 'ease']} position={'relative'} display={'inline-block'} outline={'none'} border={'none'} borderBottom={'1px'} borderColor={'#f5f5f5'} bg={'#212121'} _hover={{bg:'#f5f5f5', borderBottom:'1px', borderColor:'#212121' , color:'#212121'}}></Input>

          <Textarea name='message' placeholder='Deja tu mensaje' required color={'#f5f5f5'} borderRadius={'none'} p={'10px'} transition={['all', '0.3s', 'ease']} position={'relative'} display={'inline-block'} outline={'none'} border={'none'} borderBottom={'1px'} borderColor={'#f5f5f5'} bg={'#212121'} _hover={{bg:'#f5f5f5', borderBottom:'1px', borderColor:'#212121' , color:'#212121'}}
          ></Textarea>

              <Box display={'flex'} justifyContent={'end'}>

                <Button onClick={sendEmail}  minW={'130px'} height={'40px'} color={'#212121'} p={['5px','10px']} fontWeight={'bold'} fontSize={'1em'} cursor={'pointer'} transition={['all .3s ease']} position={'relative'} outline={'none'} borderRadius={'none'} bg={'#fff'} border={'2px'} borderColor={'#212121'} 
                type='submit' value='Send'
                _hover={{bg:'#212121' , color:'#fff', border:'2px', borderColor:'#fff'}}>Enviar</Button>

              </Box>
      </FormControl>
   </Box>
  )
}