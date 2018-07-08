(function() {

  var cookieMessageToggle = document.getElementById("cookieMessageToggle");

  if (cookieMessageToggle) {

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

    console.log(cookieMessageToggle); // test
    cookieMessageToggle.addEventListener("click", function() {

      if (CookieMessage.accepted) {
        CookieMessage.accepted = false;
      } else {
        CookieMessage.accepted = true;
      }

    });

  }

})();
