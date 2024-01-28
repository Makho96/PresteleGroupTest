import { Box, Flex, Input, InputGroup, InputLeftElement, Image, Heading, Link, Show } from "@chakra-ui/react";
import { SearchSvg } from "../../static";
import ImgSrc from '../../assets/images/profile.png';

const Header = () => {
  return <Flex 
    h="20" 
    py={{
      base: 2,
      md: 5
    }} 
    px={{
      base: 3,
      md: 3
    }}
    w="full"
    justifyContent="space-between"
    alignItems="center"
    bg="#FFF"
    borderBottom="1px"
    borderColor="dark.200"
  >
    <Box as="form">
      <InputGroup>
        <InputLeftElement pointerEvents="none" w="4">
          <SearchSvg />
        </InputLeftElement>
        <Show above="sm">
          <Input
            w="250px"
            border="none"
            placeholder="Search for the desired information"
            pl="8"
            focusBorderColor="transparent"
            _focus={{
              outline: 'none'
            }}
            _placeholder={{
              color: 'dark.400',
              fontSize: '14px'
            }}
          />
        </Show>
        <Show below="sm">
          <Input
            w="100px"
            border="none"
            placeholder="Search"
            pl="8"
            focusBorderColor="transparent"
            _focus={{
              outline: 'none'
            }}
            _placeholder={{
              color: 'dark.400',
              fontSize: '14px'
            }}
          />
        </Show>
      </InputGroup>
    </Box>
    <Flex justifyContent="flex-end" alignItems="center" gap="2">
      <Show above="sm">
        <Flex direction="column">
          <Heading as="h4" fontSize="14px" color="rgba(19, 15, 38, 1)" textAlign="end">
            Alex Kognitiv
          </Heading>
          <Link 
            href="mailto:Alexkognitiv@gmail.com" 
            textDecoration="none" 
            fontSize="10px"
            color="rgba(135, 142, 162, 1)"
            _hover={{textDecoration: "none"}}
          >
            Alexkognitiv@gmail.com
          </Link>
        </Flex>
      </Show>
      <Image src={ImgSrc} alt="profile" w="8" h="8" />
    </Flex>
  </Flex>
}

export default Header;