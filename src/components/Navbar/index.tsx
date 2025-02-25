"use client"
import React from "react";
import { Box,Breadcrumb, BreadcrumbItem, BreadcrumbLink, Avatar, Flex, Spacer, Text, Icon } from "@chakra-ui/react";
import MiddleSection from "../Section";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <Box border="1px solid #EAEAEA" bg={"white"} borderRadius='base' p={4} boxShadow="sm">
        <Box  borderRadius='base' px={8} py={3} gap='4'>
        <Flex align="center">
      <Breadcrumb spacing="8px" textColor='#A09F9F' >
        <BreadcrumbItem>
          <BreadcrumbLink href="#"> <Icon as={FaCircleUser} mr='3'></Icon>Account</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" color={"#5A5959"}>Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer />
        <Flex align="center" gap={2}>
          <Avatar size="sm" name="User" src="https://bit.ly/dan-abramov" />
          <Text color="blue.500" cursor="pointer">Sign Out</Text>
        </Flex>
        </Flex>
      </Box>
     </Box>
     <Box>
     <MiddleSection/>
     </Box>
    
      
    </>

  );
};

export default Navbar;
