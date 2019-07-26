function initToggler() {
  let = elementToggler = document.querySelector(".navbar__toggler")
  // Add burger bars
  elementToggler.innerHTML = "<span></span><span></span><span></span>";

  // NOTE: Adding the event could theoretically go in main.js
  elementToggler.addEventListener("click", function (event) {
    var element = event.target;
    element.classList.toggle("navbar__toggler--active");
    element.closest(".navbar").querySelector(".navbar__nav").classList.toggle("navbar__nav--active");
  });
}


// Observe mutations so we can inject the burger imideatly after its parent appears.
var observer = new MutationObserver(function(mutationsList, observer) {
  for (i = 0; i < mutationsList.length; i++) {
    var mutation = mutationsList[i];
    if (mutation.type == 'childList') {
      elementToggler = document.querySelector(".navbar__toggler");
      if (elementToggler instanceof HTMLElement) {
        initToggler();
        observer.disconnect();
        break;
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true });
// TODO: Handle multiple navbars on the same page.
