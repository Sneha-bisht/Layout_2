"use client"
import { Avatar, Box, HStack, Stack, Text,Flex } from "@chakra-ui/react";
import React from "react";

function MutualInfo() {
  return (
    <Box className="ml-2 p-6 bg-white shadow-md rounded-lg border border-gray-200" width={670} mt='5'>
      <Box className="bg-white mt-2">
        <Text as="h3" className="text" bg='#F8FAFB'>
          Mutual Info
        </Text>
        <Text className="text-2" mt="5" mb="7" bg='#F8FAFB'>
          Relationship Status
        <Text className="para" mt='7'>
          You were introduced to Joseph through <span>Elaine Beams</span> in
          2019. Since then, you and Joseph have spent{" "}
          <span>12 hours in meetings</span> together and{" "}
          <span>14 hours over the phone.</span> You have exchanged
          <span> 73 emails.</span>
        </Text>
        </Text>

        <Box>
          <Text className="text-2" mt="8" mb="7" p='2' >
            Related Contacts
          </Text>
          <HStack mb="6" mx='4' gap="8" display="flex" bg='#F8FAFB' justifyContent="space-between" >
            <HStack>
              <Avatar
                src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
                name="Jerome Bell"
                 />
              <Stack>
                <Text fontWeight="semibold" textStyle="sm" ml='3'>
                  Jerome Bell
                </Text>
                <Box display="Flex" mt='2' justifyContent={'spacebetween'} gap={9}>
                <Box display={'grid'}>
                <Text><span>Email CC</span></Text>
                <Text color='#008ED6'><span>7 times</span></Text>
                </Box>
                <Box display={'grid'} >
                <Text><span>Meetings</span></Text>
                <Text color='#008ED6'><span>2 times</span></Text>
                </Box>
                </Box>
              </Stack>
            </HStack>

            
            <HStack >
              <Avatar
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                name="Robert
                Jones"
              />
              <Stack  mr='7'>
                <Text fontWeight="semibold" textStyle="sm" ml='3'>
                  Robert Jones
                </Text>
                <Box display="Flex"  justifyContent={"space-evenly"} gap='9'>
                <Box display={'grid'}>
                <Text><span>Email CC</span></Text>
                <Text color='#008ED6'><span>7 times</span></Text>
                </Box>
                <Box _disabled={'grid'}>
                <Text><span>Meetings</span></Text>
                <Text color='#008ED6' ><span>2 times</span></Text>
                </Box>
                </Box>
              </Stack>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <Text className="text-2" mt="5" mb="7" p='2' bg='#F8FAFB' >
            Tags
          </Text>
          <Text   display='Flex'justifyContent={"space-evenly"}>
            <Text  py='0.5'px='3' bg='#E6F4FB' borderRadius={"full"}><span>Seinfeld</span></Text>
            <Text  py='0.5'px='3' bg='#E6F4FB' borderRadius={"full"}><span>Friend</span></Text>
            <Text  py='0.5'px='3' bg='#E6F4FB' borderRadius={"full"}><span>Beers</span></Text>
            <Text  py='0.5'px='3' bg='#E6F4FB' borderRadius={"full"}><span>Work</span></Text>
            </Text>
    </Box>
  );
}

export default MutualInfo;
