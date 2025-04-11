window.onload = function() {
    const username = prompt("Enter your username:");
    alert(`Welcome to the Formula One website${username ? ', ' + username : ''}!`);

    const mainTitle = document.querySelector('.main-title');
    mainTitle.style.color = 'red';
    mainTitle.style.transition = 'color 1s';

    document.getElementById('race-track-image').addEventListener('click', () => {
        alert("You clicked on the race track image!");
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseover', () => link.style.textDecoration = 'underline');
        link.addEventListener('mouseout', () => link.style.textDecoration = 'none');
    });

    const weatherElement = document.getElementById('weather');
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true')
        .then(response => response.json())
        .then(data => {
            weatherElement.textContent = data.current_weather
                ? `Current Weather: ${data.current_weather.temperature}°C`
                : 'Unable to fetch weather data.';
        })
        .catch(() => {
            weatherElement.textContent = 'Unable to fetch weather data.';
        });

    function updateClock() {
        document.getElementById('clock').textContent = new Date().toLocaleTimeString();
    }
    updateClock();
    setInterval(updateClock, 1000);
};