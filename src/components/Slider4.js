import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function Slider4({header}) {
    return (
        <div style={{ backgroundImage: "url('./img/Mask Group.png')" }} className="Slider4">
            <h1 className='sp_h1'>{header}</h1>
            <Swiper
                modules={[Navigation, A11y, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slider4_div">
                        <p>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение</p>
                        <div className="slider4_div_white">
                            <span>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение. Узнать все подробности о ценах, характеристиках товаров, условиях сделки и доставке в другие регионы РФ можно по указанному номеру телефона или воспользовавшись окном обратной связи.</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider4_div">
                        <p>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение</p>
                        <div className="slider4_div_white">
                            <span>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение. Узнать все подробности о ценах, характеристиках товаров, условиях сделки и доставке в другие регионы РФ можно по указанному номеру телефона или воспользовавшись окном обратной связи.</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider4_div">
                        <p>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение</p>
                        <div className="slider4_div_white">
                            <span>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение. Узнать все подробности о ценах, характеристиках товаров, условиях сделки и доставке в другие регионы РФ можно по указанному номеру телефона или воспользовавшись окном обратной связи.</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider4_div">
                        <p>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение</p>
                        <div className="slider4_div_white">
                            <span>Чтобы купить подходящую модель оборудования, вы можете отправить нам коммерческое предложение. Узнать все подробности о ценах, характеристиках товаров, условиях сделки и доставке в другие регионы РФ можно по указанному номеру телефона или воспользовавшись окном обратной связи.</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Slider4

