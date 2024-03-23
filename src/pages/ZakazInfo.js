import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { addItem, delItem } from '../redux/action';

function ZakazInfo() {
    const cartItems = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(addItem(item));
    };

    const handleDecrement = (item) => {
        dispatch(delItem(item));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.ms;
        }, 0);
    };

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
                <div className="zakaz_info_right">
                    <h1 className='zr_header'>Заказ №12232  от  09.10.2018 15:40:49, 4 товара на сумму 7 296 руб.</h1>
                    <div className="zir_div">
                        <div className="zd_top">
                            <h1>Информация о заказе</h1>
                        </div>
                        <div className='zd_bottom'>
                            <div className="zd_left">
                                <div className="zl_top">
                                    <div className="zt_texts">
                                        <p>ФИО</p>
                                        <p>Статус</p>
                                        <p>Сумма</p>
                                    </div>
                                    <div className="zt_line"></div>
                                </div>
                                <div className="zl_center">
                                    <p>Иванов Денис</p>
                                    <p>Выполнен</p>
                                    <p>690 000 ₽</p>
                                </div>
                                <div className="zl_bottom">
                                    <img src="../img/Group 199.png" alt="" />
                                    <p>Подробнее</p>
                                </div>
                            </div>
                            <button className='zd_btn'>Повторить заказ</button>
                        </div>
                    </div>
                    <div className="zir_div">
                        <div className="zd_top">
                            <h1>Информация о заказе</h1>
                        </div>
                        <div className="zd_left">
                            <div className="zl_top">
                                <div className="zt_texts">
                                    <p>Номер отгрузки</p>
                                    <p>Статус отгрузки</p>
                                    <p>Статус оплаты</p>
                                    <p>Стоимость доставки</p>
                                </div>
                                <div className="zt_line"></div>
                            </div>
                            <div className="zl_center">
                                <p>Отгрузка №5/2</p>
                                <p>Не отгружено</p>
                                <p>Без доставки</p>
                                <p>0 ₽</p>
                            </div>
                            <div className="zl_bottom">
                                <img src="../img/Group 199.png" alt="" />
                                <p>Показать все</p>
                            </div>
                        </div>
                    </div>
                    <div className="cartDivs">
                        {cartItems?.length === 0 ? (
                            <h1 className='cart_noItems'>Корзинка пока пусто</h1>
                        ) : (
                            cartItems?.map((item, index) => (
                                <div className='cartDiv' key={index}>
                                    <img className='cd_img' src={item.img} alt='' />
                                    <div className='cart_text'>
                                        <h1>{item.header}</h1>
                                        <p>{item.id}</p>
                                    </div>
                                    <div className='cart_counter'>
                                        <button onClick={() => handleDecrement(item)}>-</button>
                                        <p>{item.ms}</p>
                                        <button onClick={() => handleIncrement(item)}>+</button>
                                    </div>
                                    <h1 className='cart_price'>{item.price}₽</h1>
                                    <h1 className='cart_price'>{item.price * item.ms}₽</h1>
                                    <button className='cart_del' onClick={() => handleDecrement(item)}>X</button>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="zr_bottom">
                        <div className="zb_top">
                            <h1>Стоимость доставки:</h1>
                            <p>500 ₽</p>
                        </div>
                        <div className="zb_center">
                            <h1>Итого:</h1>
                            <p>{calculateTotalPrice()} ₽</p>
                        </div>
                        <div className="zb_bottom">
                            <NavLink to="/istoriya">Вернуться в список заказов</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZakazInfo