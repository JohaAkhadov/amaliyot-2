import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Slider() {
    return (

        <div className='slider'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="./img/Group 8.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/Group 8.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/Group 8.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/Group 8.png" alt="" /></SwiperSlide>
            </Swiper>
            <div className="slider_text">
                <h1>Широкий спектр товаров для клиник и лабораторий</h1>
                <div className="st_center">
                    <img src="./img/Group (1).png" alt="" />
                    <p>Ветеринарное оборудование
                        и расходные материалы к ним
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slider