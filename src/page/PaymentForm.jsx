import React from 'react';
import deleteLocSt from '../components/Func/deleteLocSt'
const PaymentForm = (prop) =>{
  
  const handleSendSubmit=()=>{
    prop.sendSubmit();
    deleteLocSt();
  }
  const handleSetIsFlip=()=>{
    prop.setIsFlip(prop.isFlip);
  }

  const handleSum=()=>{
    let sum=0;
    prop.newObj.forEach(element => 
      sum+=element.price*element.quantity
    )
    return(sum);
  }


  return(
    <div className='payment-form'>
      <div className='payment-form__title title'>
        Оплата
      </div>
      
      <form className='form' action="" method="get" onSubmit={e => {
      e.preventDefault();
      handleSendSubmit();
    }}>
        
        <div className='form-data'> 
        
         <div className='design'>
            {prop.isFlip?
              <div className='design__pay-сard pay-card pay-card_back'>
                <div className='pay-card__magnet-line'>

                </div>
                
                <div className='pay-card__number-card'>
                  <label className='pay-card-label' htmlFor="ccn">
                    Номер карты:
                  </label>
                  <input className='pay-card-input pay-card-input_number' id="ccn" type="tel" inputMode="numeric" pattern="[0-9/s]{13,19}" 
                    autoComplete="off" minLength="16"  maxLength="19" 
                    placeholder="xxxx xxxx xxxx xxxx" required
                    onChange={(e)=>prop.setCardNumber(e.target.value)}/>
                  
                </div>

                <div className='pay-card__data'>
                  <label className='pay-card-label' htmlFor="MONTH/YEAR">
                    Срок:
                  </label>
                  <input className='pay-card-input pay-card-input_data' id="MONTH/YEAR" type="tel" inputMode="numeric" 
                    autoComplete="off"
                    minLength="4"  maxLength="5" 
                    placeholder="##/##" required 
                    onChange={(e)=>prop.setDate(e.target.value)} />
                </div>
              </div>
              :
              <div className='pay-card pay-card_front'>
                <div>BANKOFF</div>
                  <div>{prop.name}</div>
              </div>
            }
          </div>

          <div className='person'>
            {prop.isFlip?
              <button className='person__button-flip black-focus-button' onClick={handleSetIsFlip}>
                <label htmlFor="scales">Повернуть карту</label>
                <span></span>
              </button>
              :
              <button className='person__button-flip black-focus-button' onClick={handleSetIsFlip} required>
                <input className='person__button-flip__input'id="PASS" type="tel" inputMode="numeric" pattern="[0-9]" required/>
                <label htmlFor="scales">Повернуть карту</label>
                <span></span>
              </button>
            }
            <div>
              <div className="person__confirm-name">
                <input className="person__confirm-name__input" placeholder='Имя:' type="text" name="name" id="name"
                required onChange={(e)=>prop.setName(e.target.value)}/>
              </div>

              <div className="person__confirm-email">
                <input className="person__confirm-email__input" placeholder='Email' type="email" name="email" id="email"
                required onChange={(e)=>prop.setEmail(e.target.value)}/>
              </div>
            </div>
          </div>

        </div>

        <div className='confirmation'>
          <div className='action-inner'> 
            <div className="action-inner__sum">
              <div className='action-inner__sum__text'>
                <div>ИТОГО</div>
                <div>{handleSum()}{" ₽"}</div> 
              </div>  
            </div>

            <div className="confirm">
              
                <button className="confirm-button-submit black-focus-button" type="submit" >
                  Подтвердить заказ 
                </button>
            </div>
          </div>
          
        </div>
        

      </form>
    </div>
  );
}
export default PaymentForm;
