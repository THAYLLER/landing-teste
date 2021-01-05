import React from 'react'
import { Link, Box, Flex, Text, Stack, Img } from '@chakra-ui/react'

import Logo from './Logo'

const NavBar = (props): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Box
        marginRight="30px"
        w="100px"
        color={['white', 'white', 'primary.500', 'primary.500']}
      >
        <Img src="assets/imgs/logo.png" w="124px" h="28px" />
      </Box>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <>
    <title>Close</title>
    <Img src="assets/imgs/close.png" alt="" w="36px" h="36px" />
  </>
)

const MenuIcon = () => (
  <>
    <title>Menu</title>
    <Img src="assets/imgs/bars.png" alt="bars" w="40px" h="40px" />
  </>
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
      bg={['#36264D', 'transparent', 'transparent', 'transparent']}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="!#" isLast>
          Início
        </MenuItem>
        <MenuItem to="!#" isLast>
          Institucional
        </MenuItem>
        <MenuItem to="!#" isLast>
          Soluções
        </MenuItem>
        <MenuItem to="!#" isLast>
          Relaçao com Investidores
        </MenuItem>
        <MenuItem to="!#" isLast>
          Notícias e Eventos
        </MenuItem>
        <MenuItem to="!#" isLast>
          Juse-se ao Time
        </MenuItem>
        <MenuItem to="!#" isLast>
          Login
        </MenuItem>
        <MenuItem to="!#" isLast>
          Abra sua Conta
        </MenuItem>
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="left"
      justify="space-between"
      wrap="wrap"
      w="auto"
      marginTop="32px"
      marginStart="24px"
      marginEnd="30px"
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBar
