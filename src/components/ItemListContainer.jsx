import { Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
        <Center className='container'>
        <p>{greeting}</p>
        </Center>
  )
}

export default ItemListContainer