const weatherDisplay = document.getElementById('weatherDisplay');
const input = document.getElementById('input');

const localstorage = {
    'cairo': {
        city: 'Cairo',
        temp: 28,
        description: 'sunny',
        icon: '../images/sunny.png'
    },
       'giza': {
        city: 'giza',
        temp: 30,
        description: 'sunny',
        icon: '../images/sunny.png'
    },
       'alexandria': {
        city: 'alexandria',
        temp: 22,
        description: 'rainy',
        icon: '../images/rainy.png'
    },
       'sohag': {
        city: 'sohag',
        temp: 37,
        description: 'windy',
        icon: '../images/windy.png'
    },
    
    'siwa': {
        city: 'siwa',
        temp: 40,
        description: 'Windy',
        icon: '../images/windy.png'
    },
    'portsaid': {
        city: 'portsaid',
        temp: 25,
        description: 'Rainy',
        icon: '../images/rainy.png'
    }
};

function display(data) {
    const iconElement = `<img src="${data.icon}" class="weather-icon">`
    
    weatherDisplay.innerHTML = `
        ${iconElement}
        <div class="temp">${data.temp}°C</div>
        <div class="city">${data.city}</div>
        <div class="description">${data.description}</div>
    `;
}

function error() {
    weatherDisplay.innerHTML = `
        <div class="description">Not found! try searching for another city</div>
    `;
}

function search() {
    const city = input.value.trim().toLowerCase();
    if (localstorage[city]) {
        display(localstorage[city]);
    } else {
        error();
    }
}

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        search();
    }
});

// Initialize with Cairo weather
window.addEventListener('load', function() {
    input.value = 'Cairo';
    search();
});