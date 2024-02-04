import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getMainBannerAsync } from "../homeAsync";
import "./MainBanner.css"; // Import CSS for styling

export default function MainBanner() {
  const dispatch = useAppDispatch();
  const { mainBanner } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(getMainBannerAsync());
  }, [dispatch]);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      freeMode={true}
      centerInsufficientSlides
      autoplay={{ delay: 3000 }} 
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      className="mySwiper"
      style={{ width: "100%", height: "120px" }}
    >
      {mainBanner.map((banner, index) => (
        <SwiperSlide key={banner.mainBannerId} className="swiper-slide">
          <div className={index === 1 ? "main-slide" : "slide-content"}>
            <img
              src={banner.pcImageUrl}
              alt={banner.title}
              className="h-full w-full object-cover"
            />
            {index === 1 && (
              <div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}









// import { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { getMainBannerAsync } from "../homeAsync";

// export default function MainBanner() {
//   const dispatch = useAppDispatch();
//   const { mainBanner } = useAppSelector((state) => state.home);

//   useEffect(() => {
//     dispatch(getMainBannerAsync());
//   }, [dispatch]);

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
//       navigation={{
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       }}
//       modules={[Navigation]}
//       autoplay={{ delay: 3000 }} // Adjust delay as needed
//       className="mySwiper"
//       style={{ width: "100%", height: "320px" }}
//     >
//       {mainBanner.map((banner, index) => (
//         <SwiperSlide
//           key={banner.mainBannerId}
//           style={{
//             width: index === 1 ? "62px" : "0%",
//             margin: "auto",
//           }}
//         >
//           <img
//             src={banner.pcImageUrl}
//             alt={banner.title}
//             className="h-full w-full object-cover"
//           />
//         </SwiperSlide>
//       ))}
//       <div className="swiper-button-prev"></div>
//       <div className="swiper-button-next"></div>
//     </Swiper>
//   );
// }


