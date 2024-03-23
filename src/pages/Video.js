import React from 'react'
import { NavLink } from 'react-router-dom'

function Video() {
  return (
    <div className='video'>
      <h1 className='video_header'>Видеогалерея</h1>
      <div className="video_divs">
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (7).png" alt="" />
          <h1>Запуск URIT 3020 в Муравленко</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (8).png" alt="" />
          <h1>Основы использования биохимического анализатора Skyla VB1</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (9).png" alt="" />
          <h1>Пуско-наладка 5-diff гематологического анализатора DF-50</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (10).png" alt="" />
          <h1>Пуско-наладка гематологического анализатора URIT 3020</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (11).png" alt="" />
          <h1>Запуск URIT 3020 в Муравленко</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (12).png" alt="" />
          <h1>Основы использования биохимического анализатора Skyla VB1</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (7).png" alt="" />
          <h1>Запуск URIT 3020 в Муравленко</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (12).png" alt="" />
          <h1>Основы использования биохимического анализатора Skyla VB1</h1>
        </NavLink>
        <NavLink to="/video-info" className="video_div">
          <img src="./img/Rectangle 33 (13).png" alt="" />
          <h1>Пуско-наладка 5-diff гематологического анализатора DF-50</h1>
        </NavLink>
      </div>
    </div>
  )
}

export default Video