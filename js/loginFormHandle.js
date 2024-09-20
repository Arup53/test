document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const pin = document.getElementById("password").value;
  if (pin === "5") {
    window.location.href = "../home.html";
  } else {
    alert("wrong password");
  }
});
