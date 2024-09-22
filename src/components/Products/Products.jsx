import React from 'react';
import Card from '../Card/Card';
const Products = (prop) =>{
  return(
    <div className='products'>
      <div className='products-title title'>
        {prop.productsType}
      </div>
      <div className='products-menu'>
        {prop.productsData.map((activeData)=>{
            return(
              <Card key={Math.random()}
                productData={activeData}
                buttonChange={prop.buttonChange}
                newObj={prop.newObj}
              />
            );
          })
        } 
      </div>
         
    </div>
    
  );
}
export default Products;
