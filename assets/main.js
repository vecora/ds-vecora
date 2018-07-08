(function() {

  var cookieMessageToggle = document.getElementById("cookieMessageToggle");

  function updateCoockieMessageToggleText() {
    if (CookieMessage.accepted) {
      cookieMessageToggle.innerHTML = "Activate cookie message";
    } else {
      cookieMessageToggle.innerHTML = "Deactivate cookie message";
    }
  }


  // Initialize
  updateCoockieMessageToggleText();


  CookieMessage.onStatusChange = function() {
    updateCoockieMessageToggleText();
  }


  cookieMessageToggle.addEventListener("click", function() {

    if (CookieMessage.accepted) {
      CookieMessage.accepted = false;
    } else {
      CookieMessage.accepted = true;
    }

  });

})();
