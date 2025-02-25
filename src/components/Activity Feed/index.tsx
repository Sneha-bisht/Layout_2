"use client"
import React from "react";
import { Box, HStack, Text, IconButton } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaCommentDots, FaEye } from "react-icons/fa";

const activities = [
  { date: "17 Apr 2024", type: "Phone Call", icon: <FaPhone /> },
  { date: "19 Apr 2024", type: "Email Thread", icon: <FaEnvelope /> },
  { date: "21 Apr 2024", type: "Text Message", icon: <FaCommentDots /> },
  { date: "22 Apr 2024", type: "Phone Call", icon: <FaPhone /> },
  { date: "24 Apr 2024", type: "Phone Call", icon: <FaPhone /> },
];

const ActivityFeed = () => {
  return (
    <Box className=" p-6 rounded-lg shadow-md w-full max-w-md "width={448} height={381} ml='6'bg='#F8FAFB' >
      <Text className="font-semibold text-lg mb-4">Activity Feed</Text>
      <Box className="space-y-2">
        {activities.map((activity, index) => (
          <HStack
            key={index}
            className="bg-white p-3 rounded-lg shadow-sm justify-between items-center">

           <Text className="text-gray-500 font-medium w-24">{activity.date}</Text>


            <HStack className="bg-gray-100 px-3 py-2 rounded-lg flex-grow">
              <Box className="text-blue-500">{activity.icon}</Box>
              <Text className="text-gray-700 text-sm">{activity.type}</Text>
            </HStack>

            <IconButton
              icon={<FaEye/>}
              className="text-blue-500"
              aria-label="View Activity"
              color='text-blue-500'
            />
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default ActivityFeed;
