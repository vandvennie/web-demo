// 定义实践数据数组
const practices = [
  {
    title: "# 1", 
    label: "Document Type", 
    content: "<strong>For HTML:</strong> Always declare the document type (&lt;!DOCTYPE html&gt;) at the very beginning of your HTML document to ensure proper rendering."
  },
  {
    title: "# 2", 
    label: "Close Elements", 
    content: "<strong>For HTML:</strong> While some HTML elements (e.g., &lt;p&gt;) do not require explicit closing, it is best practice to close all elements for better readability and maintainability."
  },
  {
    title: "# 3", 
    label: "Lowercase Attribute", 
    content: "<strong>For HTML:</strong> Use lowercase for HTML attribute names to improve readability, maintain consistency, and align with standard coding practices."
  },
  {
    title: "# 4", 
    label: "Specify Image Attributes", 
    content: "<strong>For HTML:</strong> Always include the `alt` attribute for images to improve accessibility and SEO.<br>- Set `width` and `height` to prevent layout shifts and enhance performance."
  },
  {
    title: "# 5", 
    label: "Avoid Long Lines", 
    content: "<strong>For HTML:</strong> Keep HTML code lines short to improve readability and prevent excessive horizontal scrolling in code editors."
  },
  {
    title: "# 6", 
    label: "Readable CSS Formatting", 
    content: "<strong>For CSS:</strong> Place each CSS property-value pair on a new line for better readability and maintenance."
  },
  {
    title: "# 7", 
    label: "Comment Your CSS", 
    content: "<strong>For CSS:</strong> Add comments to your CSS to make it easier for future developers—and yourself—to understand and maintain."
  },
  {
    title: "# 8", 
    label: "Organize CSS Logically", 
    content: "<strong>For CSS:</strong> Start your stylesheet with common styles before defining more specific or exceptional styles."
  },
  {
    title: "# 9", 
    label: "Split Large Stylesheets", 
    content: "<strong>For CSS:</strong> Divide large CSS files into modular stylesheets to improve organization and prevent merge conflicts in collaborative projects."
  },
  {
    title: "# 10", 
    label: "Maintain Consistency", 
    content: "<strong>For CSS:</strong> Use consistent naming conventions, color definitions, and formatting to improve code maintainability."
  },
  {
    title: "# 11", 
    label: "Limit Global Variables", 
    content: "<strong>For JS:</strong> Avoid excessive use of global variables, including objects and functions. Global variables can be overwritten by other scripts. Instead, use local variables and closures for better encapsulation."
  },
  {
    title: "# 12", 
    label: "Declare Variables on Top", 
    content: "<strong>For JS:</strong> Always declare variables at the beginning of a script or function. This improves readability, reduces unintended global variables, and prevents accidental redeclarations."
  },
  {
    title: "# 13", 
    label: "Initialize Variables", 
    content: "<strong>For JS:</strong> Always initialize variables when declaring them. This helps maintain cleaner code, centralizes initialization, and avoids undefined values."
  },
  {
    title: "# 14", 
    label: "Use const for Objects", 
    content: "<strong>For JS:</strong> Declare objects with `const` to prevent accidental type changes and unintended modifications."
  },
  {
    title: "# 15", 
    label: "Understand Type Conversion", 
    content: "<strong>For JS:</strong> JavaScript is loosely typed, meaning variables can hold different data types and switch types dynamically. Be mindful of implicit type conversions to avoid unexpected behavior."
  }
];

function updateState() {
  let checkedState = {};
}

// 用于生成实践卡片的函数
function generatePracticeHTML(practice, index) {
  return `
    <div class="col-sm p-3 bg-light rounded text-center praCard">
      <h2>${practice.title}</h2>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="check${index}" onchange="updateState()">
        <label class="form-check-label" for="check${index}">${practice.label}</label>
      </div>
    </div> 
  `;
}

// 动态生成15个实践，每排5个
const rows = ['html', 'css', 'js']; // 包含三排
let practiceCount = 0;

rows.forEach(rowId => {
  let rowHTML = '';
  for (let i = 0; i < 5; i++) {
    if (practiceCount < practices.length) {
      rowHTML += generatePracticeHTML(practices[practiceCount], practiceCount);
      practiceCount++;
    }
  }
  document.getElementById(rowId).innerHTML = rowHTML; // 将生成的内容放入对应的row中
});

// 获取 content p 元素
const pContent = document.querySelector("#content p");

// 监听复选框变化并更新 content 内容
function updateContent() {
  let selectedContent = [];

  // 遍历所有实践，找出已选中的
  practices.forEach((practice, index) => {
      const checkbox = document.querySelector(`#check${index}`);
      if (checkbox && checkbox.checked) {
          selectedContent.push(practice.content);
      }
  });

  // 只显示最后一个选中的内容
  pContent.innerHTML = selectedContent.length > 0
      ? `<strong>🎉You just checked:</strong><br>${selectedContent[selectedContent.length - 1]}` // 只显示最后选中的内容
      : "🤔Hmm, no best practice selected.";
      
}



// 更新已勾选的实践数目
function updateProgress() {
  const checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked").length;
  document.getElementById("met-practices-count").textContent = checkedBoxes;

  // 如果已选中 >= 2，显示奖励图片
  if (checkedBoxes >= 2) {
    fetchRandomAnimalImage();
  } else {
    rewardContainer.innerHTML = ""; // 清空奖励图片
  }
}
const rewardContainer = document.getElementById("reward");


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

// 监听复选框变化并保存到 localStorage
function updateState() {
  let checkedState = {};

  practices.forEach((_, index) => {
    const checkbox = document.querySelector(`#check${index}`);
    if (checkbox) {
      checkedState[`check${index}`] = checkbox.checked;
    }
  });

  localStorage.setItem("checkedPractices", JSON.stringify(checkedState));

  updateContent(); // 确保更新选中的内容显示
  updateProgress();
}

// 页面加载时恢复复选框状态
function restoreState() {
  const savedState = JSON.parse(localStorage.getItem("checkedPractices") || "{}");

  practices.forEach((_, index) => {
    const checkbox = document.querySelector(`#check${index}`);
    if (checkbox && savedState[`check${index}`]) {
      checkbox.checked = true;
    }
  });

  updateContent(); // 确保恢复时更新内容
  updateProgress();
}

// 页面加载完成后恢复状态
document.addEventListener("DOMContentLoaded", restoreState);

