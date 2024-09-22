
import React from 'react';
import { Link } from "react-router-dom";
import lang from "../../img/website/lang.svg"
import Telegram from "../../img/website/Telegram.svg"
import VK from "../../img/website/VK.svg"
import Whatsapp from "../../img/website/Whatsapp.svg"
const Footer = () =>{
  return(
    <div className='footer'>
      <Link className='logo-link link' to="/">
          <div className='footer-logo logo'>
            QPICK
          </div>
        </Link>
      <div className='footer-left-href'>
        <Link className='footer-href-a link' to="/Favorite">Избранное</Link>
        <Link className='footer-href-a link' to="/CartShell">Корзина</Link>
        <Link className='footer-href-a link' to="/Contacts">Контакты</Link>
      </div>

      <div className='footer-right-href'>
        <Link className='footer-href-a link' to="/Conditions">Условия сервиса</Link>
        <div className='footer-right-href-changeLang'>
          <div className='footer-right-href-changeLang-lang'>
          <img alt='lang' src={lang}>
          </img>
          </div>
          <div className='footer-right-href-changeLang-ru selectlang'>
            Рус
          </div>
          <div className='footer-right-href-changeLang-en'>
            Eng
          </div>
        </div>
      </div>
        
      {/* </div> */}
      <div className='footer-socialIcon'>
        <a className='footer-href-a link' href='https://vk.com/neoflex_ru'>
          <img className='footer-href-img' alt='VK' src={VK}>
          </img>
        </a>
        <a className='footer-href-a link' href='https://t.me/neoflexcareers'>
            <img className='footer-href-img' alt='Telegram' src={Telegram}>
            </img>
        </a>
        <a className='footer-href-a link' href='https://wa.me/0000000000000000000?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...'>
          <img className='footer-href-img' alt='Whatsapp' src={Whatsapp}>
          </img>
        </a>
      </div>
    </div>
  );
}
export default Footer;
