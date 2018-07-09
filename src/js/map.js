Maps = {
  init: function() {

    var maps = document.querySelectorAll(".map");

    maps.forEach(function(element) {

      var map;
      map = new google.maps.Map(element, {
        center: {lat: element.dataset.lat, lng: element.dataset.lng},
        zoom: element.dataset.zoom
      });

    });

  }
}
