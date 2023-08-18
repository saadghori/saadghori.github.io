
console.log("Hello from app.js!");

document.addEventListener("DOMContentLoaded", function () {
    var hireRadio = document.getElementById("hiring");
    var hourlyContainer = document.getElementById("hourly-rate-container");

    function toggleHourlyRateInput() {
        if (hireRadio.checked) {
            hourlyContainer.style.display = "block";
        } else {
            hourlyContainer.style.display = "none";
        }
    }
    toggleHourlyRateInput();

    var radioButtons = document.querySelectorAll('input[name="topic"]');
    radioButtons.forEach(function (radio) {
        radio.addEventListener("change", toggleHourlyRateInput);
    });
});


