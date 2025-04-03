// Define the practices array with 15 best practices
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


// Dynamically generate HTML for each practice
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

// Generate HTML for each row
const rows = ['html', 'css', 'js']; // mapping row IDs
let practiceCount = 0;

// Traverse the rows and fill them with practices
rows.forEach(rowId => {
  let rowHTML = '';
  for (let i = 0; i < 5; i++) {
    if (practiceCount < practices.length) {
      rowHTML += generatePracticeHTML(practices[practiceCount], practiceCount);
      practiceCount++;
    }
  }
  document.getElementById(rowId).innerHTML = rowHTML; // fill the row with generated HTML
});

const pContent = document.querySelector("#content p");

// Update the content based on selected practices
function updateContent() {
  let selectedContent = [];

  // Iterate through all practices and check if they are selected
  practices.forEach((practice, index) => {
      const checkbox = document.querySelector(`#check${index}`);
      if (checkbox && checkbox.checked) {
          selectedContent.push(practice.content);
      }
  });

  // Display the selected content or a default message
  pContent.innerHTML = selectedContent.length > 0
      ? `<strong>🎉You just checked:</strong><br>${selectedContent[selectedContent.length - 1]}` // 只显示最后选中的内容
      : "🤔Hmm, no best practice selected.";
      
}


// Function to fetch a random animal image from the API
function updateProgress() {
  const checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked").length;
  document.getElementById("met-practices-count").textContent = checkedBoxes;

  const rewardContainer = document.getElementById("reward");

  // Only fetch a new image if the number of checked boxes is 12 or more
  if (checkedBoxes >= 2) {
    fetchRandomAnimalImage("reward");// A function to fetch a random animal image in the reward.js
  } else {
    rewardContainer.innerHTML = ""; // Otherwise, clear the reward container
  }
}


// Save the state of checkboxes to localStorage
function updateState() {
  let checkedState = {};

  practices.forEach((_, index) => {
    const checkbox = document.querySelector(`#check${index}`);
    if (checkbox) {
      checkedState[`check${index}`] = checkbox.checked;
    }
  });

  localStorage.setItem("checkedPractices", JSON.stringify(checkedState));

  updateContent(); // Update content when checkbox state changes
  updateProgress();// Update progress when checkbox state changes
}

// Restore the state of checkboxes from localStorage
function restoreState() {
  const savedState = JSON.parse(localStorage.getItem("checkedPractices") || "{}");

  practices.forEach((_, index) => {
    const checkbox = document.querySelector(`#check${index}`);
    if (checkbox && savedState[`check${index}`]) {
      checkbox.checked = true;
    }
  });

  updateContent(); // Update content when restoring state
  updateProgress();// Update progress when restoring state
}

// Restore the state when the page loads
document.addEventListener("DOMContentLoaded", restoreState);

// Restore the state when the page loads
document.querySelector("#checkRewardBtn")

 




