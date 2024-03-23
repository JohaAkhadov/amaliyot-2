import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';

function NewsInfo() {
    const [card, setCard] = useState({})
    const { id } = useParams(); // id ni useParams orqali olish
    useEffect(() => {
        axios
            .get(`http://localhost:5000/novosti/${id}`) // `id` ni ishlatish uchun o'zgarish
            .then((response) => {
                setCard(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <div className='newsinfo'>
            <Link className='nia' to={'/news'}>
                <img src="../img/image 2 (1).png" alt="" />
                <p>— Новости</p>
            </Link>
            <h1>{card.title}</h1>
            <div className="ni_div">
                <img src={card.img} alt="" />
                <p>{card.paragraph}</p>
            </div>
            
            <NavLink className="ni_a" to="/news">
                Ко всем новостям
            </NavLink>
        </div>
    )
}

export default NewsInfo;
