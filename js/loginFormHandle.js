document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const pin = document.getElementById("password").value;
  if (pin === "5") {
    window.location.href = "https://arup53.github.io/test/home.html";
  } else {
    alert("wrong password");
  }
});
