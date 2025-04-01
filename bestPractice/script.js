// 定义实践数据数组
const practices = [
  { title: "# 1", label: "Responsive Design", content: "1. Ensure your website looks great on all devices." },
  { title: "# 2", label: "Learn Thoroughly", content: "2. Understand core concepts before diving into frameworks." },
  { title: "# 3", label: "CSS Preprocessors", content: "3. Use tools like SASS or LESS for better styling management." },
  { title: "# 4", label: "JavaScript", content: "4. Write clean, efficient, and maintainable JavaScript code." },
  { title: "# 5", label: "Version Control", content: "5. Use Git and GitHub to track changes and collaborate effectively." },
  { title: "# 6", label: "Test, Test", content: "6. Write unit and integration tests to ensure code reliability." },
  { title: "# 7", label: "Optimize Images", content: "7. Reduce image sizes for faster loading times." },
  { title: "# 8", label: "Framework & Library", content: "8. Use popular frameworks like React, Vue, or Angular efficiently." },
  { title: "# 9", label: "Stay Updated", content: "9. Follow industry trends and update your skills regularly." },
  { title: "# 10", label: "Usability", content: "10. Ensure a smooth and intuitive user experience." },
  { title: "# 11", label: "Performance Optimization", content: "11. Minimize scripts and leverage caching for speed." },
  { title: "# 12", label: "Mobile-First Design", content: "12. Start designing for mobile screens first, then scale up." },
  { title: "# 13", label: "Accessibility", content: "13. Make websites usable for people with disabilities." },
  { title: "# 14", label: "PWAs", content: "14. Create Progressive Web Apps for a native-like experience." },
  { title: "# 15", label: "Stay Organized", content: "15. Keep your codebase and project structured for easy maintenance." }
];

// 用于生成实践卡片的函数
function generatePracticeHTML(practice) {
  return `
    <div class="col-sm p-3 bg-light rounded text-center praCard">
      <h2>${practice.title}</h2>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="check${practice.title.split(' ')[1]}">
        <label class="form-check-label" for="check${practice.title.split(' ')[1]}">${practice.label}</label>
      </div>
    </div>
  `;
}

// 动态生成15个实践，每排5个
const rows = ['row1', 'row2', 'row3']; // 包含三排
let practiceCount = 0;

rows.forEach(rowId => {
  let rowHTML = '';
  for (let i = 0; i < 5; i++) {
    if (practiceCount < practices.length) {
      rowHTML += generatePracticeHTML(practices[practiceCount]);
      practiceCount++;
    }
  }
  document.getElementById(rowId).innerHTML = rowHTML; // 将生成的内容放入对应的row中
});

// 获取 summary p 元素
const pSummary = document.querySelector("#summary p");


// 监听复选框变化并更新 summary 内容
function updateSummaryContent() {
  let selectedContent = [];
  
  practices.forEach((practice, index) => {
    const checkbox = document.querySelector(`#check${index + 1}`);
    if (checkbox && checkbox.checked) {
      selectedContent.push(practice.content);
    }
  });

  // 更新 summary p，多个内容拼接
  pSummary.innerHTML = selectedContent.length > 0 ? 
    `<strong>🎉Check the practices you've completed:</strong><br>${selectedContent.join("<br>")}` :
    "🤔Hmm, no best practice selected.";
}

// 给每个 checkbox 绑定 change 事件
practices.forEach((_, index) => {
  const checkbox = document.querySelector(`#check${index + 1}`);
  if (checkbox) {
    checkbox.addEventListener("change", updateSummaryContent);
  }
});

// 获取 DOM 元素用于展示进度
const metPracticesCount = document.getElementById("met-practices-count");
const rewardContainer = document.getElementById("reward");
const successCriteria = document.getElementById("success-criteria");

// 更新已勾选的实践数目
function updateProgress() {
  const checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked").length;
  
  // 更新已选中的数量
  metPracticesCount.textContent = checkedBoxes;

  // 如果已选中 >= 2，显示奖励图片
  if (checkedBoxes >= 2) {
    fetchRandomAnimalImage();
  }
}

// 发送 AJAX 请求以获取可爱动物图片
function fetchRandomAnimalImage() {
  fetch('https://api.thecatapi.com/v1/images/search') // 示例使用猫咪图片 API
    .then(response => response.json())
    .then(data => {
      const img = document.createElement("img");
      img.src = data[0].url;
      img.alt = "Cute Animal";
      img.style.width = "300px"; // 你可以根据需要调整图片大小
      rewardContainer.innerHTML = ""; // 清空之前的内容
      rewardContainer.appendChild(img);
    })
    .catch(error => {
      console.error("Error fetching image:", error);
      rewardContainer.innerHTML = "Oops! Something went wrong.";
    });
}

// 给所有复选框添加事件监听器
document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
  checkbox.addEventListener("change", updateProgress);
});
