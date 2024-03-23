import React from 'react'
import { NavLink } from 'react-router-dom'

function Lichniye() {
    return (
        <div className='lichniye'>
            <h1 className='profiles_header'>Личный кабинет</h1>
            <div className="profiles_divs">
                <div className="profile_left">
                    <NavLink to="/lichniye" className="pl_div"><p>Личные данные</p></NavLink>
                    <NavLink to="/cart" className="pl_div"><p>Корзина</p></NavLink>
                    <NavLink to="/istoriya" className="pl_div"><p>История заказов</p></NavLink>
                    <NavLink to="/rekvizit" className="pl_div"><p>Реквизиты юрлица</p></NavLink>
                </div>
                <div className="profiles_right">
                    <h1>Личные данные</h1>
                    <p>Дата обновления: 09.10.2018 16:11:38
                        Последняя авторизация: 09.10.2018 16:11:38
                    </p>
                    <form className='profile_right_form'>
                        <label>Название организации*
                            <input type="text" />
                        </label>
                        <label>ФИО*
                            <input type="text" />
                        </label>
                        <label>E-mail*
                            <input type="text" />
                        </label>
                        <label>Телефон*
                            <input type="text" />
                        </label>
                        <label>Адрес*
                            <input type="text" />
                        </label>
                        <span>Пароль должен быть не менее 6 символов длиной.</span>
                        <label>Новый пароль
                            <input type="text" />
                        </label>
                        <label>Повторите новый пароль
                            <input type="text" />
                        </label>
                    </form>
                    <div className="profiles_buttons">
                        <div className="profiles_button">Сохранить</div>
                        <div className="profiles_button">Отменить</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lichniye