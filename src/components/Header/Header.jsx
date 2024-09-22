
import React from 'react';
import { Link } from "react-router-dom";
import cart from "../../img/website/cart.svg"
import favorite from "../../img/website/favorite.svg"
const Header = ({newObj}) =>{

  const favoriteCount = () =>{
    return 2;
  }

  const cartCount = () =>{
    let sum=0;
    newObj.forEach(element => {
      sum+=element.quantity;
    });
    return sum;
  }
  
  return(
    <div className='header'>
      <Link className='header__link link' to="/">
        <div className='link__header-logo logo'>
          QPICK
        </div>
      </Link>
      <div className='header__inner'>
        <div className='favorite-inner'>
          <Link className='img-link link' to="/Favorite">
            <img src={favorite} alt='favorite'></img>
            {favoriteCount()>0?
              <div className='img-link__count'>
                {favoriteCount()}
              </div>:
              <div></div>
            }
          </Link>
        
        </div>
        
        <div className='cart-inner'>
          <Link className='img-link link' to="/CartShell">
            <div className='img-link__cart'>
              <img src={cart} alt='cart'>
              </img>
              {cartCount()>0?
                <div className='img-link__count'>
                  {cartCount()}
                </div>:
                <div></div>
              }
           </div>

          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
