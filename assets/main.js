
var cookieMessageToggle = document.getElementById("cookieMessageToggle")

function setCoockieMessageToggleText(cookieMessageToggle, cookieMessageStatus) {

  if (cookieMessageStatus === 'accepted') {
    cookieMessageToggle.innerHTML = "Activate cookie message";
  } else if (typeof cookieMessageStatus === "undefined") {
    cookieMessageToggle.innerHTML = "Deactivate cookie message";
  }

}

cookieMessageToggle.addEventListener("click", function() {

  if (localStorage.cookieMessageStatus === "accepted") {
    document.querySelector(".cookie-message").style.display = "none";
    delete localStorage.cookieMessageStatus;
  } else if (typeof localStorage.cookieMessageStatus === "undefined") {
    document.querySelector(".cookie-message").style.display = "block";
    localStorage.cookieMessageStatus = "accepted";
  }

  setCoockieMessageToggleText(cookieMessageToggle, localStorage.cookieMessageStatus);

});
