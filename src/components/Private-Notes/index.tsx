"use client"
import { Icon } from '@chakra-ui/icon';
import { Box,HStack,Text } from '@chakra-ui/react'
import React from 'react'
import { SlPlus } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { MdSpeakerNotesOff } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

function PrivateNotes() {
  return (
    <Box className="ml-2 p-6  shadow-md rounded-lg border border-gray-200" width={670} mt='5' bg='#F8FAFB'>
    <Box className=" bg=#F8FAFB  p-6">
      <Text as='h2' className="private-notes" mb='4' >Private Notes</Text>
      <Box className="mt-2 space-y-2" bg='#F8FAFB'>
      <HStack width="full" align="center" className="notes" p='2'>
                
                <Text>Notes<Icon as={SlPlus} ml='490' color='#008ED6' bg='white' ></Icon></Text>
              </HStack>
            <HStack width="full" align="center" className="notes-1"p='2' bg='white' borderRadius={'10px'}>
                <Icon as={MdSpeakerNotesOff} color="#006598" />
                <Text className='span-date' >Cosmo likes Blueberry ice-cream <Icon as={SlCalender} ml='185' mr='2' color='#006598'></Icon><span>12-04-2024</span></Text>
              </HStack>
              <HStack width="full"  align="center" className="notes-1"p='2' bg='white' borderRadius={'10px'}>
              <Icon as={MdSpeakerNotesOff} color="#006598" />
                <Text className='span-date'>Cosmo likes Blueberry ice-cream <Icon as={SlCalender} ml='185' mr='2'color='#006598'></Icon><span>12-04-2024</span></Text>
              </HStack>
              </Box>
    </Box>
    <Box className="p-6 " bg='#F8FAFB'>
      <Text as="h3" className="text-lg font-semibold" mb='4'>Reminder <Icon as={SlPlus} ml='480' color='#008ED6' bg='white' ></Icon></Text>
      <Box className="mt-2 space-y-2">
      <HStack width="full"  align="center"borderRadius='10px' className="p-2 notes-1" bg='white'>
                <Icon as={FaLightbulb} color="#006598"/>
                <Text className='span-date'>Wish Irene Birthday on  12/04/2024 <Icon as={SlCalender} ml='175' mr='2' color='#006598'></Icon><span>12-04-2024</span></Text>
              </HStack>
              <HStack width="full" align="center" className="p-2 notes-1" bg='white' borderRadius={'10px'}>
              <Icon as={FaLightbulb} color="#006598"/>
                <Text className='span-date'>Butler's daughter's birthday <Icon as={SlCalender} ml='230' mr='2' color='#006598'></Icon><span>12-04-2024</span></Text>
              </HStack>
      </Box>
    </Box>
  </Box>

  )
}

export default PrivateNotes
