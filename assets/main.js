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

// Initialize
document.documentElement.className = localStorage.getItem('themeClass');

var themeSwitcherApp = new Vue({
  el: '#theme-switcher',
  methods: {
    switchTheme: function (themeClass, event) {
      document.documentElement.className = themeClass;
      localStorage.setItem("themeClass", themeClass);
      document.querySelectorAll("#theme-switcher a").forEach(function(el) {
        el.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  }
})
