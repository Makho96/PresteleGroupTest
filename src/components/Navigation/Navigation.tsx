import React, { useCallback, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import NavigationItem from "./NavigationItem";

import { NavigationData, NavigationItemType } from "./data";

import { LogoSvg, LogoExtensionSVG, InfoSvg } from "../../static";

type Props = {
  open: boolean;
  toggleOpen: () => void;
}

const Navigation = (props: Props) => {
  const [navigation, setNavigation] = useState(NavigationData)
  const { open, toggleOpen } = props;
  
  const handleNavClick = useCallback((navItem: NavigationItemType) => {
    if (navItem.clickable) {
      const activeNav = navigation.find(item => item.active)
      if (activeNav && activeNav.id !== navItem.id) return;
      setNavigation((prevState) => [...prevState.map((item) => ({
        ...item,
        active: navItem.id === item.id ? !item.active : item.active
      }))])
      toggleOpen()
    }
  }, [navigation, toggleOpen])

  return (
    <Flex w="full" backgroundColor="#FFF" borderRight="1px" borderColor="dark.200" position="relative" zIndex={5}>
      <Flex w={{
        base: '50px',
        lg: '72px'
      }} flexWrap="wrap" direction="column" justify="space-between">
        <Box>
          <Flex
            w="full"
            h="20"
            justifyContent="center"
            alignItems="center"
            borderBottom="1px
            solid"
            borderBottomColor="dark.200"
          >
            <LogoSvg />
          </Flex>
          <Flex direction="column" w="full" justifyContent="flex-start" alignItems="flex-start" py={6} gap={6}>
            {navigation.map(item => {
              return (
                <React.Fragment key={item.id}>
                  <NavigationItem data={item} clickHandler={handleNavClick} /> 
                </React.Fragment>
              )
            })}
          </Flex>
        </Box>
        <Flex 
          w="full"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box pb="6">
            <InfoSvg />
          </Box>
          <Box h="100px">
            <Box
              w="full"
              mt="10px"
              py="3"
              px="6"
              color="dark.300"
              fontSize="14"
              letterSpacing="0.2px"
              lineHeight="5"
            >
              1.01
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex 
        w={'212px'} 
        opacity={{
          base: 1,
          lg: open ? '1' : '0' 
        }}
        transition="all 750ms ease-in-out" 
        position="absolute" 
        left={{
          base: open ? '50px' : '-250px' ,
          lg: '72px'
        }}
        top="0" 
        h="full" 
        borderX={'1px'}
        borderColor={open? "dark.200" : "transparent"}
        direction="column"
        justify="space-between"
        backgroundColor="#FFF"
      >
        <Box>
          <Flex
            w="full"
            h="20"
            borderBottom="1px
            solid"
            borderBottomColor="dark.200"
            p="6"
            justify="flex-start"
            alignItems="center"
          >
            <LogoExtensionSVG />
          </Flex>
          <Box p="6" position="relative">
            {navigation.filter(item => !!item.sideMenu).map((item, index) => (
              <Box
                key={index}
                position="absolute"
                top="6"
                left="6"
                opacity={item.active ? '1' : '0'}
                zIndex={item.active ? 2 : 0}
                transition="opacity 750ms"
                >
                {item.sideMenu}
              </Box>
            ))}
          </Box>
        </Box>
        <Flex 
          w="full"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box pb="6" w="full">
            <Text 
              as="span" 
              color="dark.300"
              fontSize="14"
              letterSpacing="0.2px"
              lineHeight="5"
              px="6"
            >
              Help Started
            </Text>
          </Box>
          <Box h="100px" w="full" borderTop="1px solid" borderColor="dark.200">
            <Box
              w="full"
              mt="10px"
              py="3"
              px="6"
              color="dark.300"
              fontSize="14"
              letterSpacing="0.2px"
              lineHeight="5"
            >
              Version . 1.00.0.2
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navigation;