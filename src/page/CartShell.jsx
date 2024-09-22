
import React from 'react';
import Cart from '../components/Cart/Cart';
import { Link } from 'react-router-dom';

const CartShell = ({newObj,changeMinus,changePlus,changeDelete}) =>{

  const finalSum=()=>{
    let sum=0;
    newObj.forEach(element => {
      sum+=element.price*element.quantity;
    });

    return(sum);
  }
 
  return(
    <div>
      <div className='CartShell-title title'>Корзина</div>
      {
        newObj.length===0?<div className='CartShell-emptyCart'>{"Корзина пустует :("}</div>:
        <div className='CartShell'>
          <div className='CartShell-prod'>
          {newObj.map((activeData)=>{
                return(
                  <Cart key={Math.random()}
                    CartData={activeData}
                    changeMinus={changeMinus}
                    changePlus={changePlus}
                    changeDelete={changeDelete}
                  />
                );
              })
            }
          </div>
          
          <div className='CartShell-buy'>
            <div className='CartShell-buy-finalyPrice'>
              <div>
                ИТОГО
              </div>
              <div>
              ₽ {finalSum()}
              </div>
            </div>
            <Link to="/PaymentForm">
              <button className='CartShell-buy-button black-focus-button'>
              Перейти к оформлению
              </button>
            </Link>
          </div>
        </div>
      }
      
    </div>
  );
}
export default CartShell;
