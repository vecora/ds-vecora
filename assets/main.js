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


    cookieMessageToggle.addEventListener("click", function() {

      if (CookieMessage.accepted) {
        CookieMessage.accepted = false;
      } else {
        CookieMessage.accepted = true;
      }

    });

  }

})();


// Theme switcher
if (document.querySelector("#theme-switcher")) {

  // Initialize
  var themeClass = localStorage.getItem('themeClass');

  $(document).ready(function() {

    document.documentElement.className = themeClass;

    switch (themeClass) {
      case "theme-dark":
        document.getElementById('theme-dark').checked = true;
        break;
      case "theme-corporate":
        document.getElementById('theme-corporate').checked = true;
        break;
      case "theme-sales":
        document.getElementById('theme-sales').checked = true;
        break;
      default:
        document.getElementById('theme-default').checked = true;
    }
  });


  var themeSwitcherApp = new Vue({
    el: '#theme-switcher',
    methods: {
      switchTheme: function (themeClass) {
        document.documentElement.className = themeClass;
        localStorage.setItem("themeClass", themeClass);
      }
    }
  });

}
