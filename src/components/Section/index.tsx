"use client"
import { Box,Flex,Icon,Input,Text } from "@chakra-ui/react"
import Profile from "../Public-Profile"
import MutualInfo from "../Mutual-info"
import PrivateNotes from "../Private-Notes"
import ActivityFeed from "../Activity Feed"
import Connections from "../RConnections"
import { CiSearch } from "react-icons/ci";
import { PiXCircle } from "react-icons/pi"


function Section() {
  return (
    <Box margin='auto' padding={4} bgColor='white' border='1px solid #EAEAEA'>
    <Flex justifyContent={"space-between"} ml='5'>

    <Text className="cont-name">Contact:<span>Jessica Williamson</span></Text>   

   <Box className='relative' w='448px' h='52px'  border='1px solid white' mb='3'>

<Flex>
    <Input type='text' h='52px'w="386px" color='#EAEAEA'  borderRadius="full" placeholder="     Search..." fontWeight={400} fontSize={"16px"}></Input>

    <Icon as={CiSearch} h='16px' w='16px'  color="#5A5959" className="absolute" left={4} top='5'></Icon>
    
    <Box h="52px" w="52px" borderRadius="full" ml='2' color="white" border="2px solid white" shadow="md" position="relative">
  <Icon 
    as={CiSearch} 
    h="20px" 
    w="20px"  
    color="#5A5959" 
    position="absolute" 
    top="50%" 
    right="4" 
    transform="translateY(-50%)"

  />
</Box>



    </Flex>



      </Box>
      {/* <Input w='386px'h='52px'
       border='1px solid grey'
       alignItems={'center'}
       type='text'
       placeholder="Search..." 
       left='0'
       ml='4'
       />
      <Icon as={CiSearch}  color="#17271D" className="absolute" left={2} top='3'></Icon> */}
    
     


       
         </Flex>
         <Flex >
          <Box className="left-side" >
          <Profile/>
          </Box>
          <Box className="right-side">
            <ActivityFeed/>
          </Box>
         </Flex>
         <Flex >
          <Box className="left-side" >
          <MutualInfo/>
          </Box>
          <Box className="right-side">
           <Connections/>
          </Box>
         </Flex>
     
         <PrivateNotes/>
          </Box>
  
    
  )
}

export default Section
