import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';

function StatiInfo() {
    const [card, setCard] = useState({})
    const { id } = useParams(); // id ni useParams orqali olish
    useEffect(() => {
        axios
            .get(`http://localhost:5000/stati/${id}`) // `id` ni ishlatish uchun o'zgarish
            .then((response) => {
                setCard(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <div className='newsinfo'>
            <Link className='nia' to={'/stati'}>
                <img src="../img/image 2 (1).png" alt="" />
                <p>— Stati</p>
            </Link>
            <h1>{card.title}</h1>
            <div className="ni_div">
                <img src={card.img} alt="" />
                <p>{card.paragraph}</p>
            </div>
            <div className="ni_div">
                <h1>Зачем нужно обслуживание</h1>
                <p>В ветеринарной практике, в отличие от медицинской, сервисное обслуживание лабораторий законодательно не регулируется. Но, если ветеринарное учреждение стремится к медицинским стандартам, необходимо придерживаться рекомендуемого регламента.
                    Законодательство регулирует техобслуживание всей техники, находящейся в эксплуатации, причем проводить его должны подготовленные специалисты, имеющие соответствующие сертификаты. Сервисные работы полезны и для самой лаборатории. Они позволяют:</p>
                <p>поддерживать технику работоспособной и исправной;<br />
                    замечать неисправности еще до момента, когда они станут критичными;<br />
                    продлевать срок службы оборудования.</p>
            </div>
            <div className="ni_div">
                <h1>Что входит в обслуживание</h1>
                <p>Плановый технический осмотр. Это проверка состояния аппаратов: специалисты осматривают оборудование, отмечают, насколько корректно оно работает, выявляют возможные неполадки. Если мастера обнаруживают отклонения от нормальной работы, они сообщают об этом и дают рекомендации по устранению сбоев. Мы рекомендуем обращаться за ремонтом к соответствующим специалистам: ремонт оборудования, произведенный неавторизованным персоналом, влечет за собой снятие прибора с гарантии.
                    Плановое техническое обслуживание. Это уход за аппаратурой: очистка ее от загрязнений, смазка узлов, затяжка ослабленных крепежей и устранение мелких неполадок. Если аппарату требуются какие-либо расходные материалы, они обновляются, а изношенные части заменяются. Само оборудование заново настраивается и регулируется, если это необходимо. Для конкретных аппаратов могут быть нужны и другие работы: они прописаны в эксплуатационных документах. В техобслуживание не могут входить крупный и капитальный ремонты, а также работы, которые изменяют изначальные характеристики аппарата. Метрологическая проверка в сервис тоже не входит – это отдельная манипуляция.</p>
            </div>
            <NavLink className="ni_a" to="/stati">
                Ко всем новостям
            </NavLink>
        </div>
    )
}

export default StatiInfo;
