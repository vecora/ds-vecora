
function doCookieMessageVisibility() {
  if (localStorage.cookieMessageStatus === "accepted") {
    document.querySelector(".cookie-message").style.display = "none";
  } else if (typeof localStorage.cookieMessageStatus === "undefined") {
    document.querySelector(".cookie-message").style.display = "block";
  }
}

// Initialize
doCookieMessageVisibility();

document.querySelector(".cookie-message button").addEventListener("click", function() {
  localStorage.cookieMessageStatus = "accepted";
  doCookieMessageVisibility();
});
