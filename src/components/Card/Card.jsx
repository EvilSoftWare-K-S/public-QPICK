
import React from 'react';
import rate from '../../img/website/rate.svg';
import ButtonBuy from '../ButtonBuy/ButtonBuy';


const Card = ({productData,buttonChange,newObj}) =>{
  
  // const HandleLocalStorageTrue=()=>{
  //   buttonChange(productData);
    
  // }
  return(  
    <div className='Card'>
      <div className='Card-Img'>
        <img alt={productData.title} src={require(`../../img/products/${productData.img}`)} />   
        
      </div>
      <div className='Card-info'>
        <div className='Card-info-title'>
          {productData.title}
        </div>
        
        {/* <div className='Card-info-price'> */}
          <div className='Card-info-price-now'>
            {productData.price}{productData.price!==""?" ₽":""} 
          </div>
          <div className='Card-info-price-old'>
            {productData.oldPrice}{productData.oldPrice!==""?" ₽":""}
          </div>
        {/* </div> */}

        <div className='Card-info-rate'>
          <img src={rate} alt="rate" />
          {productData.rate}
        </div>
        <ButtonBuy
          productData={productData}
          buttonChange={buttonChange}
          newObj={newObj}
        />
        {/* <div className='Card-info-button'>
          <button  onClick={HandleLocalStorageTrue} className='button'>
            Купить
          </button>  
        </div> */}
      </div>
    </div>
  );
}
export default Card;
