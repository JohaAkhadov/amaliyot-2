import React from 'react'
import { NavLink } from 'react-router-dom'

function Profile() {
    return (
        <div className='profile'>
            <h1 className='profile_header'>Личный кабинет</h1>
            <div className="profile_divs">
                <div className="profile_left">
                    <NavLink to="/lichniye" className="pl_div"><p>Личные данные</p></NavLink>
                    <NavLink to="/cart" className="pl_div"><p>Корзина</p></NavLink>
                    <NavLink to="/istoriya" className="pl_div"><p>История заказов</p></NavLink>
                    <NavLink to="/rekvizit" className="pl_div"><p>Реквизиты юрлица</p></NavLink>
                </div>
                <div className="profile_right">
                    <NavLink to="/lichniye" className="pr_div">
                        <img src="../img/Group 1060 (1).png" alt="" />
                        <h1>Личные данные</h1>
                    </NavLink>
                    <NavLink to="/cart" className="pr_div">
                        <img src="../img/Group 1058 (3).png" alt="" />
                        <h1>Корзина</h1>
                    </NavLink>
                    <NavLink to="/istoriya" className="pr_div">
                        <img src="../img/Group 217.png" alt="" />
                        <h1>История заказов</h1>
                    </NavLink>
                    <NavLink to="/rekvizit" className="pr_div">
                        <img src="../img/Group 1140.png" alt="" />
                        <h1>Реквизиты юридического лица</h1>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Profile