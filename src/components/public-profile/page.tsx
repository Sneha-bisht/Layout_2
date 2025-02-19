"use client"
import { Avatar, Button, CircularProgress, Tag, Box, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaTwitter } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <Box className="ml-2 p-6 bg-white shadow-md rounded-lg border border-gray-200" width={670} height={384}>
      <VStack spacing={4} align="start">
        <HStack spacing={3} align="center">
          <Avatar name="Jessica Williamson" src="/path-to-image.jpg" size="lg" />
          <Box>
            <Text fontSize="lg" fontWeight="bold">Jessica Williamson</Text>
            <Tag size="sm" colorScheme="yellow">Unclaimed Profile</Tag>
          </Box>
        </HStack>
        
        <Button colorScheme="blue" borderRadius={20} width="full">Send Invitation</Button>
        
        <HStack width="full" spacing={3} align="center" px='4px'py='6px' className="p-2 bg-gray-100 rounded-md">
          <EmailIcon color="blue.500" />
          <Text>jessicawilliamsons@toms.com</Text>
        </HStack>
        
        <HStack width="full" spacing={3} align="center" className="p-2 bg-gray-100 rounded-md">
          <Icon as={FaTwitter} color="blue.500" />
          <Text>@jessicawilliamson</Text>
        </HStack>
        
        <HStack width="full" spacing={3} align="center" className="p-2 bg-gray-100 rounded-md">
          <PhoneIcon color="blue.500" />
          <Text>01 (564) 3789792</Text>
        </HStack>
        
        <HStack justify="center" width="full" mt={3}>
          <CircularProgress value={74} size="50px" color="white.400" thickness="8px" />
          <Text fontSize="sm">74/100</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
