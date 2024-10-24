const tab = document.querySelector(".categories .tab ul")


const halloween = [
  {img: "./tab-image/candy.png", title:'Snakes Lollies 230g' , price: '$4.00', sold: '1231 Sold'},
  {img: "./tab-image/ghost.png", title:'Light Up House Skull' , price: '$12.00', sold: '102 Sold'},
  {img: "./tab-image/pumpkin.png", title:'Halloween Trick or Treat Pails' , price: '$4.00', sold: '100 Sold'},
  {img: "./tab-image/witch-hat.png", title:'Halloween Wicth Hat' , price: '$8.00', sold: '234 Sold'}
]
const fv = [
  {img: "./tab-image/water.png", title:'Fruit Juice 230g' , price: '$4.00', sold: '1231 Sold'},
  {img: "./tab-image/broccoli.png", title:'Broccoli' , price: '$12.00', sold: '102 Sold'},
  {img: "./tab-image/carrot.png", title:'Carrot' , price: '$4.00', sold: '100 Sold'},
  {img: "./tab-image/fruits.png", title:'Fruit Pack' , price: '$8.00', sold: '234 Sold'}
]

tab.addEventListener('click',function(e) {
  if (e.target.tagName === 'H4') {

  }
})