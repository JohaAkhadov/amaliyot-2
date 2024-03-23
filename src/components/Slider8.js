import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function Slider8({header}) {
    return (
        <div style={{backgroundColor:"#DFE6EF"}} className="Slider6">
            <h1 className='sp_h1'>{header}</h1>
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
                        <img src="./img/vetlight 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/vettest 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/vetprofalians 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/spektr-klinika 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/neovet 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/beliy-klik 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/vetlight 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/vettest 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/vetprofalians 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/spektr-klinika 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/neovet 1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider6_div">
                        <img src="./img/beliy-klik 1.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Slider8

