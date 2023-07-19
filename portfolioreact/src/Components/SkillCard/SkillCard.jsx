import { Box,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import info from '../../data/SkillCard.json'

export const SkillCard = () => {
    
    const [infos, setInfos] =useState([])

    const pedirInfo = () => {
        return new Promise ((resolve,reject) => {
            resolve(info)
        })
    }

    useEffect(() => {
        pedirInfo() 
            .then((res) => {
                setInfos(res)
            })
    },[])

  return (
        <Box display={'flex'} flexWrap={'nowrap'} flexDirection={{base:'column', md:'row'}} justifyContent={{base:'center', md:'space-between'}} alignItems={'center'} gap={'4rem'} width={{base:'80%', md:'100%'}} m={'0 auto'} mt={{base:'4rem'}}>
            {
                infos.length > 0 && 

                infos.map ((info) => {
                    return (
                        <Box border={['2px solid #212121']} p={['70px 12px']} m={'2rem'}>
                            <Box display={'flex'} alignItems={'center'} w={'90%'} m={['0 auto']} gap={'2rem '} pb={'30px'}>
                                <Text as={'i'} fontSize={'3.5rem'}><i className='bi bi-laptop development'></i></Text>
                                <Text as={'h3'} color={'#212121'} fontWeight={'bold'} fontSize={'1.6em'}>{info.title}</Text>
                            </Box>

                            <Text color={'#404040'}>{info.description}</Text>
                        </Box>
                    )
                })
            }
        </Box>
      )
    }