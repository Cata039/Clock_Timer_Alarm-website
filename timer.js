// Declare timerInterval globally to make it accessible from both startTimer and resetTimer functions
var timerInterval;

// Function to start the timer
function startTimer() {
    var timeInput = document.getElementById("time-input");
    var time = timeInput.value;
    if (time === "") {
        alert("Please select a time.");
        return;
    }

    var timeParts = time.split(":");
    var hours = parseInt(timeParts[0], 10);
    var minutes = parseInt(timeParts[1], 10);
    var seconds = parseInt(timeParts[2], 10) || 0;

    var display = document.getElementById("timer");
    timerInterval = setInterval(function () {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            alert("Time is up!");

             // Function to make the timer appear and disappear on the screen three times
             var counter = 0;
             var intervalId = setInterval(function () {
                 if (counter >= 3) {
                     clearInterval(intervalId);
                     return;
                 }
 
                 // Toggle visibility of the timer
                 display.style.visibility = (display.style.visibility === 'visible') ? 'hidden' : 'visible';
                 counter++;
             }, 1000);

        } else {
            var formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
            display.textContent = formattedTime;

            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        clearInterval(timerInterval);
                        alert("Time is up!");
                    } else {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
        }
    }, 1000);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval); // Stop the timer interval
    var display = document.getElementById("timer");
    display.textContent = "00:00:00"; // Reset the display to 00:00:00
}

// Function to format time
function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

// Attach click event listener to the start button
document.getElementById("start-btn").addEventListener("click", startTimer);

// Attach click event listener to the reset button
document.getElementById("reset-btn").addEventListener("click", resetTimer);
