//manage storage 
// const adToDB = (id) =>{
//     const quantiti = localStorage.getItem(id)
//   if (quantiti) {
//     const newQuantiti = parseInt(quantiti) +1
//     localStorage.setItem(id,newQuantiti)
//   }
//   else{
//     localStorage.setItem(id,1)
//   }
    
// }
// export {adToDB}
const adToDB = (id) =>{
   let shoppingCart = {};


    const quantiti = shoppingCart[id]
    console.log(quantiti);
  if (quantiti) {
    const newQuantiti = parseInt(quantiti) +1
    shoppingCart[id] =newQuantiti
  }
  else{
   
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopingCart', JSON.stringify(shoppingCart))
}
export {adToDB}