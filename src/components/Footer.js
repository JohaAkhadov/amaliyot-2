import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_items">
            <div className="fi_logo">
                <img src="./img/logo-dv-simvol_vectorized_vectorized20 1.png" alt="" />
                <h1>OOO “ДИАКОН-ВЕТ”</h1>
            </div>
            <img src="./img/image 20.png" alt="" />
            <p>ООО «ДИАКОН-ВЕТ»: ветеринарное оборудование и приборы, диагностические реагенты для лабораторий и клиник</p>
            <p>Компания осуществляет свою работу по упрощенной системе налогообложения (УСН) в соответствии со ст. 346.12 НК РФ</p>
            <span>Политика обработки <br /> персональных данных</span>
            <span>Положение об <br /> антикоррупционной политике</span>
        </div>
        <div className="footer_items">
            <h1>Реагенты</h1>
            <p>Реагенты для биохимических <br /> анализаторов</p>
            <p>Диагностические профили</p>
            <p>Реагенты ДиаВетТест</p>
            <p>Реагенты BSBE</p>
            <p>Реагенты Skyla</p>
            <p>Контрольные материалы</p>
            <p>Реагенты для <br /> гематологических <br /> анализаторов</p>
            <p>Dymind</p>
            <p>URIT</p>
        </div>
        <div className="footer_items">
            <h1>Ветоборудование</h1>
            <p>Биохимические анализаторы</p>
            <p>Гематологические анализаторы</p>
            <p>Мочевая химия</p>
            <p>Анализаторы электролитов</p>
            <p>Функциональная диагностика</p>
            <p>Экспресс-диагностика</p>
            <p>Общее лабораторное <br /> оборудование</p>
            <p>Коагуляторы</p>
            <p>Центрифуги</p>
            <p>Дозаторы</p>
            <p>Ветлаборатория под ключ</p>
        </div>
        <div className="footer_items">
            <NavLink to="/">Компания</NavLink>
            <NavLink to="stati">Статьи</NavLink>
            <NavLink to="service">Сервис</NavLink>
            <NavLink to="stock">Акции</NavLink>
            <NavLink to="delivery">Доставка и оплата</NavLink>
            <NavLink to="diler">Дилерам</NavLink>
            <NavLink to="news">Новости</NavLink>
            <NavLink to="video">Видео</NavLink>
            <NavLink to="contact">Контакты</NavLink>
        </div>
        <div className="footer_items">
            <h1>+7 (499) 372-24-62</h1>
            <h1>+7 (499) 130-05-25</h1>
            <div className="fi_contact_divs">
                <div className="fic_div">
                    <img src="./img/Group 1083.png" alt="" />
                    <p>info@diakonvet.ru</p>
                </div>
                <div className="fic_div">
                    <img src="./img/Group 87.png" alt="" />
                    <p>@diakonvet</p>
                </div>
            </div>
            <p>Московская область, г. Пущино, улица Грузовая, 1А, 142290</p>
            <button>Заказать консультацию</button>
        </div>
    </div>
  )
}

export default Footer