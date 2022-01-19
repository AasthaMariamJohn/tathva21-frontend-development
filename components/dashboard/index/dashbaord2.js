import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);
import styles from "./swiper.module.css";

import { Image, Box, Center,Heading } from "@chakra-ui/react";

export default function Dashboard2({ events = null }) {
  return (
    <div>
      {!events ? (
        <Center pt={["30vh"]}>
          <Heading as="h1">No Events registered</Heading>
        </Center>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className={styles["swiper"]}
        >
          <SwiperSlide className={styles["swiper-slide"]}>
            <Box>
              <Image
                src={"https://swiperjs.com/demos/images/nature-1.jpg"}
                alt="next-image"
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <Box>
              <Image
                src={"https://swiperjs.com/demos/images/nature-1.jpg"}
                alt="next-image"
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
