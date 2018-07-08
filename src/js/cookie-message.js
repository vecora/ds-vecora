
if (!localStorage.cookieMessageStatus) {
  document.querySelector(".cookie-message").style.display = "block";
}

document.querySelector(".cookie-message button").addEventListener("click", function() {
  document.querySelector(".cookie-message").style.display = "none";
  localStorage.cookieMessageStatus = "accepted";
});
