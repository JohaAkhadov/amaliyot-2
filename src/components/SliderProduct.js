import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


function SliderProduct({ header }) {
    return (
        <div className="SliderProduct">
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
                    <div className="slider_product">
                        <img src="./img/7 2.png" alt="" />
                        <h1>Автоматический гематологический анализатор DF50 Vet</h1>
                        <p>Автоматический гематологический анализатор DF50 Vet</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_product">
                        <img src="./img/7 2 (1).png" alt="s" />
                        <h1>Биохимический экспресс-анализатор Skyla VB1</h1>
                        <p>Очень маржинальный наш прибор, продавать сплошное удовольствие!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_product">
                        <img src="./img/7 2 (1).png" alt="" />
                        <h1>Биохимический экспресс-анализатор Skyla VB1</h1>
                        <p>Очень маржинальный наш прибор, продавать сплошное удовольствие!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_product">
                        <img src="./img/7 2.png" alt="" />
                        <h1>Автоматический гематологический анализатор DF50 Vet</h1>
                        <p>Автоматический гематологический анализатор DF50 Vet</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_product">
                        <img src="./img/7 2 (1).png" alt="" />
                        <h1>Биохимический экспресс-анализатор Skyla VB1</h1>
                        <p>Очень маржинальный наш прибор, продавать сплошное удовольствие!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_product">
                        <img src="./img/7 2 (1).png" alt="" />
                        <h1>Биохимический экспресс-анализатор Skyla VB1</h1>
                        <p>Очень маржинальный наш прибор, продавать сплошное удовольствие!</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default SliderProduct

