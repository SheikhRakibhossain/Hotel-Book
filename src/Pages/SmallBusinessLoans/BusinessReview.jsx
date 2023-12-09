// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
// rating detail
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { ThinStar } from "@smastrom/react-rating";
// import { useState } from "react";
import '@smastrom/react-rating/style.css';

const BusinessReview = () => {
//   const [rating, setRating] = useState(0);
  const customStyles = {
    itemShapes: ThinStar,
    activeBoxColor: ['#e7040f', '#ff6300', '#ffde37', '#61bb00', '#19a974'],
    inactiveBoxColor: '#C7C7C7',
    inactiveFillColor: 'white',
  };

  return (
    <>
      <Swiper
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        // slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper grid sm:grid-cols-2 md:grid-cols-3 gap-2"
      >
        <SwiperSlide>
          <div className="bg-base-100 shadow-xl p-4">
          <Rating
        readOnly
        style={{ maxWidth: 90 }}
        value={4.5}
        halfFillMode="box"
        itemStyles={customStyles}
        spaceBetween="small"
      />
            <div className="text-start">
              <p><small>Working with Matthew and Andrew has been a great experience!</small></p>
             <p> <small><strong>Rakib</strong> 2days ago</small></p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-100 shadow-xl p-4">
          <Rating
        readOnly
        style={{ maxWidth: 90 }}
        value={4.5}
        halfFillMode="box"
        itemStyles={customStyles}
        spaceBetween="small"
      />
            <div className="text-start">
              <p><small>Working with Matthew and Andrew has been a great experience!</small></p>
             <p> <small><strong>Rakib</strong> 2days ago</small></p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-100 shadow-xl p-4">
          <Rating
        readOnly
        style={{ maxWidth: 90 }}
        value={4.5}
        halfFillMode="box"
        itemStyles={customStyles}
        spaceBetween="small"
      />
            <div className="text-start">
              <p><small>Working with Matthew and Andrew has been a great experience!</small></p>
             <p> <small><strong>Rakib</strong> 2days ago</small></p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-100 shadow-xl p-4">
          <Rating
        readOnly
        style={{ maxWidth: 90 }}
        value={4.5}
        halfFillMode="box"
        itemStyles={customStyles}
        spaceBetween="small"
      />
            <div className="text-start">
              <p><small>Working with Matthew and Andrew has been a great experience!</small></p>
             <p> <small><strong>Rakib</strong> 2days ago</small></p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-100 shadow-xl p-4">
          <Rating
        readOnly
        style={{ maxWidth: 90 }}
        value={4.5}
        halfFillMode="box"
        itemStyles={customStyles}
        spaceBetween="small"
      />
            <div className="text-start">
              <p><small>Working with Matthew and Andrew has been a great experience!</small></p>
             <p> <small><strong>Rakib</strong> 2days ago</small></p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-100 shadow-xl p-4">
          <Rating
        readOnly
        style={{ maxWidth: 90 }}
        value={4.5}
        halfFillMode="box"
        itemStyles={customStyles}
        spaceBetween="small"
      />
            <div className="text-start">
              <p><small>Working with Matthew and Andrew has been a great experience!</small></p>
             <p> <small><strong>Rakib</strong> 2days ago</small></p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-base-100 shadow-xl p-4">
          <Rating
        readOnly
        style={{ maxWidth: 90 }}
        value={4.5}
        halfFillMode="box"
        itemStyles={customStyles}
        spaceBetween="small"
      />
            <div className="text-start">
              <p><small>Working with Matthew and Andrew has been a great experience!</small></p>
             <p> <small><strong>Rakib</strong> 2days ago</small></p>
              
            </div>
          </div>
        </SwiperSlide>
      
        
      </Swiper>
    </>
  );
};

export default BusinessReview;
