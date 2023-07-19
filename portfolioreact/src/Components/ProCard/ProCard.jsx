import { Box,Image,Text,Button, flexbox, Link } from '@chakra-ui/react'
import React, { useEffect,useState } from 'react'
import info from '../../data/ProCard.json'



export const ProCard = () => {
  
    const [proyectos,setProyectos] = useState([])

    const pedirProyectos = () => {
        return new Promise ((resolve,reject) => {
            resolve (info)
        })
    }

    useEffect(() => {
        pedirProyectos()
            .then((res) => {
                setProyectos(res)
            })
    }, [])

  

    return (

    <Box display={'flex'} flexDirection={'column'} gap={{base:'4rem', md:'0rem'}}>
        {
            proyectos.length > 0 &&

            proyectos.map ((proyecto) => {
                return (
                    <Box display={{md:'flex'}} alignItems={{md:'center'}} p={{md:'100px 0'}} gap={{md:'2rem'}} mb={{md:'0'}} w={{md:'95%'}} m={{md:'0 auto'}}>
                        <Box display={{md:'none'}}>
                            <Image src={proyecto.image}></Image>
                        </Box>

                        <Box display={'flex'} alignItems={'center'} gap={'1.5rem'} p={['15px 0']} w={{base:'95%'}} m={['0 auto']}>
                            <Box>
                                <Text color={'#404040'} display={{md:'none', xl:'block'}}>{proyecto.number}</Text>
                            </Box>
                            <Box>
                                <Text as={'h3'} fontSize={'1.2em'} color={'#212121'} fontWeight={'bold'}>{proyecto.title}</Text>
                                <Text color={'#404040'} display={{xl:'none'}}>{proyecto.description}</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Button minW={'130px'} height={'40px'} color={'#212121'} pt={'10px'} pr={'50px'} pb={'10px'} pl={'10px'} textAlign={'center'} fontWeight={'bold'} fontSize={'1.2em'} cursor={'pointer'} transition={['all','0.3s', 'ease']} position={'relative'} outline={'none'} border={'0px'} borderColor={'#fff'} borderRadius={'none'} bg={{base:'#fff',md:'#fff', xl:'#fff'}}_hover={{bg:'#fff', border:'1px', borderColor:'#212121', transition:'all 0.3s ease'}}> <Link _hover={{textDecoration:'none'}} href={proyecto.link}>Ver proyectos <i className="bi bi-arrow-right"></i></Link></Button>
                        </Box>

                    </Box>
                )
            })
        }
    </Box>
  )
}
