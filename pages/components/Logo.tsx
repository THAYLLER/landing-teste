import React from 'react'
import { Box, Text, Img } from '@chakra-ui/react'

const Logo: React.FC = props => {
  return (
    <Box {...props} marginRight="30px">
      <Img src="assets/imgs/logo.png" w="124px" h="28px" />
    </Box>
  )
}

export default Logo
