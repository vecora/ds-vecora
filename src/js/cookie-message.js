CookieMessage = {
  updateVisibility: function() {
    if (CookieMessage.accepted) {
      document.querySelector(".cookie-message").style.display = "none";
    } else {
      document.querySelector(".cookie-message").style.display = "block";
    }
  },
  onStatusChange: function() {}, // Used by the docs
  get exists() {
    if (document.querySelector(".cookie-message")) {
      return true;
    } else {
      return false;
    }
  },
  get accepted() {
    if (localStorage.cookieMessageStatus === "accepted") {
      return true;
    } else if (typeof localStorage.cookieMessageStatus === "undefined") {
      return false;
    }
  },
  set accepted(bool) {
    if (bool) {
      localStorage.cookieMessageStatus = "accepted";
    } else {
      delete localStorage.cookieMessageStatus;
    }
    CookieMessage.updateVisibility();
    CookieMessage.onStatusChange();
  }
};

// Initialize
if (CookieMessage.exists) {

  CookieMessage.updateVisibility();
  console.log(document.querySelector(".cookie-message button")); // test
  document.querySelector(".cookie-message button").addEventListener("click", function() {
    CookieMessage.accepted = true;
  });

}
