const tab = document.querySelector(".categories .tab ul")
// const tabLi = document.querySelectorAll(".categories .tab li")
const proLi = document.querySelector(".productL ul")


const t1 = [
  {img: "./tab-image/candy.png", title:'Snakes Lollies 230g' , price: '$4.00', sold: '1231 Sold'},
  {img: "./tab-image/ghost.png", title:'Light Up House Skull' , price: '$12.00', sold: '102 Sold'},
  {img: "./tab-image/pumpkin.png", title:'Halloween Trick or Treat Pails' , price: '$4.00', sold: '100 Sold'},
  {img: "./tab-image/witch-hat.png", title:'Halloween Wicth Hat' , price: '$8.00', sold: '234 Sold'}
]
const t2 = [
  {img: "./tab-image/water.png", title:'Fruit Juice 230g' , price: '$4.00', sold: '1231 Sold'},
  {img: "./tab-image/broccoli.png", title:'Broccoli' , price: '$12.00', sold: '102 Sold'},
  {img: "./tab-image/carrot.png", title:'Carrot' , price: '$4.00', sold: '100 Sold'},
  {img: "./tab-image/fruits.png", title:'Fruit Pack' , price: '$8.00', sold: '234 Sold'}
]

function card(category) {
  // 清空现有的产品列表
  proLi.innerHTML = '';

  // 根据类别填充产品列表
  let products = category === 't1' ? t1 : t2;


  for (i=0; i<products.length; i++) {
  proLi.innerHTML += 
    `
    <li>
      <img src="${products[i].img}" alt="">
      <div class="describe">
        <h4 class="item-title">${products[i].title}</h4>
        <div class="price">${products[i].price}</div>
        <div class="sold">${products[i].sold} </div>  
      </div>
    </li>
    `
  }
}
card('t1')

tab.addEventListener('click',function(e) {
  // if (e.target.tagName === 'H4') {
  //   //移除默认tab的选中状态
  //   document.querySelector('.tab .active').classList.remove('active')
  //   //增加点击tab的选中状态
  //   e.target.classList.add('active')

  //   let tabClass = e.target.className; // 获取类名
    
  //       console.log(tabClass);
  // 根据类名判断调用哪个产品类别
    // if (tabClass === 't1 active') {
    //   card('t1');
    // } else if (tabClass === 't2 active') {
    //   card('t2');
    // }
  // }


  // 使用自定义属性

  if (e.target.tagName === 'H4') {
    // 获取 data-id 属性
    const id = e.target.getAttribute('data-id');
    document.querySelector('.tab .active').classList.remove('active');
    e.target.classList.add('active');
    
    // 根据 data-id 属性决定加载的产品
    if (id === '0') {
      card('t1');
    } else if (id === '1') {
      card('t2');
    }
  }

  

})