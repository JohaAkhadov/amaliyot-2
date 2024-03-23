import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function Slider7({header}) {
    return (
        <div className="Slider7">
            <h1 className='sp_h1'>{header}</h1>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slider7_div">
                        <div className="s7d_left">
                            <img src="./img/Ellipse 8.png" alt="" />
                            <h1>Истомина Т. А.</h1>
                            <p>Клиника “Белый клык”</p>
                        </div>
                        <div className="s7d_right">
                            <img src="./img/Group 62.png" alt="" />
                            <p>Анализатор электролитов i-Smart 30 Vet находился на апробации в ветеринарной клинике “Белвй клык” с 15 апреля по 15 мая 2015 года. За время апробации проявил себя как надежный и удобный в использовании анализатор. Прибор не требует для работы специальных навыков от оператора и может быть успешно использован сотрудником ветеринарной лаборатории или клиники после прохождения краткого обучения. Во время анализа на экране отображаютя подсказки для пользователя. Также к достоинствам данного анализатора относится быстрое получение результатов исследования (35 сек), портативность прибора и удобство работы.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider7_div">
                        <div className="s7d_left">
                            <img src="./img/Ellipse 8.png" alt="" />
                            <h1>Истомина Т. А.</h1>
                            <p>Клиника “Белый клык”</p>
                        </div>
                        <div className="s7d_right">
                            <img src="./img/Group 62.png" alt="" />
                            <p>Анализатор электролитов i-Smart 30 Vet находился на апробации в ветеринарной клинике “Белвй клык” с 15 апреля по 15 мая 2015 года. За время апробации проявил себя как надежный и удобный в использовании анализатор. Прибор не требует для работы специальных навыков от оператора и может быть успешно использован сотрудником ветеринарной лаборатории или клиники после прохождения краткого обучения. Во время анализа на экране отображаютя подсказки для пользователя. Также к достоинствам данного анализатора относится быстрое получение результатов исследования (35 сек), портативность прибора и удобство работы.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider7_div">
                        <div className="s7d_left">
                            <img src="./img/Ellipse 8.png" alt="" />
                            <h1>Истомина Т. А.</h1>
                            <p>Клиника “Белый клык”</p>
                        </div>
                        <div className="s7d_right">
                            <img src="./img/Group 62.png" alt="" />
                            <p>Анализатор электролитов i-Smart 30 Vet находился на апробации в ветеринарной клинике “Белвй клык” с 15 апреля по 15 мая 2015 года. За время апробации проявил себя как надежный и удобный в использовании анализатор. Прибор не требует для работы специальных навыков от оператора и может быть успешно использован сотрудником ветеринарной лаборатории или клиники после прохождения краткого обучения. Во время анализа на экране отображаютя подсказки для пользователя. Также к достоинствам данного анализатора относится быстрое получение результатов исследования (35 сек), портативность прибора и удобство работы.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider7_div">
                        <div className="s7d_left">
                            <img src="./img/Ellipse 8.png" alt="" />
                            <h1>Истомина Т. А.</h1>
                            <p>Клиника “Белый клык”</p>
                        </div>
                        <div className="s7d_right">
                            <img src="./img/Group 62.png" alt="" />
                            <p>Анализатор электролитов i-Smart 30 Vet находился на апробации в ветеринарной клинике “Белвй клык” с 15 апреля по 15 мая 2015 года. За время апробации проявил себя как надежный и удобный в использовании анализатор. Прибор не требует для работы специальных навыков от оператора и может быть успешно использован сотрудником ветеринарной лаборатории или клиники после прохождения краткого обучения. Во время анализа на экране отображаютя подсказки для пользователя. Также к достоинствам данного анализатора относится быстрое получение результатов исследования (35 сек), портативность прибора и удобство работы.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Slider7

