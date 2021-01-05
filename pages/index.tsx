import React from 'react'
import Head from 'next/head'

import Header from './components/Header'
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Flex>
          <Box
            backgroundImage="url('assets/imgs/banners/banner_1.png')"
            backgroundPosition="center"
            backgroundRepeat="unset"
            backgroundSize="cover"
            width="100vh"
            height="666px"
          >
            <Header />
            <Box
              justifyContent="center"
              w="215px"
              h="80px"
              top="192px"
              left="25px"
              position="fixed"
            >
              <Heading
                fontFamily="Roboto"
                fontWeight="600"
                fontSize="32px"
                color="#fff"
                lineHeight="40,16px"
                marginBottom="24px"
              >
                Lorem ipsum dolor sit amet
              </Heading>
              <Text
                fontFamily="Roboto"
                fontWeight="normal"
                fontSize="16px"
                color="#fff"
                lineHeight="24px"
                marginBottom="56px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                sollicitudin quis.
              </Text>
              <Button
                backgroundColor="#DDF288"
                w="148px"
                height="40px"
                fontFamily="Roboto"
                fontWeight="400"
                fontSize="16px"
                borderRadius="0px"
                color="#36264D"
              >
                Saiba mais
              </Button>
            </Box>
          </Box>
        </Flex>
      </main>
    </div>
  )
}

export default Home
