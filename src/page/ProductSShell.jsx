import React from 'react';
import productItems from '../components/DATA/DATA';
import Products from '../components/Products/Products';
const ProductSShell = (prop) =>{
  return(
    <div className='productsShell'>
      {
        productItems.map((activeData)=>{
          return(
            <Products key={Math.random()}
              productsType={activeData.type}
              productsData={activeData.data}
              buttonChange={prop.change}
              newObj={prop.newObj}
            />
          );
        })
      }
    </div>
  );
}
export default ProductSShell;
