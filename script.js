// Get elements
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Hide button initially (important for Cypress)
existingBtn.style.display = "none";

// Check localStorage on load
function checkUser() {
  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (storedUser && storedPass) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  // Alert (must match exactly)
  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkUser();
});

// Existing user login
existingBtn.addEventListener("click", function () {
  const storedUser = localStorage.getItem("username");
  alert(`Logged in as ${storedUser}`);
});

// Run on page load
checkUser();