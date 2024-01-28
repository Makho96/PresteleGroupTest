import { Box, Flex, Heading } from "@chakra-ui/react"

type Props = {
  title: string;
  menu: Array<{title: string, extra: boolean, id: string}>;
}

const SideMenu = (porps: Props) => {
  const { title, menu } = porps;
  return (
    <Box>
      <Heading 
        as="h5" 
        fontFamily="SFPRO_semibold" 
        fontSize="14px" 
        w="full" 
        style={{wordSpacing: '100vw'}}
        lineHeight="20px"
        letterSpacing="0.2px"
      >
        {title}
      </Heading>
      <Box as="nav" marginTop="8" w="full">
        <Flex as="ul" direction="column" listStyleType="none" gap="4" w="full">
          {menu.map((item) => (
            <Box
              key={item.id}
              as="li"
              w="full"
              cursor="pointer"
              display="flex"
              gap="6"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Heading 
                as="h6" 
                fontSize="14px" 
                fontWeight="500" 
                color="dark.600" 
                cursor="pointer"
                transition="color 500ms"
                _hover={{color: 'rgba(100, 112, 255, 1)'}}
              >
                {item.title}
              </Heading>
              {item.extra && <Box w="2" h="2" borderRadius="50%" background="rgba(255, 148, 70, 1)" />}
            </Box>          
          ))}
         </Flex>
      </Box>
    </Box>
  )
}

export default SideMenu