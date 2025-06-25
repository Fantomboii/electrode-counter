document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Dummy hardcoded login
    const validUsers = [
      { username: "admin", password: "1234" },
      { username: "user1", password: "abcd" }
    ];

    const isValid = validUsers.some(user => user.username === username && user.password === password);

    if (isValid) {
      localStorage.setItem("loggedIn", "true"); // save login state
      window.location.href = "index.html";      // redirect to dashboard
    } else {
      loginError.style.display = "block";
    }
  });
});
