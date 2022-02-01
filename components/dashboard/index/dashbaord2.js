import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);
import styles from "./swiper.module.css";

import { Image, Box, Center, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
export default function Dashboard2({ events }) {
  return (
    <div>
      {!events || !events.length ? (
        <Center pt={["10vh"]}>
          <Heading as="h1" style={{ color: "white" }}>
            Registered events will appear here
          </Heading>
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
          pagination={false}
          className={styles["swiper"]}
        >
          {events.map((workshop) => (
            <div key={workshop.id}>
              <SwiperSlide className={styles["swiper-slide"]}>
                <Link href={`/dashboard/workshops/${workshop.slug}`} passHref>
                  <Box style={{ cursor: "pointer" }}>
                    <Image src={`${workshop.src}`} alt="next-image" />
                    <Text className={styles["swiper-text"]}>
                      {workshop.name}
                    </Text>
                  </Box>
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      )}
    </div>
  );
}
