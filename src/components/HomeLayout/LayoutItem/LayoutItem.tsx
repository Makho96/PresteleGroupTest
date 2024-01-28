import { Flex, Heading, Link, Show, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";
type Props = {
  taskNumber: number;
  title: string;
  url: string;
  rightElement: ReactNode
  main?: boolean;
}

const LayoutItem = (props: Props) => {
  const {taskNumber, title, url, rightElement, main = false} = props;
  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-end"
      w="full"
      h="full"
      pl={{
        base: '20px',
        lg: '60px'
      }}
      backgroundColor={main? '#0B121A' : '#85C3ED'}
      color='white'
      fontFamily="Inter"
    >
      <Flex w="365px" flexDir="column" justifyContent="flex-start" height="100%"  position="relative" pt="6"
>
        <Flex w="full" flexDirection="column" gap="2">
          <Text
            as="span"
            fontSize="14px"
            fontWeight="600"
            >
              Task {taskNumber}
          </Text>
          <Heading as="h1" fontSize="32px" fontWeight="700">
            {title}
          </Heading>
        </Flex>
        <Link
          position="absolute"
          left="0"
          bottom="40px"
          as={ReactLink}
          to={url}
          background="#1636A6"
          w="278px"
          h="60px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="16px"
          px="30px"
          cursor="pointer"
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Text as="span">
            Case Study
          </Text>
          <Text as="span">
            -&gt;
          </Text>
        </Link>
      </Flex>
      <Show above="md">
        {rightElement}
      </Show>

    </Flex>
  )
}

export default LayoutItem;