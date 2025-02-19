"use client"
import { Icon } from '@chakra-ui/icon';
import { Box,HStack,Text } from '@chakra-ui/react'
import React from 'react'
import { MdSpeakerNotesOff } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

function PrivateNotes() {
  return (
    <Box className="ml-2 p-6  shadow-md rounded-lg border border-gray-200" width={670} mt='5' bg='#F8FAFB'>
    <Box className=" bg=#F8FAFB  p-6">
      <Text as='h2' className="private-notes" mb='4' >Private Notes</Text>
      <Box className="mt-2 space-y-2" bg='#F8FAFB'>
      <HStack width="full" align="center" className="notes" p='2'>
                
                <Text>Notes</Text>
              </HStack>
            <HStack width="full" align="center" className="notes-1"p='2' bg='white'>
                <Icon as={MdSpeakerNotesOff} color="#006598" />
                <Text >Cosmo likes Blueberry ice-cream </Text>
              </HStack>
              <HStack width="full"  align="center" className="notes-1"p='2' bg='white'>
              <Icon as={MdSpeakerNotesOff} color="#006598" />
                <Text>Cosmo likes Blueberry ice-cream</Text>
              </HStack>
              </Box>
    </Box>
    <Box className="p-6 " bg='#F8FAFB'>
      <Text as="h3" className="text-lg font-semibold" mb='4'>Reminder</Text>
      <Box className="mt-2 space-y-2">
      <HStack width="full"  align="center"borderRadius='rounded-2xl' className="p-2 notes-1" bg='white'>
                <Icon as={FaLightbulb} color="#006598"/>
                <Text>Wish Irene Birthday on  12/04/2024</Text>
              </HStack>
              <HStack width="full" align="center" className="p-2 notes-1" bg='white'>
              <Icon as={FaLightbulb} color="#006598"/>
                <Text>Butler's daughter's birthday</Text>
              </HStack>
      </Box>
    </Box>
  </Box>

  )
}

export default PrivateNotes
