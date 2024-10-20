const input = document.querySelector(".comment #input")
const sbt = document.querySelector(".comment button")
const comm = document.querySelector(".commentList .info p")

let count = document.querySelector(".textbox p")
let i = 0 
//输入框
input.addEventListener('mouseenter', function(){
  input.classList.add('active', 'activeText')
  sbt.classList.add('active')
  count.style.opacity = 1
})
input.addEventListener('mouseleave', function(){
  input.classList.remove('active', 'activeText')
  sbt.classList.remove('active')
  count.style.opacity = 0 //设置元素透明度的属性, 1（完全不透明）
})

input.addEventListener('input', function(){
  count.innerHTML = `${input.value.length}/200`
})

//评论展示列表
// 创建新的评论元素
function addComment(commentText) {
  const commentItem = document.createElement("div");
  commentItem.classList.add("commentItem");

  commentItem.innerHTML = `
    <img src="./user.png" alt="profile" style="height: 40px;">
    <div class="info">
      <h4>Veronica</h4>
      <p>${commentText}</p>
      <div class="time"> 2024/10/02 18:56:00</div>
    </div>
  `;

  // 将新评论添加到评论列表中
  commentList.appendChild(commentItem);
}

// 点击提交按钮时
sbt.addEventListener('click', function(){
  if (input.value.trim() !== "") { // 确保输入框中内容不为空 
    addComment(input.value);
    input.value = "";  // 提交后清空输入框
    count.innerHTML = "0/200"; // 重置字符计数
  }
});

// 按下回车键时提交评论
input.addEventListener('keyup', function(e){
  if (e.key === "Enter" && input.value.trim() !== "") {
    addComment(input.value);
    input.value = "";
    count.innerHTML = "0/200";
  }
});