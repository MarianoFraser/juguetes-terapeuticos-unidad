import React from 'react'
import {Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <Flex className='navBar'>
        <Box>
            Juguetes Maravilla
        </Box>
        <Spacer/>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Filtros
            </MenuButton>
            <MenuList>
                <MenuItem>Juguetes Sensoriales</MenuItem>
                <MenuItem>Motricidad Fina</MenuItem>
                <MenuItem>Ejercicios</MenuItem>
            </MenuList>
        </Menu>
        <Spacer/>
        <Box>
            <CartWidget/>
        </Box>
    </Flex>
  )
}

export default NavBar