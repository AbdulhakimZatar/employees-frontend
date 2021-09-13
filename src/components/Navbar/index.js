import { Box, VisuallyHidden, Img, Flex, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
// import { NavContent } from './NavContent'

export default function Navbar(props) {
  return (
    <Box minHeight='64px' mt='10px' as="header" position="relative" zIndex="10">
      <Box
        as="nav"
        aria-label="Main navigation"
        maxW="7xl"
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Flex className="nav-content__desktop" align="center" justify="center" {...props}>
          <Box as="a" href="#" rel="home">
            <VisuallyHidden>Envelope</VisuallyHidden>
            <Img
              // objectFit="cover"
              // htmlWidth="160px"
              // htmlHeight="160px"
              w="10"
              h="10"
              alt="Logo"
              src='https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png' />
          </Box>


        </Flex>
      </Box>
    </Box>
  )
}
