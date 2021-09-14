import { Img, useToken } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
    <Img
      // w="10"
      h="10"
      alt="Logo"
      src='https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png' />

  )
}