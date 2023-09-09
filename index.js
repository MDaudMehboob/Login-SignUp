function register() {
  const username = $("#signup-username").val();
  const email = $("#signup-email").val();
  const password = $("#signup-password").val();
  const confirmPass = $("#signup-confirm").val();
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (
    username !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPass !== ""
  ) {
    if (password === confirmPass) {
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "home.html";
    } else {
      alert("password does not match");
    }
  } else {
    alert("Enter Credentials");
  }
}

function login() {
  let userFound = false;
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const email = $("#email").val();
  const password = $("#password").val();

  users.forEach((element) => {
    if (element.email === email && element.password === password) {
      window.location.href = "home.html";
      userFound = true;
    }
  });
  if (!userFound) alert("Invalid Credentials");
}
