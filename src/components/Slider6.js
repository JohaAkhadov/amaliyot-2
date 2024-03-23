import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function Slider6({header}) {
    return (
        <div className="Slider6">
            <h1 className='sp_h1'>{header}</h1>
            <p className='sp_p'>У нас Вы можете купить ветеринарное оборудование ведущих производителей из Китая, Южной Кореи, Испании и т.д.</p>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 19.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 20.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 21.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 22.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 23.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 24.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 19.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 20.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 21.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 22.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 23.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/Rectangle 24.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Slider6

