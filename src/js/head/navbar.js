var togglerClass = "navbar__toggler";
var togglerSelector = "." + togglerClass;
var panelClass = "navbar__panel";
var panelSelector = "." + panelClass;

function initToggler() {
  let = elementToggler = document.querySelector(togglerSelector)
  // Add burger bars
  elementToggler.innerHTML = "<span></span><span></span><span></span>";

  // NOTE: Adding the event could theoretically go in main.js
  elementToggler.addEventListener("click", function (event) {
    var element = event.target;
    element.classList.toggle(togglerClass + "--active"); 
    element.closest(".navbar").querySelector(panelSelector).classList.toggle(panelClass + "--active");
  });
}


// Observe mutations so we can inject the burger imideatly after its parent appears.
var observer = new MutationObserver(function(mutationsList, observer) {
  for (i = 0; i < mutationsList.length; i++) {
    var mutation = mutationsList[i];
    if (mutation.type == 'childList') {
      elementToggler = document.querySelector(togglerSelector);
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
