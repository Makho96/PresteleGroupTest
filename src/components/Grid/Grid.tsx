import { useEffect, useRef } from "react";
import { Box, Grid as ChakraGrid } from "@chakra-ui/react";
import { wrapGrid } from 'animate-css-grid'
import GridCard from "./GridCard";
import useGridContext from "../../store/Context";

type Props = {
  open: boolean
}

const Grid = (props: Props) => {
  const { open } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const { data } = useGridContext();

  useEffect(() => {
    if (divRef.current) {
      wrapGrid(divRef.current, {
        stagger: 0,
        duration: 750,
        easing: 'easeInOut',
      });
    }
  }, [])

  return (
    <ChakraGrid
      w="full"
      height="full"
      ref={divRef}             
      gap={4}
      overflow="hidden"
      alignContent="start" 
      alignItems="start" 
      templateColumns={{
        base: 'repeat(1, 100%)',
        xs: 'repeat(1, 100%)',
        sm: 'repeat(1, 100%)',
        md: 'repeat(1, 100%)',
        lg: open? 'repeat(1, 428px)' : 'repeat(2, 428px)',
        xl: open? 'repeat(2, 428px)' : 'repeat(3, 428px)',
        '2xl': open? 'repeat(3, 428px)' : 'repeat(4, 428px)',
        '3xl': open? 'repeat(4, 428px)' : 'repeat(5, 428px)',
      }}
    >
      {data.map(elem => (
        <Box
          key={elem.id}
        >
          <GridCard
            {...elem} 
          />
        </Box>
      ))}
    </ChakraGrid>
  )
}

export default Grid;