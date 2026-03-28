//your JS code here. If required.
// Get elements
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Load stored credentials
function checkStoredUser() {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (storedUsername && storedPassword) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkStoredUser();
});

// Existing user login
existingBtn.addEventListener("click", function () {
  const storedUsername = localStorage.getItem("username");

  if (storedUsername) {
    alert(`Logged in as ${storedUsername}`);
  }
});

// Run on page load
checkStoredUser();