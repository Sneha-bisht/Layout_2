import { Box,Flex,Input,Text } from "@chakra-ui/react"
import Profile from "../public-profile/page"
import MutualInfo from "../Mutual-info/page"
import PrivateNotes from "../Private-Notes/page"
import ActivityFeed from "../Activity Feed/page"
import Connections from "../Related connections/page"



function MiddleSection() {
  return (
        <Box margin='auto' padding={3} bgColor='white' border='1px solid #EAEAEA'>
        <Flex justifyContent={"space-between"}>
         <Text className="cont-name">Contact:<span>Jessica Williamson</span></Text>
          <input type="text"placeholder="Search" ></input>
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
