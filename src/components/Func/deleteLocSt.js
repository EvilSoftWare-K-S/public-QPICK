const deleteLocSt=()=>{
  localStorage.clear("CardProducts");
  let local = JSON.parse(localStorage.getItem("CardProducts"))||[];
  return(local);
}

export default deleteLocSt;