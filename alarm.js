document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the dark theme
    function toggleDarkTheme() {
        document.body.classList.toggle('dark-theme');
        // Update the theme preference in localStorage
        const isDarkTheme = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }

    // Event listener for the theme toggle button
    const themeToggle = document.getElementById('theme-toggle-timer');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkTheme);
    }

    // Function to start the alarm
    function setAlarm() {
        var timeInput = document.getElementById("time-input");
        var time = timeInput.value;
        if (time === "") {
            alert("Please select a time.");
            return;
        }

        var currentTime = new Date();
        var alarmTime = new Date(currentTime.toDateString() + " " + time);

        // Calculate the difference between current time and alarm time in milliseconds
        var timeDiff = alarmTime.getTime() - currentTime.getTime();

        if (timeDiff <= 0) {
            alert("Please select a future time.");
            return;
        }

        // Set the alarm
        setTimeout(function () {
            // Play the alarm sound
            var audio = new Audio('alarm_sound.mp3');
            audio.play();

            // Show the alert
            alert("Time is up!");
        }, timeDiff);
    }

    // Attach click event listener to the start button
    const startBtn = document.getElementById("start-btn");
    if (startBtn) {
        startBtn.addEventListener("click", setAlarm);
    }

    // Retrieve the theme preference from localStorage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
