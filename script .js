// Google Maps
function initMap() {
    const nyanza = { lat: -2.352, lng: 29.745 }; // Your exact coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: nyanza,
    });
    const marker = new google.maps.Marker({
        position: nyanza,
        map: map,
        title: "Mignone Electronics Ltd"
    });
}

// Repair Form
document.getElementById("repairForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("form-message").innerText = "✅ Thank you! Your repair request has been submitted.";
    this.reset();
