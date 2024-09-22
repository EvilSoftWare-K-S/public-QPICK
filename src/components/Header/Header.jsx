
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
        <Link className='logo-link link' to="/">
          <div className='header-logo logo'>
            QPICK
          </div>
        </Link>
      <div className='header-purchaseGroup'>
        <div className='header-favorite'>
          <Link className='header-favorite-a link' to="">
            <img src={favorite} alt='favorite'></img>
            {favoriteCount()>0?
              <div className='header-count'>
                {favoriteCount()}
              </div>:
              <div></div>
            }
          </Link>
        
        </div>
        
        <div className='header-cart'>
          <Link className='header-favorite-a link' to="/CartShell">

            <div className='header-cart-img'>
              <img src={cart} alt='cart'>
              </img>
              {cartCount()>0?
                <div className='header-count'>
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
