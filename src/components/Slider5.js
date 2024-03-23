import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function Slider5({header}) {
    return (
        <div className="Slider5">
            <h1 className='sp_h1'>{header}</h1>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slider5_div">
                        <img src="./img/Rectangle 33 (3).png" alt="" />
                        <h1>Участие в Национальной Ветеринарной Конференции</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider5_div">
                        <img src="./img/Rectangle 33 (4).png" alt="s" />
                        <h1>Основы использования биохимического анализатора Skyla VB1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider5_div">
                        <img src="./img/Rectangle 33 (5).png" alt="" />
                        <h1>Пуско-наладка 5-diff гематологического анализатора DF-50</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider5_div">
                        <img src="./img/Rectangle 33 (3).png" alt="" />
                        <h1>Участие в Национальной Ветеринарной Конференции</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider5_div">
                        <img src="./img/Rectangle 33 (4).png" alt="s" />
                        <h1>Основы использования биохимического анализатора Skyla VB1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider5_div">
                        <img src="./img/Rectangle 33 (5).png" alt="" />
                        <h1>Пуско-наладка 5-diff гематологического анализатора DF-50</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Slider5

