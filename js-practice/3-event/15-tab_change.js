const tab1 = document.querySelector(".categories .tab .t1")
const tab2 = document.querySelector(".categories .tab .t2")
//  const tab3 = document.querySelector(".categories .tab .t3")
const mPop = document.querySelector(".mPop")
const order = document.querySelector(".btn-order")
const clear = document.querySelector(".btn-clear")
let totalPrice = 0;
const totalCostDiv = document.querySelector('.total-cost'); 
const itemsDetailsDiv = document.querySelector('.items-details'); 

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
const properties = [
  {img: "./tab-image/water.png", title:'123 Stirling St' , price: '$1444.00', sold: '1231 Sold'},
  {img: "./tab-image/broccoli.png", title:'43 Goderich St' , price: '$1222.00', sold: '102 Sold'},
  {img: "./tab-image/carrot.png", title:'77 Halo St' , price: '$664.00', sold: '100 Sold'},
  {img: "./tab-image/fruits.png", title:'18 Wellington St' , price: '$875.00', sold: '234 Sold'}
]
let proList = document.querySelector(".categories .productL ul")

function proData(a) {
  a.forEach(item => {
    const li = document.createElement('li')
    
    li.innerHTML = 
    `
      <img src="${item.img}" alt="">
      <div class="describe">
        <h4 class="item-title">${item.title}</h4>
        <div class="price">${item.price}</div>
        <div class="sold">${item.sold} <button class="btn-add">add</button></div>  
      </div>
    `

  li.addEventListener('click', function(){
    const price = li.querySelector(".price").textContent;
    const title = li.querySelector(".item-title").textContent;
    
    const priceNumber = parseFloat(price.replace('$', ''));
    totalPrice += priceNumber;
    
    totalCostDiv.textContent = `$${totalPrice.toFixed(2)}`;
    
    itemsDetailsDiv.innerHTML += `${title} <br>`;
    // alert(title);
  })

    proList.appendChild(li) // 插入新元素
  })
}
//default
tab1.classList.add("active")
proData(halloween)

tab1.addEventListener('click', function(){
  proList.innerHTML = '<ul></ul>'
  proData(halloween)
  tab1.classList.toggle("active")
  tab2.classList.toggle("active")
  tab3.classList.toggle("active")
})
tab2.addEventListener('click', function(){
  proList.innerHTML = '<ul></ul>'
  proData(fv)
  tab1.classList.toggle("active")
  tab2.classList.toggle("active")
  tab3.classList.toggle("active")
})
// tab3.addEventListener('click', function(){
//   proList.innerHTML = '<ul></ul>'
//   proData(properties);
//   tab1.classList.toggle("active")
//   tab2.classList.toggle("active")
//   tab3.classList.toggle("active")
// });
mPop.addEventListener('click', function(){
    const price = mPop.querySelector(".price").textContent;
    const title = mPop.querySelector(".title").textContent;
    
    const priceNumber = parseFloat(price.replace('$', ''));
    totalPrice += priceNumber;
    
    totalCostDiv.textContent = `$${totalPrice.toFixed(2)}`;
    
    itemsDetailsDiv.innerHTML += `${title} <br>`;
    // alert(title);
  })

order.addEventListener('click', function(){
  alert(`Cash Only! You need to pay ${totalCostDiv.textContent}.`);
  itemsDetailsDiv.textContent = '';
  totalCostDiv.textContent = "$0";

});
clear.addEventListener('click', function(){
  itemsDetailsDiv.textContent = "";
  totalCostDiv.textContent = "$0";
});