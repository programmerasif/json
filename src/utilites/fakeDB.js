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
// const adToDB = (id) =>{
//    let shoppingCart = {};


//     const quantiti = shoppingCart[id]
//     console.log(quantiti);
//   if (quantiti) {
//     const newQuantiti = parseInt(quantiti) +1
//     shoppingCart[id] =newQuantiti
//   }
//   else{
   
//     shoppingCart[id] = 1;
//   }
//   localStorage.setItem('shopingCart', JSON.stringify(shoppingCart))
// }
const adToDB = (id) =>{
  let shopingCard;

// get the shoping card 
const stordCard = localStorage.getItem('shopingCard')
if (stordCard) {
  shopingCard = JSON.parse(stordCard)
}
else{
  shopingCard = {}
}


//add quantity
  const quantity  = shopingCard[id]
  if (quantity) {
    const newQuantity = quantity + 1
    shopingCard[id]= newQuantity
  }
  else{
    shopingCard[id] = 1
  }
  localStorage.setItem('shopingCard',JSON.stringify(shopingCard))
}
export {adToDB}