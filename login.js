document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("message");


  if (localStorage.getItem("loggedInUser")) {
    window.location.href = "home.html";
    return;
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUsername = "james";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      message.style.color = "green";
      message.textContent = "Login successful! Redirecting...";
      localStorage.setItem("loggedInUser", username);

      setTimeout(() => {
        window.location.href = "home.html";
      }, 1500);
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }
  });

});
