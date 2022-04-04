let cookie = document.cookie.split(';').map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) =>
        ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

if (cookie.mood === "dark") {
    darkmood();
}
else {
    lightmood();
}

function lightmood() {
    document.getElementById('body').classList.remove("dark");
    document.cookie = "mood=light";
}

function darkmood() {
    document.getElementById('body').classList.add("dark");
    document.cookie = "mood=dark";
}

function togglebtn() {
    document.getElementById("togglebtn").classList.add("hidden");
    document.getElementById("crossbtn").classList.remove("hidden");

    document.getElementById("menu").classList.remove("hidden");
}
function crossbtn() {
    document.getElementById("crossbtn").classList.add("hidden");
    document.getElementById("togglebtn").classList.remove("hidden");

    document.getElementById("menu").classList.add("hidden");
}