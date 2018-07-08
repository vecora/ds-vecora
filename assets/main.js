
var cookieMessageToggle = document.getElementById("cookieMessageToggle")

cookieMessageToggle.addEventListener("click", function() {
  if (localStorage.cookieMessage) {
    document.querySelector(".cookie-message").style.display = "none";
    cookieMessageToggle.innerHTML = "Deactivate cookie message";
    localStorage.cookieMessage = "accepted";
  } else {
    document.querySelector(".cookie-message").style.display = "block";
    cookieMessageToggle.innerHTML = "Activate cookie message";
    localStorage.cookieMessage = undefined;
  }
});
