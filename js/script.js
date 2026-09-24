// SEARCH PG
function searchPG() {

    let searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".pg-card");

    cards.forEach(function(card) {

        let cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// VIEW DETAILS
function viewDetails(pgName) {

    localStorage.setItem("selectedPG", pgName);

    window.location.href = "pg-details.html";
}


// BACK BUTTON
function goBack() {

    window.location.href = "pg-list.html";

}


// PG DATA
let pgData = {

    "Sunshine Girls PG": {
        image: "images/pg2.jpg",
        location: "Near Kiet College",
        price: "₹9000 / Month",
        room: "Double Seater",
        food: "Food Available",
        security: "Security Available",
        wifi: "WiFi Available",
        description: "Comfortable and affordable PG with a safe and friendly environment."
    },

    "Comfort Stay Boys PG": {
        image: "images/OIP (1).webp",
        location: "Muradnagar",
        price: "₹8000 / Month",
        room: "Double Seater",
        food: "Food Available",
        security: "Security Available",
        wifi: "WiFi Available",
        description: "Comfortable boys PG with a safe and peaceful environment."
    },

    "Happy Home Girls PG": {
        image: "images/OIP.webp",
        location: "Meerut Road",
        price: "₹6000 / Month",
        room: "Single Seater",
        food: "Food Available",
        security: "Security Available",
        wifi: "WiFi Available",
        description: "Affordable girls PG with comfortable rooms and good facilities."
    },

    "Green view Girls PG": {
        image: "images/pg4.jpg",
        location: "Mohanagar",
        price: "₹6800 / Month",
        room: "Triple Seater",
        food: "Food Available",
        security: "Security Available",
        wifi: "WiFi Available",
        description: "A comfortable girls PG with a peaceful environment and useful facilities."
    },

    "Student Nest Girls PG": {
        image: "images/pg5.webp",
        location: "Indirapuram",
        price: "₹7500 / Month",
        room: "Triple Seater",
        food: "Food Available",
        security: "Security Available",
        wifi: "WiFi Available",
        description: "Student-friendly PG with comfortable rooms and essential facilities."
    },

    "Royal Residency Boys PG": {
        image: "images/single-room-2.jpg",
        location: "Oppsite Kiet College",
        price: "₹5500 / Month",
        room: "Single Seater",
        food: "Food Available",
        security: "Security Available",
        wifi: "WiFi Available",
        description: "Affordable boys PG near KIET College with a comfortable environment."
    }

};


// LOAD SELECTED PG DETAILS
let selectedPG = localStorage.getItem("selectedPG");

if (selectedPG && pgData[selectedPG]) {

    let pg = pgData[selectedPG];

    document.getElementById("pgImage").src = pg.image;
    document.getElementById("pgImage").alt = selectedPG;

    document.getElementById("pgName").innerText = selectedPG;

    document.getElementById("pgLocation").innerText = "📍 " + pg.location;

    document.getElementById("pgPrice").innerText = "💰 " + pg.price;

    document.getElementById("pgRoom").innerText = "🏠 Room Type - " + pg.room;

    document.getElementById("pgFood").innerText = "🍽️ " + pg.food;

    document.getElementById("pgSecurity").innerText = "🔐 " + pg.security;

    document.getElementById("pgWifi").innerText = "📶 " + pg.wifi;

    document.getElementById("pgDescription").innerText = pg.description;

}