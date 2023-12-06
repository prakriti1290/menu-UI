document.getElementById("breakfastButton").addEventListener("click", function () {
    fetchMenu("breakfast");
});

document.getElementById("dinnerButton").addEventListener("click", function () {
    fetchMenu("dinner");
});

function fetchMenu(type) {
    fetch(`https://menu-app-jcn0.onrender.com/meals/${type}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Update the #mealDetails div with fetched meal details
            displayMealDetails(data);
        })
        .catch((error) => {
            console.error(`Error fetching ${type} meal data:`, error);
            // Handle the error as needed, e.g., display an error message
        });
}

function displayMealDetails(meals) {
    const mealDetailsContainer = document.getElementById("mealDetails");

    // Clear any existing content in the mealDetailsContainer
    mealDetailsContainer.innerHTML = "";

    // Loop through each meal and create HTML elements to display meal details
    meals.forEach((meal) => {
        const mealItem = document.createElement("div");
        mealItem.classList.add("meal-item");

        const mealName = document.createElement("h2");
        mealName.textContent = meal.name;

        const mealDescription = document.createElement("p");
        mealDescription.textContent = meal.description;

        const mealImage = document.createElement("img");
        mealImage.src = meal.imageUrl;
        mealImage.alt = meal.name;

        mealItem.appendChild(mealName);
        mealItem.appendChild(mealDescription);
        mealItem.appendChild(mealImage);

        mealDetailsContainer.appendChild(mealItem);
    });
}
