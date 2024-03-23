import React from 'react'
import Slider from '../components/Slider'
import SliderProduct from '../components/SliderProduct'
import SliderProduct2 from '../components/SliderProduct2'
import SliderProduct3 from '../components/SliderProduct3'
import Slider4 from '../components/Slider4'
import Slider5 from '../components/Slider5'
import Slider6 from '../components/Slider6'
import Slider7 from '../components/Slider7'
import Slider8 from '../components/Slider8'

function Home() {
  return (
    <div className='home'>
      <Slider />
      <div className="home_products">
        <h1 className='hp_h1'>Товары и услуги</h1>
        <span>Компания «ДИАКОН-ВЕТ» поставляет ветеринарную продукцию, предлагая комплексное оснащение клиник и лабораторий оборудованием, реагентами и расходными материалами, включая послепродажное сервисное обслуживание.​</span>
        <div className="home_pr_divs">
          <div className="home_pr_div">
            <img src="./img/1 2.png" alt="" />
            <h1>Лабораторная диагностика</h1>
          </div>
          <div className="home_pr_div">
            <img src="./img/1 2 (2).png" alt="" />
            <h1>Функциональная диагностика</h1>
          </div>
          <div className="home_pr_div">
            <img src="./img/1 2 (3).png" alt="" />
            <h1>Терапия и хирургия</h1>
          </div>
          <div className="home_pr_div">
            <img src="./img/1 2 (4).png" alt="" />
            <h1>Общелабораторное оборудование</h1>
          </div>
          <div className="home_pr_div">
            <img src="./img/1 2 (5).png" alt="" />
            <h1>Сервис</h1>
          </div>
          <div className="home_pr_all_divs">
            <h1>Вся продукция</h1>
          </div>
        </div>
      </div>
      <SliderProduct header={'Хиты продаж'} />
      <div style={{ backgroundColor: "#DFE6EF" }} className="slider_pr">
        <h1 className="sp_h1">Хиты продаж</h1>
        <div className="sp_products">
          <div className="slider_product">
            <img src="./img/7 2.png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2.png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
        </div>
      </div>
      <SliderProduct2 header={'Наши новинки'} />
      <div className="slider_pr">
        <h1 className="sp_h1">Наши новинки</h1>
        <div className="sp_products">
          <div className="slider_product">
            <img src="./img/7 2.png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2.png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
        </div>
      </div>
      <SliderProduct3 header={'Акции'} />
      <div style={{ backgroundColor: "#DFE6EF" }} className="slider_pr">
        <h1 className="sp_h1">Акции</h1>
        <div className="sp_products">
          <div className="slider_product">
            <img src="./img/7 2.png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2.png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
          <div className="slider_product">
            <img src="./img/7 2 (1).png" alt="" />
            <h1>Автоматический гематологический анализатор DF50 Vet</h1>
            <p>Автоматический гематологический анализатор DF50 Vet</p>
          </div>
        </div>
      </div>
      <section style={{
        backgroundImage: `url('./img/Rectangle 7.png')`
      }} className="zayavka">
        <div className="zayavka_left">
          <h1>Получите <b>БЕСПЛАТНО</b> методические рекомендации по применению наборов реагентов «ДиаВетТест»</h1>
          <p>Для биохимических исследований сыворотки (плазмы) крови животных на автматическом анализаторе</p>
        </div>
        <div className="zayavka_div">
          <h1>Заявка</h1>
          <p className='zd_p'>Заполните Ваши контактные данные и мы отправим «Методические рекомендации»</p>
          <div className="zayavka_inputs">
            <div className="zayavka_input">
              <input type="text" placeholder='Имя' />
              <img src="./img/_.png" alt="" />
            </div>
            <div className="zayavka_input">
              <input type="email" placeholder='E-mail' />
              <img src="./img/_.png" alt="" />
            </div>
            <div className="zayavka_input">
              <input type="number" placeholder='Телефон' />
              <img src="./img/_.png" alt="" />
            </div>
          </div>
          <div className="zayavka_center">
            <div className="zc_left">
              <img src="./img/image 16.png" alt="" />
            </div>
            <div className="zc_right">
              <button>Отправить</button>
            </div>
          </div>
          <div className="zayavka_bottom">
            <input type="checkbox" />
            <p>Нажимая кнопку «Отправить», я даю свое <span>согласие на обработку моих персональных данных</span>, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных</p>
          </div>
        </div>
      </section>
      <SliderProduct3 header={'Новости'} />

      <div style={{ backgroundColor: "#DFE6EF" }} className="slider_pr">
        <h1 className="sp_h1">Новости</h1>
        <div className="sp_products">
          <div className="slider3">
            <img src="./img/Rectangle 13.png" alt="" />
            <h1>XXIX Московский Международный Ветеринарный Конгресс</h1>
          </div>
          <div className="slider3">
            <img src="./img/Rectangle 14.png" alt="" />
            <h1>Программа повышения квалификации “Биохимические исследования”</h1>
          </div>
          <div className="slider3">
            <img src="./img/Rectangle 15.png" alt="" />
            <h1>Семинар “Современные подходы в лабораторной  диагностике”</h1>
          </div>
          <div className="slider3">
            <img src="./img/Rectangle 16.png" alt="" />
            <h1>Выставка ЗООИНДУСТРИЯ 2021</h1>
          </div>
          <div className="slider3">
            <img src="./img/Rectangle 13.png" alt="" />
            <h1>XXIX Московский Международный Ветеринарный Конгресс</h1>
          </div>
          <div className="slider3">
            <img src="./img/Rectangle 14.png" alt="" />
            <h1>Программа повышения квалификации “Биохимические исследования”</h1>
          </div>
          <div className="slider3">
            <img src="./img/Rectangle 15.png" alt="" />
            <h1>Семинар “Современные подходы в лабораторной  диагностике”</h1>
          </div>
          <div className="slider3">
            <img src="./img/Rectangle 16.png" alt="" />
            <h1>Выставка ЗООИНДУСТРИЯ 2021</h1>
          </div>
        </div>
      </div>
      <div className="home_texts">
        <p>Современное ветеринарное оборудование – это специализированные приборы и аппараты для диагностики и лечения заболеваний, адаптированные для оказания медицинской помощи животным. ООО «ДИАКОН-ВЕТ» предлагает купить оборудование для ветеринарной клиники в Москве. В нашем каталоге представлен широкий ассортимент лабораторных и диагностических приборов, необходимых расходников для анализаторов, медицинского оборудования для операционных и терапии животных. Это — техника, которая поможет ветеринарному врачу поставить точный диагноз и провести эффективное лечение.</p>
        <p>Современное ветеринарное оборудование – это специализированные приборы и аппараты для диагностики и лечения заболеваний, адаптированные для оказания медицинской помощи животным. ООО «ДИАКОН-ВЕТ» предлагает купить оборудование для ветеринарной клиники в Москве. В нашем каталоге представлен широкий ассортимент лабораторных и диагностических приборов, необходимых расходников для анализаторов, медицинского оборудования для операционных и терапии животных. Это — техника, которая поможет ветеринарному врачу поставить точный диагноз и провести эффективное лечение.</p>
      </div>
      <Slider4 header={'Рекомендации по выбору оборудования'} />
      <section className="home_stati">
        <h1 className='hs_header'>Статьи</h1>
        <div className="hs_divs">
          <div className="hs_div">
            <img src="./img/Rectangle 33.png" alt="" />
            <h1>Рекомендации по техническому обслуживанию лабораторного оборудования</h1>
            <p>После пусконаладки и ввода в эксплуатацию лабораторное оборудование необходимо периодически проверять и обслуживать.</p>
            <div className="hs_div_time">
              <span>Действует до: 26 апреля 2021</span>
            </div>
          </div>
          <div className="hs_div">
            <img src="./img/Rectangle 33 (1).png" alt="" />
            <h1>Миниатюризация как тенденция в ветеринарной функциональной диагностике</h1>
            <p>До появления инструментов функциональной диагностики проверить состояние того или иного органа не всегда было возможно без хирургического вмешательства.</p>
            <div className="hs_div_time">
              <span>Действует до: 28 апреля 2021</span>
            </div>
          </div>
          <div className="hs_div">
            <img src="./img/Rectangle 33 (2).png" alt="" />
            <h1>Преимущества газового наркоза перед инъекционным</h1>
            <p>В ветеринарии используется два основных вида наркоза: инъекционный и газовый.</p>
            <div className="hs_div_time">
              <span>Действует до: 26 апреля 2021</span>
            </div>
          </div>
        </div>
      </section>
      <Slider5 header={'Видео'} />
      <div style={{ backgroundColor: "#DFE6EF" }} className="slider_pr">
        <h1 className="sp_h1">Видео</h1>
        <div className="sp_products">
          <div className="slider5_div">
            <img src="./img/Rectangle 33 (3).png" alt="" />
            <h1>Участие в Национальной Ветеринарной Конференции</h1>
          </div>
          <div className="slider5_div">
            <img src="./img/Rectangle 33 (4).png" alt="s" />
            <h1>Основы использования биохимического анализатора Skyla VB1</h1>
          </div>
          <div className="slider5_div">
            <img src="./img/Rectangle 33 (5).png" alt="" />
            <h1>Пуско-наладка 5-diff гематологического анализатора DF-50</h1>
          </div>
          <div className="slider5_div">
            <img src="./img/Rectangle 33 (3).png" alt="" />
            <h1>Участие в Национальной Ветеринарной Конференции</h1>
          </div>
          <div className="slider5_div">
            <img src="./img/Rectangle 33 (4).png" alt="s" />
            <h1>Основы использования биохимического анализатора Skyla VB1</h1>
          </div>
          <div className="slider5_div">
            <img src="./img/Rectangle 33 (5).png" alt="" />
            <h1>Пуско-наладка 5-diff гематологического анализатора DF-50</h1>
          </div>
        </div>
      </div>
      <Slider6 header={'Бренды'} />
      <div className="slider_pr">
        <h1 className="sp_h1">Бренды</h1>
        <p className='sp_p'>У нас Вы можете купить ветеринарное оборудование ведущих производителей из Китая, Южной Кореи, Испании и т.д.</p>
        <div className="sp_products">
          <div className="slider6_div">
            <img src="./img/Rectangle 19.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 20.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 21.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 22.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 23.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 24.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 19.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 20.png" alt="" />
          </div>

          <div className="slider6_div">
            <img src="./img/Rectangle 21.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 22.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 23.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 24.png" alt="" />
          </div>
        </div>
      </div>
      <section className="sotr">
        <h1 className='sotr_h1'>Сотрудничая с нами, Вы получаете</h1>
        <div className="sotr_divs">
          <div className="sotr_div">
            <img src="./img/Component 70.png" alt="" />
            <h1>Индивидуальный <br /> подход</h1>
            <p>к каждому заказчику</p>
          </div>
          <div className="sotr_div">
            <img src="./img/Component 71.png" alt="" />
            <h1>Скидку при комплексном <br /> оснащении</h1>
            <p>до 20%</p>
          </div>
          <div className="sotr_div">
            <img src="./img/Component 72.png" alt="" />
            <h1>Рассрочка <br />
              платежа</h1>
            <p>на дорогостоящее оборудование</p>
          </div>
          <div className="sotr_div">
            <img src="./img/Component 73.png" alt="" />
            <h1>Послепродажное <br /> обслуживание</h1>
            <p>на все приборы</p>
          </div>
        </div>
      </section>
      <Slider7 header={'Рекомендации и благодарности'} />
      <div className="slider_pr">
        <h1 className="sp_h1">Рекомендации и благодарности</h1>
        <div className="sp_products">
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
        </div>
      </div>
      <Slider8 header={'Наши клиенты'} />
      <div style={{ backgroundColor: "#DFE6EF" }} className="slider_pr">
        <h1 className="sp_h1">Наши клиенты</h1>
        <div className="sp_products">
          <div className="slider6_div">
            <img src="./img/Rectangle 19.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 20.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 21.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 22.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 23.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 24.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 19.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 20.png" alt="" />
          </div>

          <div className="slider6_div">
            <img src="./img/Rectangle 21.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 22.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 23.png" alt="" />
          </div>
          <div className="slider6_div">
            <img src="./img/Rectangle 24.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home