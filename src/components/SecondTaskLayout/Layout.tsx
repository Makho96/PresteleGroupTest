import { useEffect, useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import PinkImgSrc from '../../assets/images/pink.png'
import GreenImgSrc from '../../assets/images/green.png'
import BluemgSrc from '../../assets/images/blue.png'
import ShadowPink from '../../assets/images/shadowPink.png'
import ShadowBlue from '../../assets/images/shadowBlue.png'
import ShadowGreen from '../../assets/images/shadowGreen.png'
import './index.css'
import Slider from './Slider/Slider'

const SecondTaskLayout = () => {
  const [sliderOn, setSliderOn] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    if (sliderOn) {
      const timeOut = setTimeout(() => {
        setShowSlider(true);
        clearTimeout(timeOut)
      }, 750)
      return () => clearTimeout(timeOut);
    }
  }, [sliderOn])

  return (
    <Box className="App">
      <Box className='slider-container'>
        <Slider />
      </Box>
      {!showSlider && (
        <Box w="full" h="full" position="relative" className={`container ${sliderOn ? 'fade-out' : '' }`} >
          <Box className='parent'>
            <Box className='green box'>
              <img src={GreenImgSrc} alt='green' className='box-image' />
              <img src={ShadowGreen} alt="green" className='shadow-image'/>
            </Box>
            <Box className='blue box'>
              <img src={BluemgSrc} alt="blue" className='box-image' />
              <img src={ShadowBlue} alt="blue" className='shadow-image'/>
            </Box>
            <Box className='pink box'>
              <img src={PinkImgSrc} alt="pink" className='box-image'/>
              <img src={ShadowPink} alt="pink" className='shadow-image'/>
            </Box>
          </Box>
          <Box className='button-container'>
            <Button role='group' onClick={() => {setSliderOn(true)}}>
              <Text as="span" _groupHover={{
                scale: 1.5
              }}>See all product</Text>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default SecondTaskLayout