

window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature__description > p");
    let temperatureValue = document.querySelector(".temperature__value h2 span");
    let locationName = document.querySelector(".location__name > h2");
    let locationTime = document.querySelector(".location__time > p")


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            let unit = "si";

            console.log(lat);
            console.log(long);

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.darksky.net/forecast/1cc842fdbf881dfd6b1242cbd0ed8c1b/${lat},${long}?units=${unit}`

            fetch(api)
                .then(data =>{
                    return data.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, icon} = data.currently;

                    const date = new Date();
                    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', year: 'numeric', month: 'short', day: 'numeric' };

                    // Setting the values
                    temperatureValue.textContent = Math.floor(temperature);
                    temperatureDescription.textContent = summary;
                    locationName.textContent = data.timezone;
                    locationTime.textContent = date.toLocaleString('en-US', options);              

                    // Setting icon
                    setIcons(icon, document.querySelector(".icon"));
                });
        });

        function setIcons(icon, iconID) {
            const skycons = new Skycons ({color: "#3a5185"});
            const currentIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[currentIcon]);
        }
    }
});