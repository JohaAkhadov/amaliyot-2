import React from 'react'
import { NavLink } from 'react-router-dom'

function OforModal() {
    return (
        <div className="oforModalSuccess">
            <NavLink className='om_exit'  to="/oformleniye">X</NavLink>
            <div className="oms_text">
                <h1>Заказ сформирован</h1>
                <p>Ваш заказ №11 от 21.09.2020 18:37 успешно создан. Номер вашей оплаты: №11/1
                    Вы можете следить за выполнением своего заказа в Персональном разделе сайта. Обратите внимание, что для входа в этот раздел вам необходимо будет ввести логин и пароль пользователя сайта.</p>
                <NavLink to="/oformleniye">Закрыть</NavLink>
            </div>
        </div>
    )
}

export default OforModal