import { Img, useColorModeValue, useToken } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  return (
    <Img
      // objectFit="cover"
      // htmlWidth="160px"
      // htmlHeight="160px"
      w="10"
      h="10"
      alt="Logo"
      src='https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png' />
  )
}