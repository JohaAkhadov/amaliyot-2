import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, delItem } from '../redux/action';
import { NavLink } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(delItem(item));
  };

  const handleClearCart = () => {
    dispatch({ type: 'DELALLITEMS' });
  };



  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.ms;
    }, 0);
  };

  return (
    <div className='cart'>
      <h1 className='cartHeader'>Корзина</h1>
      <div className="cartBody">
        <div className="cartBodyTop">
          <div className="top_top">
            <button onClick={handleClearCart}>Очистить корзину</button>
          </div>
          <div className="top_bottom">
            <p>НАИМЕНОВАНИЕ</p>
            <p>КОЛИЧЕСТВО</p>
            <p>ЦЕНА</p>
            <p>СУММА</p>
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
        <div className="cartBottom">
            <div className="cartBottomDiv">
              <div className="promo">
                <h1 className='promoHeader'>Введите промокод для скидки:</h1>
                <div className="promoInput">
                  <input type="text" />
                  <img src="../img/Rectangle 60.png" alt="" />
                </div>
              </div>
              <div className="itogo">
                <h1 className='promoHeader'>Итого:</h1>
                <p>{calculateTotalPrice()}₽</p>
              </div>
              <NavLink to="/oformleniye" className='cartBtn'>Оформить заказ</NavLink>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Cart;