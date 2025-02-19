"use client"
import { Box,Flex,Input,Text } from "@chakra-ui/react"
import Profile from "../public-profile/page"
import MutualInfo from "../Mutual-info/page"
import PrivateNotes from "../Private-Notes/page"
import ActivityFeed from "../Activity Feed/page"
import Connections from "../Related connections/page"


function MiddleSection() {
  return (
        <Box margin='auto' padding={3} bgColor='white' border='1px solid #EAEAEA'>
        <Flex justifyContent={"space-between"} ml='3'>
         <Text className="cont-name">Contact:<span>Jessica Williamson</span></Text>
         
        <Input 
          placeholder="Search..." 
          width="386px" 
          height={"52px"}
          border="1px solid #EAEAEA" 
          borderRadius="full" 
          px="3.5px"
          py="4px" 
          mb='2'
          mr='16'
        />
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

export default MiddleSection
