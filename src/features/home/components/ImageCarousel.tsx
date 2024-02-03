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
      className="mySwiper"
      style={{ width: "100%", height:"250px" }} // Set the width of the Swiper container
    >
      {mainBanner.map((banner, index) => (
        <SwiperSlide
          key={banner.mainBannerId}
          style={{
            width: index === 1 ? "80%" : "0%", // Show only the middle slide with 80% width
            margin: "auto", // Center the slide horizontally
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







// import { useEffect } from "react"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "swiper/css/navigation"

// // import required modules
// import { Autoplay, FreeMode, Pagination } from "swiper/modules"
// import { useAppDispatch, useAppSelector } from "../../../app/hooks"
// import { getMainBannerAsync } from "../homeAsync"

// export default function MainBanner() {
//   const dispatch = useAppDispatch()
//   const { mainBanner } = useAppSelector(state => state.home)
//   useEffect(() => {
//     dispatch(getMainBannerAsync())
//   }, [dispatch])
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       loop={true}
//       freeMode={true}
//       centerInsufficientSlides
//       pagination={{
//         clickable: true,
//       }}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       modules={[Autoplay, FreeMode, Pagination]}
//       className="h-[323px] mySwiper "
//     >
//       {mainBanner.map(banner => {
//         return (
//           <SwiperSlide key={banner.mainBannerId}>
//             <img
//               src={banner.pcImageUrl}
//               alt={banner.title}
//               className="h-full object-cover"
//             />
//           </SwiperSlide>
//         )
//       })}
//     </Swiper>
//   )
// }
