import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getMainBannerAsync } from "../homeAsync";

export default function MainBanner() {
  const dispatch = useAppDispatch();
  const { mainBanner } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(getMainBannerAsync());
  }, [dispatch]);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      freeMode={true}
      centerInsufficientSlides
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      autoplay={{ delay: 3000 }} // Adjust delay as needed
      className="mySwiper"
      style={{ width: "100%", height: "250px" }}
    >
      {mainBanner.map((banner, index) => (
        <SwiperSlide
          key={banner.mainBannerId}
          style={{
            width: index === 1 ? "80%" : "0%",
            margin: "auto",
          }}
        >
          <img
            src={banner.pcImageUrl}
            alt={banner.title}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}


