import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react';
import Navigation from '../Navigation';
import Header from '../Header';
import Body from '../Body';

const FirstTaskLayout = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
    <Flex h="100vh" w="100%">
      <Flex 
        w={{
          base: '50px',
          lg: open ? '284px' : '72px'
        }} 
        transition="width 750ms ease-in-out" 
        position="relative" 
        flexShrink={0} 
        zIndex={{
          base: 5,
          lg: 1
        }}
      >
        <Navigation open={open} toggleOpen={() => setIsOpen(prevState => !prevState)}/>
      </Flex>
      <Flex 
        // gap={6}
        flexWrap="wrap"
        position="relative"
        zIndex="2"
        overflowX="hidden"
        w="full"
      >
        <Header />
        <Box
          p={{
            base: '3',
            md: '6'
          }}
          pt={{
            base: '0',
            md: '0'
          }}
          h="calc(100% - 80px)"
          overflowY="auto"
          overflowX="hidden"
          w="full"
          >
          <Body open={open} />
        </Box>
      </Flex>
    </Flex>
    </>
  )
}

export default FirstTaskLayout;
