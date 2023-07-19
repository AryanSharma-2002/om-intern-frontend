import { Box, IconButton, SlideFade, useDisclosure } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Slide = ({ imagePaths }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
    onToggle();
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
    onToggle();
  };
  console.log(currentIndex);
  return (
    <Box position="relative" w="100%" h="400px">
      <IconButton
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        onClick={previousImage}
      />
      <IconButton
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Next"
        icon={<ChevronRightIcon />}
        onClick={nextImage}
      />
      <SlideFade in={isOpen}>
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgImage={`url(${imagePaths[currentIndex]})`}
          bgSize="cover"
          bgPosition="center"
        />
      </SlideFade>
    </Box>
  );
};

export default Slide;
