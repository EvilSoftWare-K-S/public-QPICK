
import React from 'react';
import { Link } from "react-router-dom";

const ButtonBuy = (prop) =>{
  const HandleLocalStorageTrue=()=>{
    prop.buttonChange(prop.productData);
  }
  
  const remember =  prop.newObj.findIndex((el)=>el.id===prop.productData.id);
  
  return(  
    remember===-1?
    <div className='Card-info-button'>
      <button  onClick={HandleLocalStorageTrue} className='button'>
        Купить
      </button>  
    </div>:
    <div className='Card-info-button'>
      <Link to="/CartShell" className='button link'>
        В Корзине
      </Link>  
    </div>
    
    
  );
}
export default ButtonBuy;
