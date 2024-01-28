import { Box, Flex } from "@chakra-ui/react";
import './style.css'
import { NavigationItemType } from "../data";

type Props = {
  data: NavigationItemType;
  clickHandler: (navItem: NavigationItemType) => void,
}

const NavigationItem = (props: Props) => {
  const { data: {active, icon}, clickHandler } = props
  return (
    <Flex 
      role="group" 
      w="full" 
      justifyContent="center" 
      alignItems="center" 
      cursor="pointer" 
      className="nav-item" 
      position="relative" 
      h="6"
      onClick={() => clickHandler(props.data)}>
      <Box 
        position="absolute" 
        h="full"
        left="0"
        top="0"
        w="2px"
        background="rgba(61, 77, 255, 1)"
        opacity={active ? '1' : '0'}
        _groupHover={{opacity:1}}
        transition="all 500ms"
      />
      <Box w="5" h="5">
        {icon}
      </Box>
    </Flex>
  )
}

export default NavigationItem;