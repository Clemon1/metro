import { Box, Button, Flex, Image } from "@chakra-ui/react";
import metroHome from "@/assets/metroHome.jpg";
import metroHome3 from "@/assets/slide3.jpeg";
import mad1 from "@/assets/mad1.jpg";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <Flex
      flex={1}
      position={"relative"}
      flexDirection={"column"}
      w={"full"}
      height={{
        smDown: "100%",
        smToLg: "100%",
        lgTo2xl: 780,
      }}
      p={{
        smDown: 2,
        smToMd: 2,
        mdTo2xl: 4,
      }}
      bg={"#f4f4f4"}>
      <Box
        className='embla'
        height={{
          smDown: "100%",
          smToMd: "100%",
          mdTo2xl: "85vh",
        }}
        rounded={"2xl"}
        bg={"#fafafa"}>
        <Box className='embla__viewport' rounded={"2xl"} ref={emblaRef}>
          <Flex
            w={"full"}
            height={{
              smDown: "60vh",
              smToMd: "60vh",
              MdTo2xl: "60vh",
            }}
            className='embla__container'>
            <Box className='embla__slide' w={"full"} rounded={"2xl"}>
              <Image
                src={metroHome}
                loading='lazy'
                fit={"cover"}
                rounded={"2xl"}
                w={"full"}
                height={"100%"}
              />
            </Box>
            <Box className='embla__slide'>
              <Image
                src={mad1}
                loading='lazy'
                rounded={"2xl"}
                fit={"cover"}
                w={"full"}
                height={"100%"}
              />
            </Box>
            <Box className='embla__slide'>
              <Image
                src={metroHome3}
                loading='lazy'
                fit={"cover"}
                rounded={"2xl"}
                w={"full"}
                height={"100%"}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Flex
        w={"full"}
        gap={20}
        justify={"flex-end"}
        pos={"absolute"}
        right={10}
        bottom={10}>
        <Button
          bg={"transparent"}
          rounded={"full"}
          className='embla__prev'
          onClick={scrollPrev}>
          <FaArrowLeft color='#ffffff' />
        </Button>
        <Button
          bg={"transparent"}
          rounded={"full"}
          className='embla__next'
          onClick={scrollNext}>
          <FaArrowRight color='#ffffff' />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
