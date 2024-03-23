import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function SliderProduct3({header}) {
    return (
        <div className="SliderProduct3">
            <h1 className='sp_h1'>{header}</h1>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 13.png" alt="" />
                        <h1>XXIX Московский Международный Ветеринарный Конгресс</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 14.png" alt="" />
                        <h1>Программа повышения квалификации “Биохимические исследования”</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 15.png" alt="" />
                        <h1>Семинар “Современные подходы в лабораторной  диагностике”</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 16.png" alt="" />
                        <h1>Выставка ЗООИНДУСТРИЯ 2021</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 13.png" alt="" />
                        <h1>XXIX Московский Международный Ветеринарный Конгресс</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 14.png" alt="" />
                        <h1>Программа повышения квалификации “Биохимические исследования”</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 15.png" alt="" />
                        <h1>Семинар “Современные подходы в лабораторной  диагностике”</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider3">
                        <img src="./img/Rectangle 16.png" alt="" />
                        <h1>Выставка ЗООИНДУСТРИЯ 2021</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default SliderProduct3

