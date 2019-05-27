function initToggler() {
  let = elementToggler = document.querySelector(".vecora.navbar .toggler")
  // Add burger bars
  elementToggler.innerHTML = "<span></span><span></span><span></span>";

  // NOTE: Adding the event could theoretically go in main.js
  elementToggler.addEventListener("click", function (event) {
    event.target.classList.toggle("toggled");
  });
}


// Observe mutations so we can inject the burger imideatly after its parent appears.
var observer = new MutationObserver(function(mutationsList, observer) {
  for (i = 0; i < mutationsList.length; i++) {
    var mutation = mutationsList[i];
    if (mutation.type == 'childList') {
      elementToggler = document.querySelector(".vecora.navbar .toggler");
      if (elementToggler instanceof HTMLElement) {
        initToggler();
        observer.disconnect();
        break;
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true });
