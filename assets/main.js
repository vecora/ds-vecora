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

var themeSwitcherApp = new Vue({
  el: '#theme-switcher',
  methods: {
    switchTheme: function (event) {
      console.log(event.target);
      var themeClass;
      switch(event.target.innerHTML) {
        case "Default":
          themeClass = "";
          break;
        case "Dark":
          themeClass = "theme-dark";
          break;
        case "Corporate":
          themeClass = "theme-corporate";
          break;
        case "Sales":
          themeClass = "theme-sales";
          break;
      }
      document.documentElement.classList.add(themeClass);
    }
  }
})
