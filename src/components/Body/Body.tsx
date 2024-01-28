import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";
import { PlusSvg } from "../../static";
import Grid from "../Grid";
import useGridContext from "../../store/Context";

type Props = {
  open: boolean;
}
const Body = (props: Props) => {
  const { open } = props;
  const { addItem } = useGridContext();
  
  return (
    <Box w="full" h="full">
      <Flex
        justify="space-between"
        alignItems="flex-end"
        w="full"
        py={{
          base: 3,
          lg: 6
        }}
        background="#F9FAFC"
        zIndex={3}
        flexWrap={{
          base: 'wrap',
          sm: 'nowrap'
        }}
      >
        <Box w={{
          base: '100%',
          sm: 'auto'
        }}>
          <Heading
            as="h1"
            fontSize={{
              base: '20px',
              md: '24px'
            }}
            color="#000"
            lineHeight={{
              base: '24px',
              md: '32px'
            }}
            fontFamily="SFPRO_semibold"
            textTransform="capitalize"
            >
            Manage Category Page
          </Heading>
          <Text
            as="h4"
            fontSize={{
              base: '12px',
              md: '14px'
            }}
            lineHeight="22px"
            letterSpacing="0.056px"
            color="dark.600"
            pt="2"
          >
            Is simply dummy text of the printing and typesetting industry.
          </Text>
        </Box>
        <Button
          py={{
            base: 1,
            md: 2
          }}
          px={{
            base: 1,
            md: 2
          }}
          borderRadius="4"
          border="1px solid"
          borderColor="dark.200"
          fontWeight="400"
          gap="2"
          display="flex"
          background="transparent"
          _hover={{
            background: "transparent"
          }}
          onClick={addItem}
          w={{
            base: '100%',
            sm: 'auto'
          }}
          mt={{
            base: '2',
            sm: 0
          }}
        >
          <PlusSvg />
          <Text
            as="span"
            fontSize={{
              sm: '10px',
              md: '12'
            }}
            lineHeight="16px"
            letterSpacing="0.2px"
            color="dark.700"
          >
            Create New Category
          </Text>
        </Button>
      </Flex>
      <Box
        overflowX="hidden"
        w={{
          base: '100%',
          lg: open ? 'calc(100vw - 332px)' : 'calc(100vw - 120px)'
        }}
        transition="all 850ms"
        pt="4"
      >
        <Grid open={open} />
      </Box>
    </Box>
  )
}

export default Body;