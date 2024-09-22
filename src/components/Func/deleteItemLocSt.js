const spliceItemLocSt=(oldObj)=>{
  let local = JSON.parse(localStorage.getItem("CardProducts"))||[];
  
  const Obj = {
    ...oldObj,
    quantity: 1
  };
  const remember =  local.findIndex((el)=>el.id===Obj.id);
  
  local.splice(remember, 1);
  localStorage.setItem("CardProducts", JSON.stringify(local));
    
  return(local);
}

export default spliceItemLocSt;