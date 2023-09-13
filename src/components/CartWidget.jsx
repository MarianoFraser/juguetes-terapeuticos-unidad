import React from 'react'
import carrito from '../assets/carrito.png'
import { Box, Spacer, Flex } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <Flex>
      <Box>
          <img src={carrito} alt="logo carrito" width='50px' height='50px'/>
        </Box>
        <Spacer/>
        <Box>
          <p>0</p>
      </Box>
    </Flex>
  )
}

export default CartWidget