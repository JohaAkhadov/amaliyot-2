import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Stati() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);
  const [card, setCard] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/stati")
      .then((res) => setCard(res.data))
  }, [])
  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const pageProducts = card.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPageCount = Math.ceil(card.length / perPage);

  function handleClick(functionType) {
    if (functionType === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (functionType === "next" && currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <div className='stati'>
      <h1 className='stati_header'>Статьи</h1>
      <div className="stati_cards">
        {pageProducts.map((itm, ind) => (
          <NavLink to={`/stati-info/${itm.id}`} key={ind} className="stati_card">
            <img src={itm.img} alt="" />
            <h1>{itm.title}</h1>
            <h2>{itm.paragraph}</h2>
            <div className="sc_bottom">
              <p>26 апреля 2021</p>
            </div>
          </NavLink>
        ))}
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
  )
}

export default Stati