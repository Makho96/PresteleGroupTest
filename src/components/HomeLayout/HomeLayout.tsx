import { Flex, Box, Image } from "@chakra-ui/react";
import LayoutItem from "./LayoutItem/LayoutItem";
import StepOneImageSrc from '././../../assets/images/Step1.png';
import StepTwoImageSrc from '././../../assets/images/Step2.png';
import StepThreeImageSrc from '././../../assets/images/Step3.png';

const HomeLayout = () => {
  return (
    <Flex direction="column" w="full" h="100vh">
      <Box w="full" h="calc(100% / 3)">
        <LayoutItem 
          taskNumber={1}
          title="Admin Panel Manage Category Page"
          url="/first-task"
          rightElement={
            <Box h="calc(100% - 39px)" borderTopLeftRadius="16px" overflow="hidden">
              <Image src={StepOneImageSrc} alt="step1" h="full" />
            </Box>
          }
          main={true}
        />
      </Box>
      <Box w="full" h="calc(100% / 3)">
        <LayoutItem 
          taskNumber={2}
          title="Hover animation With drag and drop"
          url="/second-task"
          rightElement={
            <Box h="full" borderTopLeftRadius="16px" overflow="hidden">
              <Image src={StepTwoImageSrc} alt="step1" h="full" />
            </Box>
          }
          main={false}
        />
      </Box>
      <Box w="full" h="calc(100% / 3)">
        <LayoutItem 
          taskNumber={3}
          title="Graphic animation"
          url="/first-task"
          rightElement={
            <Box h="full" borderTopLeftRadius="16px" overflow="hidden">
              <Image src={StepThreeImageSrc} alt="step1" h="full" />
            </Box>
          }
          main={true}
        />
      </Box>
    </Flex>
  )
}

export default HomeLayout;