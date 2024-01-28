import { Box, Flex, Heading, Show, Text } from "@chakra-ui/react";
import { ChevronDownSvg, DeteleSvg, DotsSvg, EditSvg, FolderSvg, PlusSvg } from "../../../static";
import { GridItemData } from "../gridData";
import useGridContext from "../../../store/Context";

type Props = {} & GridItemData

const GridCard = (props: Props) => {
  const { title, subTitle, id } = props;
  const { removeItem } = useGridContext();
  return (
    <Flex
      // w="428px" 
      py={{
        base: '3',
        sm: '6',
        lg: '10'
      }}
      px={{
        base: '2',
        sm: '4',
        lg:'6'
      }}
      direction="column"
      borderRadius="0.25"
      backgroundColor="#FFF"
      border="1px solid"
      borderColor="#F0F0F0"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex justify="flex-start" gap="6" alignItems="center">
          <ChevronDownSvg />
          <Flex justifyContent="flex-start" gap="4" alignItems="center">
            <FolderSvg />
            <Heading as="h6" fontSize="16px" lineHeight="22px" letterSpacing="0.016px">{title}</Heading>
          </Flex>
        </Flex>
        <Flex justifyContent="flex-end" alignItems="center" gap="4">
          <Box cursor="pointer" onClick={() => removeItem(id)}>
            <DeteleSvg />
          </Box>
          <Box cursor="pointer">
            <EditSvg />
          </Box>
        </Flex>
      </Flex>
      <Flex
        mt="4"
        display="inline-flex"
        justify="flex-start"
        alignItems="center"
        backgroundColor="#F7F7F7"
        w={{
          base: '100%',
          sm: '64%'
        }}
        h={6}
        p="1"
      >
        <DotsSvg />
        <Text
          pl="6"
          pr="10"
          as="span"
          color="dark.700"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="0.2px"
        >
          {subTitle}
        </Text>
        <Flex gap="3">
          <EditSvg />
          <DeteleSvg />
        </Flex>
      </Flex>
      <Flex mt="14" mb="2" alignItems="center" gap="2" position="relative" w="full">
        <Text
          as="span"
          textTransform="capitalize"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="0.2px"
        >
          add new collection
        </Text>
        <PlusSvg />
        <Show above="sm">
          <Box
            height="1px"
            backgroundColor="#F0F0F0"
            width="60%"
            position="absolute"
            right='-20px'
          />
        </Show>
      </Flex>
      <Text
        as="span"
        fontSize="14px"
        lineHeight="22px"
        letterSpacing="0.056px"
        color="dark.700"
      >Drag treeNode to insert after the other treeNode.</Text>
    </Flex>
  )
}

export default GridCard;