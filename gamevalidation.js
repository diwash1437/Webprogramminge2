// Student id:- M23W0432
// Student name:- Diwash sherma


function updateTimer() {
    const now = new Date();
    document.getElementById("timer").textContent = now.toLocaleTimeString();
}

setInterval(updateTimer, 1000);
updateTimer();  // Initialize timer immediately


document.getElementById("gaming-survey-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Process form data here
    alert("Form Submitted!");
});

document.getElementById("gaming-survey-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var agree = document.getElementById("agree").checked; // Check if the 'Agree' checkbox is checked

    // Check if the name is less than 4 characters long
    if (name.length < 4) {
        alert("Name must be at least 4 characters long.");
        return; // Stop the function if the validation fails
    }
    else if (/\d/.test(name))   // Check if the name includes a number
    {
        alert("Number is not accepted in the name.");
        return; // Stop the function if the validation fails
    }
    else if (!name.includes(" "))     // Check if the name includes a space
    {
        alert("Please enter your full name with a space between your first name and last name.");
        return; // Stop the function if the validation fails
    }


    // If validation passes, process the form data
    var formData = new FormData(event.target);
    var formObject = {};

    formData.forEach(function (value, key) {
        formObject[key] = formObject[key] ? [...formObject[key], value] : value;
    });

    // Convert the form data to a JSON string and display it
    var json = JSON.stringify(formObject, null, 2);
    document.getElementById("jsonOutput").value = json;

    // Show the json-output-container
    document.querySelector(".json-output-container").style.display = 'block';

    // Reset all form fields except the JSON output
    Array.from(event.target.elements).forEach(function (element) {
        if (element.id !== "jsonOutput" && element.type !== 'submit') {
            element.value = '';
        }
    });

    // Alert the user that the form has been submitted
    alert("Form Submitted!");
});


document.addEventListener("DOMContentLoaded", function () {


    // for welcome 

    var welcomeSection = document.getElementById("welcome-section");
    var surveyContainer = document.querySelector(".container");

    setTimeout(function () {
        welcomeSection.style.display = 'none';
        surveyContainer.classList.remove('hidden');
        surveyContainer.classList.add('visible');
    }, 5000); // Adjust time as needed



    // for hours played

    var hoursInput = document.getElementById("hours-played");
    var hoursDisplay = document.getElementById("hours-display");

    // Initialize display with the input's value
    hoursDisplay.textContent = hoursInput.value;

    // Add event listener to update the display when the input value changes
    hoursInput.addEventListener("input", function () {
        hoursDisplay.textContent = hoursInput.value;
    });


    // for timer 


    var timerBanner = document.getElementById("timer-banner");

    function updateTimer() {
        const now = new Date();
        document.getElementById("timer").textContent = now.toLocaleTimeString();
    }

    function changeTimerBackgroundOnScroll() {
        var scrollPosition = window.scrollY || window.pageYOffset;
        // Change the background when user scrolls past 295px
        if (scrollPosition > 355) {
            timerBanner.classList.add('timer-active');
        } else {
            timerBanner.classList.remove('timer-active');
        }
    }

    // Initialize timer
    setInterval(updateTimer, 1000);
    updateTimer();

    // Check for scroll position and change background
    window.addEventListener('scroll', changeTimerBackgroundOnScroll);

    // Initial check
    changeTimerBackgroundOnScroll();
});

