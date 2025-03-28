function initMap(id, options = {}) {
    const map = L.map(id).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    if (options.marker) {
        L.marker([51.505, -0.09]).addTo(map).bindPopup("A marker!").openPopup();
    }
    if (options.imageMarker) {
        L.marker([51.515, -0.1], {
            icon: L.icon({
                iconUrl: 'images/desktop-logo.png',
                iconSize: [38, 95]
            })
        }).addTo(map);
    }
    if (options.geoJson) {
        L.geoJSON({
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.09, 51.505] },
            "properties": { "name": "GeoJSON Point" }
        }).addTo(map);
    }
    if (options.zoomControl === false) {
        map.zoomControl.remove();
    }
}

function makeDraggable(id) {
    const img = document.getElementById(id);
    img.onmousedown = function(event) {
        event.preventDefault();
        let shiftX = event.clientX - img.getBoundingClientRect().left;
        let shiftY = event.clientY - img.getBoundingClientRect().top;
        function moveAt(pageX, pageY) {
            img.style.left = pageX - shiftX + 'px';
            img.style.top = pageY - shiftY + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        img.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            img.onmouseup = null;
        };
    };
    img.ondragstart = function() { return false; };
}

initMap("map1");
initMap("map2", { marker: true });
initMap("map3", { imageMarker: true });
initMap("map4", {});
makeDraggable("draggable");
initMap("map5", { zoomControl: false });
initMap("map6", { geoJson: true });
initMap("map7", { geoJson: true });
initMap("map8", { geoJson: true });