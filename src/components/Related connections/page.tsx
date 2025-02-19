"use client";
import { Avatar, Button, Box, HStack, Stack, Text, Progress } from "@chakra-ui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Connections() {
  return (
    <Box
      className="ml-6 p-6 shadow-md rounded-lg border border-gray-200" width={448} height={330} mt='5'bg='#F8FAFB'
    >
      <Text as="h3" fontSize="lg" fontWeight="bold" mb="4" mt='2'>
        Related Connections
      </Text>
      <Stack spacing={4} mt="4">
       
       
        <HStack bgColor={"white"} borderRadius={"24px"} px="4" py="4" spacing={4} align="center">
          <Avatar src="https://images.unsplash.com/photo-1511806754518-53bada35f930" name="Brooktyn Simmons" />
          <Stack spacing={1} flex="1">
            <Text fontWeight="semibold">Brooktyn Simmons</Text>
            <Progress value={70} size="sm" colorScheme="blue" />
          </Stack>
          <HStack spacing={2}>
            <Button height="40px" width="40px" borderRadius="full" p="2" color="#008ED6">
              <MdOutlineRemoveRedEye />
            </Button>
            <Button height="40px" width="40px" borderRadius="full" p="2" color="#008ED6">
              <FaArrowUpRightFromSquare />
            </Button>
          </HStack>
        </HStack>

       
        <HStack bgColor={"white"} borderRadius={"24px"} px="4" py="4" spacing={4} align="center">
          <Avatar src="https://images.unsplash.com/photo-1511806754518-53bada35f930" name="Robert Jones" />
          <Stack spacing={1} flex="1">
            <Text fontWeight="semibold">Robert Jones</Text>
            <Progress value={50} size="sm" colorScheme="blue" />
          </Stack>
          <HStack spacing={2}>
            <Button height="40px" width="40px" borderRadius="full" p="2" color="#008ED6">
              <MdOutlineRemoveRedEye />
            </Button>
            <Button height="40px" width="40px" borderRadius="full" p="2" color="#008ED6">
              <FaArrowUpRightFromSquare />
            </Button>
          </HStack>
        </HStack>

       
        <HStack bgColor={"white"} borderRadius={"24px"} px="4" py="4" spacing={4} align="center">
          <Avatar src="https://images.unsplash.com/photo-1511806754518-53bada35f930" name="Jerome Bell" />
          <Stack spacing={1} flex="1">
            <Text fontWeight="semibold">Jerome Bell</Text>
            <Progress value={50} size="sm" colorScheme="blue" />
          </Stack>
          <HStack spacing={2}>
            <Button height="40px" width="40px" borderRadius="full" p="2" color="#008ED6">
              <MdOutlineRemoveRedEye />
            </Button>
            <Button height="40px" width="40px" borderRadius="full" p="2" color="#008ED6">
              <FaArrowUpRightFromSquare />
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Connections;
