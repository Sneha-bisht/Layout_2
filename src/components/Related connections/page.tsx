"use client";
import { Avatar, Box, HStack, Stack, Text, Progress, IconButton, grid } from "@chakra-ui/react";


function Connections() {
  return (
    <Box
      className="p-6 rounded-2xl shadow-md"
      width={448}
      height={292}
      ml="6"
      bg="#F8FAFB"
      mt="5"
    >
   
      <Text as="h3" fontSize="lg" fontWeight="bold" mb="4" mt='7'>
        Related Connections
      </Text>
      <HStack  mt='7' spacing={5} alignItems="center" mb="4" display="grid"> 
        <HStack bgColor={"white"} borderRadius={"24px"} >
          <Avatar
            src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
            name="Brooktyn Simmons"
          />
          <Stack spacing={1}>
            <Text fontWeight="semibold">Brooktyn Simmons</Text>
            <Progress value={50} size="sm" colorScheme="blue" />
          </Stack>
        </HStack>

        <HStack bgColor={"white"} borderRadius={"24px"}>
          <Avatar
            src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
            name="Jerome Bell"
          />
          <Stack spacing={1}>
            <Text fontWeight="semibold">Robert Jones</Text>
            <Progress value={50} size="sm" colorScheme="blue" />
          </Stack>
        </HStack>

        <HStack  bgColor={"white"} borderRadius={"24px"}>
          <Avatar
            src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
            name="Jerome Bell"
          />
          <Stack spacing={1}>
            <Text fontWeight="semibold">Jerome Bell</Text>
            <Progress value={50} size="sm" colorScheme="blue" />
          </Stack>
        </HStack>
       
        
      </HStack>
    </Box>
  );
}

export default Connections;
