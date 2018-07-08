
if (!localStorage.cookieMessage) {
  document.querySelector(".cookie-message").style.display = "block";
}

document.querySelector(".cookie-message button").addEventListener("click", function() {
  document.querySelector(".cookie-message").style.display = "none";
  localStorage.cookieMessage = "accepted";
});
