
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductSShell from './page/ProductSShell';
import CartShell from './page/CartShell';
import PaymentForm from './page/PaymentForm'
import ErrorPage from './page/ErrorPage';
import './css/background.css'
import { useState } from 'react';
import changePlusLocSt from "./components/Func/changePlusLocSt"
import changeMinusLocSt from "./components/Func/changeMinusLocSt"
import spliceItemLocSt from "./components/Func/deleteItemLocSt"


const App = () =>{
let local = JSON.parse(localStorage.getItem("CardProducts"))||[];

// let card={
//   isFlip:false,
//   name:"",
//   cardNumber:"",
//   date:"",
//   code:"",
// }

const [Obj,setObj]=useState(local);

const [isFlip,setIsFlip]=useState(false);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [cardNumber,setCardNumber]=useState("");
const [date,setDate]=useState("");
const [code,setCode]=useState("");

const handleSendSubmit=()=>{
  alert("данные успешно отправлены",Obj,"",name,"",email,"",cardNumber,"",date,"",code,"");
  console.log("данные успешно отправлены",Obj,"",name,"",email,"",cardNumber,"",date,"",code,"");
}

const handleSetIsFlip=(prop)=>{
  prop=!prop;
  setIsFlip(prop);
}
const handleMinusStateLocalStr=(oldObj)=>{
  setObj(changeMinusLocSt(oldObj));
}
const handlePlusStateLocalStr=(oldObj)=>{
  setObj(changePlusLocSt(oldObj));
}
const handleDeleteStateLocalStr=(oldObj)=>{
  setObj(spliceItemLocSt(oldObj));
}
  return(
    
    <div className='app'>
        <Header newObj={Obj}/>
        <Routes>
          <Route path='/' element={<ProductSShell
                                  change={handlePlusStateLocalStr}
                                  newObj={Obj} />}
                                  />
          <Route path='/CartShell' element={<CartShell 
                                            newObj={Obj} 
                                            changeMinus={handleMinusStateLocalStr} 
                                            changePlus={handlePlusStateLocalStr} 
                                            changeDelete={handleDeleteStateLocalStr}/>} 
                                            />
          <Route path='/PaymentForm' element={<PaymentForm
                                              newObj={Obj}
                                              isFlip={isFlip}
                                              name={name}
                                              // cardNumber={cardNumber}
                                              // date={date}
                                              // code={code}
                                              sendSubmit={handleSendSubmit}
                                              setEmail={setEmail}
                                              setIsFlip={handleSetIsFlip}
                                              setName={setName}
                                              setCardNumber={setCardNumber}
                                              setDate={setDate}
                                              setCode={setCode}/>}
                                              />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
