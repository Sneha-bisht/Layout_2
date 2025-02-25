"use client"
import { Avatar, Button, CircularProgress, Tag, Box, Text, VStack, HStack, Icon, grid } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { CiCircleInfo } from "react-icons/ci";
import { FaTwitter } from 'react-icons/fa';
import { Quicksand } from 'next/font/google';


const PublicProfile = () => {
  return (
    <Box className="ml-2 p-6 bg-white shadow-md rounded-lg border border-gray-200" width={670} height={384} bg='#F8FAFB'>
         <Box w='622px' h='20px' mb='15px' ><Text fontFamily='Quicksand' fontWeight={700}fontSize={"20px"}lineHeight={'20px'} color='#151414'  w='126px'>Public Profile</Text></Box>
       <Box display={'flex'} gap='5' >
          <Avatar name="Jessica Williamson"  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" size="lg" />
          <VStack  align="center" mb='10' gap='2'>
            <Text fontFamily={'Inter'} fontWeight={600}fontSize={'18px'} lineHeight={'18px'} color='#151414'>Jessica Williamson</Text>
            <Tag w='156px' h='25px' ml='3' borderRadius={'full'} mr='5' colorScheme="yellow"> <Icon as={CiCircleInfo} color={'#723B13'} ml='2' mr='2'></Icon>Unclaimed Profile</Tag>
            <Button colorScheme="blue" borderRadius={'full'} width="168px" h="41px"  mr='4px'>Send Invitation</Button> 
        </VStack>
        </Box>
    
     <Box w='622px' h='164px' display={'grid'} px={'10px'} py='10px' alignItems={'center'} m='auto' gap="3">
      <Text px='6' py='4' bg='#FFFFFF' borderRadius={'full'}><EmailIcon color="blue.500" ml='10px' mr='3' />jessicawilliamsons@toms.com</Text>
      <Text px='6' py='4' bg='#FFFFFF' borderRadius={'full'}> <Icon as={FaTwitter} color="blue.500"ml='10px' mr='3'/>@jessicawilliamson</Text>
      <Text px='6' py='4' bg='#FFFFFF' borderRadius={'full'}> <PhoneIcon color="blue.500" ml='10px' mr='3'/>01 (564) 3789792</Text>
      </Box>
     
    </Box>
  );
};

export default PublicProfile;
{/* <HStack justify="center" width="full" mt={3} ml='20'>
          <CircularProgress value={74} size="50px" color="white.400" thickness="8px" />
          <Text fontSize="sm">74/100</Text>
          </HStack> */}