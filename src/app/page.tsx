import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Box } from '@chakra-ui/react'
import React from 'react'



function page() {
  return (
    <Box className='flex'>
      <Box className="sidebar" width={230} backgroundColor='' height='100vh'>
        <Sidebar/>
      </Box>
      <Box className="content" flex={1} backgroundColor='white' height='100vh'>
        <Navbar/>
      </Box>

    </Box>
  )
}

export default page
