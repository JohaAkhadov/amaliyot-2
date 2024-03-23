import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import NotFound from './NotFound';

function Service() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCards();
  }, []);

  function getCards() {
    axios.get("http://localhost:5000/service")
      .then((res) => setCards(res.data))
      .catch((err) => setError(err.message));
  }

  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  let filteredCards = cards.filter(card => card.header.toLowerCase().includes(searchTerm.toLowerCase()));
  const pageProducts = filteredCards.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCards.length / perPage); i++) {
    pageNumbers.push(i);
  }

  function handleClick(functionType) {
    if (functionType === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (functionType === "next" && currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className='service'>
      <h1 className='service_header'>Результаты поиска</h1>
      <div className="service_center">
        <input 
          type="text" 
          placeholder="Поиск по заголовку" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="service_cards">
        {pageProducts.length === 0 ? <NotFound/> : pageProducts.map((itm, index) => (
          <div key={index} className="kr_card">
            <div className="krc_favourite_div"></div>
            <img src={itm.img} alt="" />
            <h2>{itm.type}</h2>
            <h1>{itm.header}</h1>
            <p>{itm.price} ₽</p>
            <div className="krc_bottom">
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
      <div className="service_pagination">
        <div onClick={() => handleClick("prev")} className="krp_button">
          <img src="./img/Group 1052.png" alt="" />
        </div>
        {pageNumbers.map((number, index) => (
          <div
            onClick={() => setCurrentPage(number)}
            key={index}
            className={`krp_button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </div>
        ))}
        <div onClick={() => handleClick("next")} className="krp_button">
          <img src="./img/Group 1052 (1).png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Service;
