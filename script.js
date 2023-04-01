fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip-address").textContent = data.ip;
        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=af0d9ea1f961424f87ec5de79303de23&ip=${data.ip}`)
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country_code2.toLowerCase();
                document.getElementById("country-flag").classList.add(`flag-icon-${countryCode}`);
            });
    });
