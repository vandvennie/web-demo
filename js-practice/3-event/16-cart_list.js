const proList=[
  {pName: "IPhone 16", pPrice: 1000, pQuantity: 3, pTotal: 3000, pAddress: "636 New"},
  {pName: "IPhone 15", pPrice: 800, pQuantity: 1, pTotal: 800, pAddress: "93 New"}
]
const selAll=document.querySelector('#selAll')
const trList = document.querySelector("tbody")
for (i=0; i<proList.length; i++) {
  trList.innerHTML +=
  `<tr>
    <td><input type="checkbox" name="" class="selOne"></td>
    <td>${proList[i].pName}</td>
    <td>\$${proList[i].pPrice}</td>
    <td>${proList[i].pQuantity}</td>
    <td>\$${proList[i].pTotal}</td>
    <td>${proList[i].pAddress}</td>
  </tr>`
}
const selOnes=document.querySelectorAll('.selOne')
selAll.addEventListener("click",function() {
  for (j=0; j<selOnes.length; j++) {
    selOnes[j].checked=this.checked
  }
})


