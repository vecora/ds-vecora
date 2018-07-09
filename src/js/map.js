Maps = {
  init: function() {

    var maps = document.querySelectorAll(".map");

    maps.forEach(function(element) {

      var map;
      map = new google.maps.Map(element, {
        center: {
          lat: parseFloat(element.dataset.lat),
          lng: parseFloat(element.dataset.lng)
        },
        zoom: parseInt(element.dataset.zoom)
      });

    });

  }
}
