import React from 'react';
import minus from "../../img/website/minus.svg"
import plus from "../../img/website/plus.svg";
import trashCart from "../../img/website/TrashCart.svg";
const Cart=(props)=>{
  
const handlePlus=()=>{
  props.changePlus(props.CartData);
}

const handleMinus=()=>{
  props.changeMinus(props.CartData);
}

const handleDelete=()=>{
  props.changeDelete(props.CartData);
}

  return(
    <div className='CartShell-products'>
      <div className='CartShell-products-info'>
        <div className='CartShell-products-info-img'>
          <img alt={props.CartData.title} src={require(`../../img/products/${props.CartData.img}`)}/>
        </div>
        <div className='CartShell-products-info-title-'>
          <div className='CartShell-products-info-title'>{props.CartData.title}</div>
          <div className='CartShell-products-info-price'>{props.CartData.price } ₽</div>
        </div>
        <div className='CartShell-products-info-trashCart'>
          <button onClick={handleDelete} className='CartShell-products-info-trashCart-button'>
            <img src={trashCart} alt="trashCart" />
          </button>
        </div>
      </div>
      
      <div className='CartShell-products-panel'>
        
          <div className='CartShell-products-panel-wrap'>
            <button onClick={handleMinus} className={props.CartData.quantity===1?'CartShell-products-panel-button minus':'CartShell-products-panel-button'}>
              <img src={minus}  alt="minus"/>
            </button>
            <div className='CartShell-products-panel-count'>
              {props.CartData.quantity}
            </div>
            <button onClick={handlePlus} className='CartShell-products-panel-button plus'>
              <img src={plus} alt="plus"/>
            </button>
          </div>        
          
          <div className='CartShell-products-panel-sumPrice'>
            {props.CartData.price*props.CartData.quantity} ₽
          </div>
      </div>

    </div>
  );
}

export default Cart;