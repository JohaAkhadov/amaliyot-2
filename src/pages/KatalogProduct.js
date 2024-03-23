import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addItem } from '../redux/action';

function KatalogProduct() {
  const [counter, setCounter] = useState(1);
  const [targetCard, setTargetCard] = useState({});
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/${id}`)
      .then((response) => {
        setTargetCard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  }

  function katalog_modal() {
    setModal(!modal);
  }

  const dispatch = useDispatch();

  function handleAddToCart() {
    setModal(false)
    const item = {
      id: targetCard.id,
      img: targetCard.img,
      article: targetCard.article,
      price: targetCard.price,
      header: targetCard.header,
      inbase: targetCard.inbase,
      cat: targetCard.cat,
    };
    dispatch(addItem(item));
  }

  return (
    <div className='katalogProduct'>
      <Link to={'/katalog'}>
        <img src="../img/image 2 (1).png" alt="" />
        <p>— Ветеринарное оборудование</p>
      </Link>
      <div className="kp_bottom">
        <div className="kpb_imges">
          <img className='kpbi_left' src={targetCard.img} alt="" />
          <div className="kpbi_div">
            <img className='kpbid_img' src={targetCard.img} alt="" />
            <div className="kpbid_teg">
              <p>Хит продаж</p>
            </div>
            <div className="kpbid_teg">
              <span>Trade-in</span>
            </div>
          </div>
        </div>
        <div className="kpb_text">
          <h1 className='kpb_text_h1'>{targetCard.header}</h1>
          <div className="kpbt_center">
            <div className="kpbtc_text">
              <p>Категории: <span>{targetCard.type}</span></p>
              <p>Бренд: <span>{targetCard.brand}</span></p>
            </div>
            <div className="kpbtc_imges">
              <div className="kpbtc_img">
                <img src="../img/Group 1073.png" alt="" />
              </div>
              <div className="kpbtc_img">
                <img src="../img/Group 1078.png" alt="" />
              </div>
            </div>
          </div>
          <div className="kpbt_bottom">
            <div className="kpbt_bottom_top">
              <h1>{targetCard.inbase === "Нет в наличии" ? `${targetCard.price}₽` : <p>Цена по запросу</p>}</h1>
              <span>{targetCard.inbase === "Нет в наличии" ? "Нет" : <img src="../img/Vector 159 (1).png" alt="" />} в наличии</span>
            </div>
            <div className="kpbt_bottom_bottom">
              <div className="katalog_counter">
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
              </div>
              <div className='katalog_button'>
                {targetCard.inbase === "Нет в наличии" ? (
                  <button onClick={handleAddToCart}>Предзаказ</button>
                ) : (
                  <button onClick={katalog_modal}>Запросить цену</button>
                )}
              </div>
              <button className="btn_like">
                <img src="../img/Union.png" alt="" />
              </button>
              <p>Задать вопрос</p>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="katalog_modal">
          <div className="kat_modal_exit" onClick={katalog_modal}>x</div>
          <div className="km_main">
            <h1 className='km_main_h1'>Запросить цену</h1>
            <div className="km_main_line"></div>
            <div className="km_main_top_div">
              <img className='kmmtd_img' src={targetCard.img} alt="" />
              <div className="kmmtd_text">
                <h1>{targetCard.header}</h1>
                <p>{targetCard.id}</p>
              </div>
              <p className='kmmtd_p'>{counter} шт.</p>
            </div>
            <div className="km_main_line"></div>
            <div className="km_inputs">
              <div className="km_input">
                <input type="text" placeholder='Имя' />
                <img src="../img/_ (1).png" alt="" />
              </div>
              <div className="km_input">
                <input type="number" placeholder='Телефон' />
                <img src="../img/_ (1).png" alt="" />
              </div>
            </div>
            <div className="km_bottom">
              <div className="km_bottom_top">
                <img src="../img/image 16 (1).png" alt="" />
                <button onClick={handleAddToCart} className='btnGreen'>Отправить</button>
              </div>
              <div className="km_bottom_bottom">
                <input type="checkbox" />
                <p>Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KatalogProduct;