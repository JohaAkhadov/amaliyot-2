import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import getUID from 'uid-generator-package';

function Oformleniye() {
    const [card, setCard] = useState(
        {
            id:'',
            familiya: '',
            organizatsiya: '',
            email: '',
            telefon: '',
            adres: '',
            komentariya: ''
        }
    )
    const cartItems = useSelector((state) => state.handleCart);
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.ms;
        }, 0);
    }
    function getCard(e) {
        setCard({
          ...card,
          [e.target.name]: e.target.value
        });
    }

    function clear() {
        setCard({
            id: '',
            familiya: '',
            organizatsiya: '',
            email: '',
            telefon: '',
            adres: '',
            komentariya: ''
        });
    }
    const navigate = useNavigate()
    function addFunction() {
        if (card.familiya.length > 0 && cartItems.length > 0) {
          if (card.id === '') {
            axios.post("http://localhost:5000/zakazlar", { ...card, id: getUID() })
          }
          else {
            axios.put(`http://localhost:5000/zakazlar/${card.id}`)
          }
          clear()
          navigate('/oformodal')
        }
        else {
          alert('Please fill in the all blanks!')
        }
      }

    return (
        <div className='oformleniye'>
            <Link to={'/katalog'}>
                <img src="../img/image 2 (1).png" alt="" />
                <p>— Корзина</p>
            </Link>
            <h1 className='o_header'>Оформление заказа</h1>
            <div className="ol_or_right">
                <div className="oformleniye_left">
                    <section className="oformleniye1">
                        <div className="oformleniye_top">
                            <h1>1. Товары в заказе</h1>
                            <p>Изменить</p>
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
                                        <h1 className='cart_price'>{item.price}₽</h1>
                                        <p>{item.ms} шт.</p>
                                        <h1 className='cart_price'>{item.price * item.ms}₽</h1>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="promo">
                            <h1 className='promoHeader'>Введите промокод для скидки:</h1>
                            <div className="oformlenoye1_bottom">
                                <div className="promoInput">
                                    <input type="text" />
                                    <img src="../img/Rectangle 60.png" alt="" />
                                </div>
                                <button>Далее</button>
                            </div>
                        </div>
                    </section>
                    <section className="oformleniye2">
                        <div className="oformleniye_top">
                            <h1>2. Регион доставки</h1>
                            <p>Изменить</p>
                        </div>
                        <div className="oform_lico">
                            <h1 className='ol_type'>Тип плательщика</h1>
                            <div className="ol_checks">
                                <div className="ol_check">
                                    <input name='type' type="radio" />
                                    <p>Физическое лицо</p>
                                </div>
                                <div className="ol_check">
                                    <input name='type' type="radio" />
                                    <p>Юридическое лицо</p>
                                </div>
                            </div>
                            <div className="ol_loc">
                                <h1>Местоположение</h1>
                                <div className="ol_loc_input">
                                    <img src="../img/search.png" alt="" />
                                    <input type="text" placeholder='Введите название' />
                                </div>
                                <p>Выберите свой город в списке. Если вы не нашли свой город, выберите "другое местоположение", а город впишите в поле "Город"</p>
                            </div>
                            <div className="ol_buttons">
                                <button className='ol_button'>Назад</button>
                                <button className='ol_button'>Далее</button>
                            </div>
                        </div>
                    </section>
                    <section className="oformleniye3">
                        <div className="oformleniye_top">
                            <h1>3. Доставка</h1>
                            <p>Изменить</p>
                        </div>
                        <div className="o3_top">
                            <div className="o3_top_imges">
                                <img src="../img/Group 1173.png" alt="" />
                                <img src="../img/Group 1171.png" alt="" />
                                <img src="../img/Group 1174.png" alt="" />
                                <img src="../img/Group 1175.png" alt="" />
                                <img src="../img/Group 1176.png" alt="" />
                                <img src="../img/Group 1177.png" alt="" />
                            </div>
                            <img className='o3_top_right' src="../img/Group 322.png" alt="" />
                        </div>
                        <div className="promo">
                            <h1 className='promoHeader'>Применить купон:</h1>
                            <div className="promoInput">
                                <input type="text" />
                                <img src="../img/Rectangle 60.png" alt="" />
                            </div>
                        </div>
                        <div className="ol_buttons">
                            <button className='ol_button'>Назад</button>
                            <button className='ol_button'>Далее</button>
                        </div>
                    </section>
                    <section className="oformleniye4">
                        <div className="oformleniye_top">
                            <h1>4. Самовывоз</h1>
                            <p>Изменить</p>
                        </div>
                        <div className="oformleniye_location">
                            <iframe className='oformleniye_map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6131044.253373623!2d64.6085751!3d41.38116805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1709750010708!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div className="ol_text">
                                <p>Пункты самовывоза:</p>
                                <h1>Московская область, г. Пущино, пр-т Науки, д. 5</h1>
                            </div>
                        </div>
                        <div className="oformleniye4_divs">
                            <div className="oformleniye4_div">
                                <img src="../img/image 8.png" alt="" />
                                <div className="o5_div_text">
                                    <h1>«Склад Нагатино»</h1>
                                    <p>
                                        г. Москва, ул. Нагатинская, д.1, стр. 2
                                        Телефон: +7 (499) 788-78-58
                                        Режим работы: Пн.-Пт. с 9:00 до 16:00, Сб.-Вс.- выходной день
                                        Описание: Здесь вы найдёте товары ведущих производителей мира
                                    </p>
                                </div>
                                <button className='ofor_btn'>Выбрать</button>
                            </div>
                            <div className="oformleniye4_div">
                                <img src="../img/image 8.png" alt="" />
                                <div className="o5_div_text">
                                    <h1>«Склад Нагатино»</h1>
                                    <p>
                                        г. Москва, ул. Нагатинская, д.1, стр. 2
                                        Телефон: +7 (499) 788-78-58
                                        Режим работы: Пн.-Пт. с 9:00 до 16:00, Сб.-Вс.- выходной день
                                        Описание: Здесь вы найдёте товары ведущих производителей мира
                                    </p>
                                </div>
                                <button className='ofor_btn'>Выбрать</button>
                            </div>
                        </div>
                    </section>

                    <section className="oformleniye5">
                        <div className="oformleniye_top">
                            <h1>5. Оплата</h1>
                            <p>Изменить</p>
                        </div>
                        <div className="o5_top_imges">
                            <div className="o5ti_left">
                                <img src="../img/but_arrow_right.png" alt="" />
                                <img src="../img/but_arrow_right (1).png" alt="" />
                            </div>
                            <div className="o5ti_right">
                                <h1>Банковские карты</h1>
                                <img src="../img/Frame.png" alt="" />
                                <p>Оплата производится наличными деньгами, в момент получения заказа. Подтверждением вашей оплаты является фискальный кассовый чек, вручаемый во время получения и оплаты заказа.</p>
                            </div>
                        </div>
                        <div className="promo">
                            <h1 className='promoHeader'>Применить купон:</h1>
                            <div className="promoInput">
                                <input type="text" />
                                <img src="../img/Rectangle 60.png" alt="" />
                            </div>
                        </div>
                        <div className="ol_buttons">
                            <button className='ol_button'>Назад</button>
                            <button className='ol_button'>Далее</button>
                        </div>
                    </section>
                    <section className="oformleniye6">
                        <div className="oformleniye_top">
                            <h1>5. Покупатель</h1>
                            <p>Изменить</p>
                        </div>
                        <div className="o6_body">
                            <form className='o6b_form'>
                                <label>ФИО*
                                    <input onChange={(e) => getCard(e)} name='familiya' type="text" />
                                </label>
                                <label>Организация*
                                    <input onChange={getCard} name='organizatsiya' type="text" />
                                </label>
                                <label>E-mail*
                                    <input onChange={getCard} name='email' type="email" />
                                </label>
                                <label>Телефон*
                                    <input onChange={getCard} name='telefon' type="number" />
                                </label>
                                <label>Адрес доставки*
                                    <input onChange={getCard} name='adres' type="text" />
                                </label>
                                <label>Комментарий к заказу
                                    <textarea onChange={getCard} name='komentariya' cols="30" rows="10"></textarea>
                                </label>
                            </form>
                            <div className="o6_form_bottom">
                                <input type="checkbox" />
                                <p>Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных</p>
                            </div>
                            <div className="ol_buttons">
                                <button className='ol_button'>Назад</button>
                                <button onClick={addFunction} className='ol_button'>Оформить заказ</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="oformleniye_right">
                    <div className="or_top">
                        <h1>Товаров на сумму:</h1>
                        <h1>{calculateTotalPrice()}₽</h1>
                    </div>
                    <hr className='o_hr' />
                    <div className="or_center">
                        <h1>Доставка:</h1>
                        <h1>0 ₽</h1>
                    </div>
                    <hr />
                    <div className="or_bottom">
                        <h1>Итого:</h1>
                        <h1>{calculateTotalPrice()}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oformleniye