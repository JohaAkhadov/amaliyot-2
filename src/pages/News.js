import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function News() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);

  useEffect(() => {
    getCards();
  }, []);

  function getCards() {
    axios.get("http://localhost:5000/novosti")
      .then((res) => setCards(res.data))
      .catch((error) => console.log("Axios xato:", error));
  }

  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const pageProducts = cards.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPageCount = Math.ceil(cards.length / perPage);

  function handleClick(functionType) {
    if (functionType === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (functionType === "next" && currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className='news'>
      <h1 className='n_header'>Новости</h1>
      <div className="news_divs">
        {
          pageProducts.map((itm, ind) => (
            <NavLink to={`/news-info/${itm.id}`} key={ind} className="news_div">
              <img src={itm.img} alt="" />
              <h1>{itm.title}</h1>
              <p>{itm.paragraph}</p>
            </NavLink>
          ))
        }
      </div>
      <div className="service_pagination">
        <div onClick={() => handleClick("prev")} className="krp_button">
          <img src="./img/Group 1052.png" alt="" />
        </div>
        {[...Array(totalPageCount)].map((_, index) => (
          <div
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            className={`krp_button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
        <div onClick={() => handleClick("next")} className="krp_button">
          <img src="./img/Group 1052 (1).png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default News;
