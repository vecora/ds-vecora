
var cookieMessageToggle = document.getElementById("cookieMessageToggle");

function doCoockieMessageToggleText(cookieMessageToggle, cookieMessageStatus) {
  if (cookieMessageStatus === 'accepted') {
    cookieMessageToggle.innerHTML = "Activate cookie message";
  } else if (typeof cookieMessageStatus === "undefined") {
    cookieMessageToggle.innerHTML = "Deactivate cookie message";
  }
}

cookieMessageToggle.addEventListener("click", function() {

  if (localStorage.cookieMessageStatus === "accepted") {
    delete localStorage.cookieMessageStatus;
  } else if (typeof localStorage.cookieMessageStatus === "undefined") {
    localStorage.cookieMessageStatus = "accepted";
  }

  doCookieMessageVisibility();
  doCoockieMessageToggleText(cookieMessageToggle, localStorage.cookieMessageStatus);

});
