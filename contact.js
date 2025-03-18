var map = L.map('map', {
    center: [1.2921, 36.8219], 
    zoom: 12,
    zoomControl: false 
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var CustomZoomControl = L.Control.extend({
    options: {
        position: 'topright' 
    },

    onAdd: function(map) {
    
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

        var zoomInButton = L.DomUtil.create('a', 'leaflet-control-zoom-in', container);
        zoomInButton.innerHTML = '+';
        zoomInButton.title = 'Zoom in';

        var zoomOutButton = L.DomUtil.create('a', 'leaflet-control-zoom-out', container);
        zoomOutButton.innerHTML = '-';
        zoomOutButton.title = 'Zoom out';

    
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);

        L.DomEvent.on(zoomInButton, 'click', function(e) {
            L.DomEvent.preventDefault(e);
            map.zoomIn();
        });

        L.DomEvent.on(zoomOutButton, 'click', function(e) {
            L.DomEvent.preventDefault(e);
            map.zoomOut();
        });

        return container;
    }
});


map.addControl(new CustomZoomControl());

