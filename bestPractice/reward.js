// Function to fetch a random animal image from an API and display it in a specified container
function fetchRandomAnimalImage(containerID) {
  const container = document.getElementById(containerID); // get the container by ID
  console.log(container);

  // Fetch a random animal image from the API
  fetch('https://api.thecatapi.com/v1/images/search') // A service listed in "Animals" section
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      console.log("API response data:", data);
      const img = document.createElement("img"); // Create a new image element
      img.src = data[0].url; // Set the image source to the URL from the API response
      img.alt = "Cute Animal";
      img.style.width = "300px"; // Set the width of the image
      container.innerHTML = ""; // Clear previous content
      container.appendChild(img);
    })
    .catch(error => {
      console.error("Error fetching image:", error); // Log any errors
      container.innerHTML = "Oops! Something went wrong.";
    });
}

// vent listener for the CV page
document.addEventListener("DOMContentLoaded", function () {  
  const rewardButton = document.getElementById("checkRewardBtn");
  if (rewardButton) {
    // Add a click event listener to the button
    rewardButton.addEventListener("click", function () {
      fetchRandomAnimalImage("reward-container"); // Pass the ID of the container to display the image
    });
  } else {
    console.log("The button with ID 'checkRewardBtn' was not found.");
  }
});
