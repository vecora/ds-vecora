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


// Initialize
var themeClass = localStorage.getItem('themeClass');
document.documentElement.className = themeClass;

// Theme switcher
if (document.querySelector("#theme-switcher")) {



  $(document).ready(function() {

    switch (themeClass) {
      case "--dark":
        document.getElementById('--dark').checked = true;
        break;
      case "--corporate":
        document.getElementById('--corporate').checked = true;
        break;
      case "--sales":
        document.getElementById('--sales').checked = true;
        break;
      case "--book":
        document.getElementById('--book').checked = true;
        break;
      default:
        document.getElementById('--default').checked = true;
    }
  });


  // WARNING: May conflict with other vue.js apps soon.
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
