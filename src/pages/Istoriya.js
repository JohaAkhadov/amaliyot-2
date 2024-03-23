import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Istoriya() {
    const [zakazlar, setZakazlar] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/zakazlar")
            .then((res) => setZakazlar(res.data))
    }, [setZakazlar])
    function delFunc(itemId) {
        axios.delete(`http://localhost:5000/zakazlar/${itemId}`)
            .then(() => {
                setZakazlar(prevZakazlar => prevZakazlar.filter(item => item.id !== itemId));
            })
    }
    
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
                <div className="istoriya_right">
                    <h1 className='ir_header'>История заказов</h1>
                    <div className="ir_div">
                        <div className="ird_cats">
                            <div className="ird_cat">Текущие заказы</div>
                            <div className="ird_cat">История заказов</div>
                            <div className="ird_cat">Отмененные заказы</div>
                        </div>
                        <div className="ird_div">
                            <h1 className='ird_header'>Заказы в статусе “Принят, ожидается оплата”</h1>
                            <div className='ird_div_whites'>
                                <div className="ird_div_white">
                                    <h1 className='ird_white_header'>Заказ №12232  от  09.10.2018 15:40:49, 4 товара на сумму  690 000 ₽</h1>
                                    <div className="ird_div_white_blue">
                                        <h1>Параметры оплаты</h1>
                                        <p>Изменить способ оплаты</p>
                                    </div>
                                    <div className="ird_white_text">
                                        <h1>Счет №5/1 от 09.10.2018, Банковская карта</h1>
                                        <p>Ожидает оплаты</p>
                                        <span>Сумма к оплате по счету: 1 800 ₽</span>
                                    </div>
                                    <div className="ird_div_white_blue">
                                        <h1>Параметры оплаты</h1>
                                    </div>
                                    <div className="ird_white_text">
                                        <h1>Счет №5/1 от 09.10.2018, Банковская карта</h1>
                                        <p>Ожидает оплаты</p>
                                        <span>Сумма к оплате по счету: 1 800 ₽</span>
                                    </div>
                                    <div className="ird_white_buttons">
                                        {/* <div className="irdwb"> */}
                                        <NavLink to="/zakazinfo" className="ird_white_btn_left">Подробнее о заказе</NavLink>
                                        <div className="irdwb_buttons">
                                            <div className="irdwb_button">Повторить заказ</div>
                                            <div className="irdwb_button">Отменить заказ</div>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="ird_div_white">
                                    <h1 className='ird_white_header'>Заказ №12232  от  09.10.2018 15:40:49, 4 товара на сумму  690 000 ₽</h1>
                                    <div className="ird_div_white_blue">
                                        <h1>Параметры оплаты</h1>
                                        <p>Изменить способ оплаты</p>
                                    </div>
                                    <div className="ird_white_text">
                                        <h1>Счет №5/1 от 09.10.2018, Банковская карта</h1>
                                        <p>Ожидает оплаты</p>
                                        <span>Сумма к оплате по счету: 1 800 ₽</span>
                                    </div>
                                    <div className="ird_div_white_blue">
                                        <h1>Параметры оплаты</h1>
                                    </div>
                                    <div className="ird_white_text">
                                        <h1>Счет №5/1 от 09.10.2018, Банковская карта</h1>
                                        <p>Ожидает оплаты</p>
                                        <span>Сумма к оплате по счету: 1 800 ₽</span>
                                    </div>
                                    <div className="ird_white_buttons">
                                        {/* <div className="irdwb"> */}
                                        <NavLink to="/zakazinfo" className="ird_white_btn_left">Подробнее о заказе</NavLink>
                                        <div className="irdwb_buttons">
                                            <div className="irdwb_button">Повторить заказ</div>
                                            <div className="irdwb_button">Отменить заказ</div>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                                {
                                    zakazlar.map((itm, ind) => (
                                        <div key={ind} className="ird_div_white">
                                            <h1 className='ird_white_header'>{itm.familiya}</h1>
                                            <div className="ird_div_white_blue">
                                                <h1>Параметры оплаты</h1>
                                                <p>Изменить способ оплаты</p>
                                            </div>
                                            <div className="ird_white_text">
                                                <h1>{itm.familiya}</h1>
                                                <p>{itm.organizatsiya}</p>
                                                <span>{itm.adres}</span>
                                            </div>
                                            <div className="ird_div_white_blue">
                                                <h1>Параметры оплаты</h1>
                                            </div>
                                            <div className="ird_white_text">
                                                <h1>{itm.comentariya}</h1>
                                                <p>Ожидает оплаты</p>
                                                <span>Сумма к оплате по счету: ?</span>
                                            </div>
                                            <div className="ird_white_buttons">
                                                <NavLink to="/zakazinfo" className="ird_white_btn_left">Подробнее о заказе</NavLink>
                                                <div className="irdwb_buttons">
                                                    <div className="irdwb_button">Повторить заказ</div>
                                                    <div onClick={() => delFunc(itm.id)} className="irdwb_button">Отменить заказ</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Istoriya