document.getElementById("breakfastButton").addEventListener("click", function() {
    fetch("/meals/breakfast")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Update the #mealDetails div with fetched meal details
            displayMealDetails(data);
        })
        .catch(error => {
            console.error("Error fetching breakfast meal data:", error);
            // Handle the error as needed, e.g., display an error message
        });
});

document.getElementById("dinnerButton").addEventListener("click", function() {
    fetch("/meals/dinner")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Update the #mealDetails div with fetched meal details
            displayMealDetails(data);
        })
        .catch(error => {
            console.error("Error fetching dinner meal data:", error);
            // Handle the error as needed, e.g., display an error message
        });
});

function displayMealDetails(meal) {
    const mealDetailsContainer = document.getElementById("mealDetails");

    // Clear any existing content in the mealDetailsContainer
    mealDetailsContainer.innerHTML = "";

    // Create HTML elements to display meal details
    const mealName = document.createElement("h2");
    mealName.textContent = meal.name;

    const mealDescription = document.createElement("p");
    mealDescription.textContent = meal.description;

    const mealImage = document.createElement("img");
    mealImage.src = meal.imageUrl;
    mealImage.alt = meal.name;

    // Append the elements to the mealDetailsContainer
    mealDetailsContainer.appendChild(mealName);
    mealDetailsContainer.appendChild(mealDescription);
    mealDetailsContainer.appendChild(mealImage);
}
