import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Katalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [cards, setCards] = useState([]);
  const [cardsFilter, setCardsFilter] = useState(cards)

  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((result) => {
        setCards(result.data);
        setCardsFilter(result.data);
      });
  }, []);
  const filterCards = (cat) => {
    const updatedList = cards.filter((x) => x.cat === cat);
    setCardsFilter(updatedList)
    setCurrentPage(1)
  }
  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;

  function handleClick(functionType) {
    if (functionType === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (functionType === "next" && currentPage <= pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  const pageProducts = cardsFilter.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(cards.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="katalog">
      <h1 className='katalog_h1'>Ветеринарное оборудование</h1>
      <div className="katalog_left">
        <div className="kl_div_n1">
          <div className="kldn1_left">
            <img src="./img/Group 1270.png" alt="" />
            <h1>Оборудование</h1>
          </div>
          <img src="./img/Vector 5.png" alt="" />
        </div>
        <div className="kl_div" onClick={() => setCardsFilter(cards)}>Ветеринарное оборудование</div>
        <div className="kl_div" onClick={() => filterCards("Иммуно")}>Иммуно-хроматографические анализаторы</div>
        <div className="kl_div" onClick={() => filterCards("Электрокардиографы")}>Электрокардиографы ветеринарные</div>
        <div className="kl_div" onClick={() => filterCards("Биохимические")}>Биохимические анализаторы</div>
        <div className="kl_div" onClick={() => filterCards("Гематологические")}>Гематологические
          анализаторы</div>
        <div className="kl_div" onClick={() => filterCards("Коагулометры")}>Коагулометры</div>
        <div className="kl_div" onClick={() => filterCards("Экспресс")}>Экспресс-диагностика</div>
        <div className="kl_div" onClick={() => filterCards("Терапия")}>Терапия и хирургия</div>
        <div className="kl_div" onClick={() => filterCards("Функциональная")}>Функциональная диагностика</div>
        <div className="kl_div" onClick={() => filterCards("Рентген")}>Рентген аппараты
          для ветеринарии</div>
        <div className="kl_div" onClick={() => filterCards("Центрифуги")}>Центрифуги</div>
        <div className="kl_div" onClick={() => filterCards("Дозаторы")}>Дозаторы</div>
        <div className="kl_div" onClick={() => filterCards("Биологические")}>Биологические микроскопы</div>
        <div className="kl_div" onClick={() => filterCards("Разное")}>Разное</div>
        <div className="kl_div_n1">
          <div className="kldn1_left">
            <img src="./img/Group 1269.png" alt="" />
            <h1>Реагенты</h1>
          </div>
          <img src="./img/Vector 5.png" alt="" />
        </div>
      </div>
      <div className="katalog_right">
        <div className="kr_cards">
          {pageProducts.map((itm, ind) => (
            <div class="kr_card">
              <div class="krc_favourite_div"></div>
              <img src={itm.img} alt="" />
              <h2>{itm.type}</h2>
              <h1>{itm.header}</h1>
              <p>{itm.price} ₽</p>
              <div class="krc_bottom">
                {itm.inbase === "В наличии" ? (
                  <span><img src="./img/Vector 159.png" alt="" />{itm.inbase}</span>
                ) : (
                  <span>{itm.inbase}</span>
                )}
                <NavLink to={`/katalog-product/${itm.id}`} className="krcb">
                  <img src="./img/Group 1058 (2).png" alt="" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className="kr_pagination">
          <div onClick={() => handleClick("prev")} className="krp_button">
            <img src="./img/Group 1052.png" alt="" />
          </div>
          {pageNumbers.map((number, index) => (
            <div
              onClick={() => setCurrentPage(number)}
              key={index}
              className="krp_button"
            >
              {number}
            </div>
          ))}
          <div onClick={() => handleClick("next")} className="krp_button">
            <img src="./img/Group 1052 (1).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Katalog;