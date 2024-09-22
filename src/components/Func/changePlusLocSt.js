const changePlusLocSt=(oldObj)=>{
  let local = JSON.parse(localStorage.getItem("CardProducts"))||[];
  
  const Obj = {
    ...oldObj,
    quantity: 1
  };
  const remember =  local.findIndex((el)=>el.id===Obj.id);
    
    if (remember!==-1){
      local[remember].quantity++;
      localStorage.setItem("CardProducts", JSON.stringify(local));
    }
    else{
      // console.log("при добавлении " + local);
      local.push(Obj);
      localStorage.setItem("CardProducts", JSON.stringify(local));
  }
    return(local);
}

export default changePlusLocSt;