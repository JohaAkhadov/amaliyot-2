import React from 'react'

function Contact() {
  return (
    <div className='cantact'>
      <h1 className='contact_header'>Контакты</h1>
      <div className="contact_divs">
        <div className="contact_div">
          <div className="cd_left">
            <h1>Офис продаж»</h1>
            <hr />
            <p>142290 Россия, Московская область, г. Пущино, Д 20-А, 2 этаж</p>
            <div className="cl_contacts">
              <div className="cl_contact">
                <img src="./img/Group 347.png" alt="" />
                <p>+7 (499) 130-05-25</p>
              </div>
              <div className="cl_contact">
                <img src="./img/Group 346.png" alt="" />
                <p>info@diakonvet.ru</p>
              </div>
            </div>
            <span>Режим работы</span>
            <h5>пн-пт — с 9.00 до 16.00 <br /> сб-вс — выходной день</h5>
          </div>
          <div style={{
            backgroundImage: `url('./img/Mask Group (1).png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} className="cd_right">
            <img src="./img/Group 1123.png" alt="" />
          </div>
        </div>
        <div className="contact_div">
          <div className="cd_left">
            <h1>«Диакон-Вет» <br />
              в Пущино</h1>
            <hr />
            <p className='cd_left_p'>142290 Россия, Московская область, г. Пущино, Д 20-А, 2 этаж</p>
            <div className="cl_contacts">
              <div className="cl_contact">
                <img src="./img/Group 347.png" alt="" />
                <p>+7 (499) 130-05-25</p>
              </div>
              <div className="cl_contact">
                <img src="./img/Group 346.png" alt="" />
                <p>info@diakonvet.ru</p>
              </div>
            </div>
            <span>Режим работы</span>
            <h5>пн-пт — с 9.00 до 16.00 <br /> сб-вс — выходной день</h5>
          </div>
          <div style={{
            backgroundImage: `url('./img/Mask Group (1).png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} className="cd_right">
            <img src="./img/Group 1123.png" alt="" />
          </div>
        </div>
        <div className="contact_div">
          <div className="cd_left">
            <h1>Склад в Москве</h1>
            <hr />
            <p>142290 Россия, Московская область, г. Пущино, Д 20-А, 2 этаж</p>
            <div className="cl_contacts">
              <div className="cl_contact">
                <img src="./img/Group 347.png" alt="" />
                <p>+7 (499) 130-05-25</p>
              </div>
              <div className="cl_contact">
                <img src="./img/Group 346.png" alt="" />
                <p>info@diakonvet.ru</p>
              </div>
            </div>
            <span>Склад в Пущино</span>
            <h5>пн-пт — с 9.00 до 16.00 <br /> сб-вс — выходной день</h5>
          </div>
          <div style={{
            backgroundImage: `url('./img/Mask Group (1).png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} className="cd_right">
            <img src="./img/Group 1123.png" alt="" />
          </div>
        </div>
        <div className="contact_div">
          <div className="cd_left">
            <h1>Офис продаж»</h1>
            <hr />
            <p>142290 Россия, Московская область, г. Пущино, Д 20-А, 2 этаж</p>
            <div className="cl_contacts">
              <div className="cl_contact">
                <img src="./img/Group 347.png" alt="" />
                <p>+7 (499) 130-05-25</p>
              </div>
              <div className="cl_contact">
                <img src="./img/Group 346.png" alt="" />
                <p>info@diakonvet.ru</p>
              </div>
            </div>
            <span>Режим работы</span>
            <h5>пн-пт — с 9.00 до 16.00 <br /> сб-вс — выходной день</h5>
          </div>
          <div style={{
            backgroundImage: `url('./img/Mask Group (1).png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} className="cd_right">
            <img src="./img/Group 1123.png" alt="" />
          </div>
        </div>
      </div>
      <div className="contact_bottom">
        <div className="cb_top">
          <h1>Реквизиты компании</h1>
          <button>Скачать реквизиты</button>
        </div>
        <div className="cb_center">
          <div className="cc_div">
            <div className="cbd_texts">
              <h1>ООО «ДИАКОН-ВЕТ»</h1>
              <div className="ct_right">
                <p>Расчетный счет</p>
                <span>40702810602120000935</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="cc_div">
            <div className="cbd_texts">
              <div className="ct_left">
                <p>ОГРН </p>
                <span>1145043005447</span>
              </div>
              <div className="ct_right">
                <p>Адрес</p>
                <span>в ПАО «БАНК УРАЛСИБ»  г. Москва</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="cc_div">
            <div className="cbd_texts">
              <div className="ct_left">
                <p>ИНН/КПП </p>
                <span>5039010948/503901001</span>
              </div>
              <div className="ct_right">
                <p>Корреспондентский счет</p>
                <span>30101810100000000787</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="cc_div">
            <div className="cbd_texts">
              <div className="ct_left">
                <p>ОКПО </p>
                <span>34922395</span>
              </div>
              <div className="ct_right">
                <p>БИК</p>
                <span>044525787</span>
              </div>
            </div>
            <hr />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact