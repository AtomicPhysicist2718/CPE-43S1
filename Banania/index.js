function toggleIngredients(button) {
  const ingredientsDiv = button.nextElementSibling;
  if (!ingredientsDiv) return;

  if (ingredientsDiv.style.display === "none" || ingredientsDiv.style.display === "") {
    ingredientsDiv.style.display = "block";
  } else {
    ingredientsDiv.style.display = "none";
  }
}

window.toggleIngredients = function(button) {
  const ingredientsDiv = button.nextElementSibling;
  if (!ingredientsDiv) return;

  ingredientsDiv.classList.toggle("show");
};

document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
