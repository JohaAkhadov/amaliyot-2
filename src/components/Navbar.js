import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Navbar() {
    const state = useSelector((state) => state.handleCart);
    const [modal, setModal] = useState(true)
    function rwdFunc() {
        setModal(!modal)
    }
    return (
        <>

            <div className='navbar'>
                <div className="navigation_top">
                    <div className="logo">
                        <button className='btnRWD' onClick={rwdFunc}>
                            <img style={{ width: "30px" }} src="../img/Hamburger_icon.svg.png" alt="" />
                        </button>
                        <img src="../img/image 2.png" alt="" />
                        <h1>ВСЁ ДЛЯ УСПЕШНОГО <br />
                            ВЕТЕРИНАРНОГО БИЗНЕСА</h1>
                    </div>
                    <div className="nv_top_text">
                        <h1><img src="../img/Group.png" alt="" />+7 (499) 130-05-25</h1>
                        <button>Заказать звонок</button>
                        <img src="../img/Vector 28.png" alt="" />
                        <span>info@diakonvet.ru</span>
                    </div>
                    <div className="nv_top_right">
                        <NavLink to="/profile">
                            <img src="../img/Group 1060.png" alt="" />
                        </NavLink>
                        <img src="../img/Vector 28.png" alt="" />
                        <NavLink style={{ textDecoration: 'none' }} to="cart" className="box">
                            <img src="../img/Group 1058.png" alt="" />
                            <span>{state.length}</span>
                        </NavLink>
                        <button><img src="../img/Group 2.png" alt="" /></button>
                    </div>
                </div>
                {
                    modal && (
                        <div className="navigation_bottom">
                            <ul>
                                <li><NavLink to="/">Компания</NavLink></li>
                                <li><NavLink to="katalog">Каталог</NavLink></li>
                                <li><NavLink to="service">Сервис</NavLink></li>
                                <li><NavLink to="stock">Акции</NavLink></li>
                                <li><NavLink to="delivery">Доставка и оплата</NavLink></li>
                                <li><NavLink to="diler">Дилерам</NavLink></li>
                                <li><NavLink to="news">Новости</NavLink></li>
                                <li><NavLink to="stati">Статьи</NavLink></li>
                                <li><NavLink to="video">Видео</NavLink></li>
                                <li><NavLink to="contact">Контакты</NavLink></li>
                            </ul>
                            <button className='btnRWD btnRWD2' onClick={rwdFunc}>
                                <img style={{ width: "30px" }} src="../img/Hamburger_icon.svg.png" alt="" />
                            </button>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default Navbar