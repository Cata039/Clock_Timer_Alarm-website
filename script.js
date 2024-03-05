document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle button element
    const themeToggle = document.getElementById('theme-toggle');

    // Function to toggle the dark theme
    function toggleDarkTheme() {
        document.body.classList.toggle('dark-theme');
    }

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', toggleDarkTheme);
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Pad single digit hours, minutes, and seconds with leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Construct the time string in "00:00:00" format
    var timeString = hours + ':' + minutes + ':' + seconds;

    // Update the clock element
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000); // Update every second

// Initial call to display the clock immediately
updateClock();
