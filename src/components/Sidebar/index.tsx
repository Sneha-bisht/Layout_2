"use client"
import { Box, Icon, Text, VStack ,HStack} from "@chakra-ui/react";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FaFolderOpen, FaAddressBook, FaCalendarAlt} from "react-icons/fa";

function Sidebar() {
  return (
    <Box w='250px' bg="#ffffff" shadow="md" minH="100vh" border-right='1px solid grey' >
      <Text className="Dossy" p='10'>
        Dossy
      </Text>
      <VStack spacing={4} align="stretch" px='4'>
        <Box py='8px'px='12px' bg="#F8FAFB" borderRadius="md" cursor="pointer">
        <HStack spacing={3}>
        <Icon as={AiFillDashboard} color="gray.700" />
          <Text color="gray.900">Dashboard</Text>
          </HStack>
        </Box>
        <Box py='8px'px='12px' bg="#F8FAFB" borderRadius="md" cursor="pointer">
        <HStack spacing={3}>
        <Icon as={FaFolderOpen} color="gray.700" />
          <Text color="gray.900">My Dossiers</Text>
          </HStack>
        </Box>
        <Box py='8px'px='12px' bg="#F8FAFB" borderRadius="md" cursor="pointer">
        <HStack spacing={3}>
        <Icon as={FaAddressBook} color="gray.700" />
          <Text color="gray.900">All Contacts</Text>
          </HStack>
        </Box>
        <Box py='8px'px='12px' bg="#F8FAFB" borderRadius="md" cursor="pointer">
        <HStack spacing={3}>
        <Icon as={FaCalendarAlt} color="gray.700" />
          <Text color="gray.900">Events</Text>
          </HStack>
        </Box>

        <Icon as={IoMdSettings} color="#008ED6" height='20px'width='20px' mt="400px"  alignSelf={'center'}/>
      </VStack>
    </Box>
  );
}

export default Sidebar;
