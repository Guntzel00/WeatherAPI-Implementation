// window.addEventListener('onload', getLocation())

// function getLocation(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//     alert("If it's not working please check if you have enable your geolocation or your browser supports it.");
//     }
// }

// function showPosition(position) {
//     long = position.coords.longitude;
//     lat = position.coords.latitude;

//     console.log(lat);
//     console.log(long);
// }
// showPosition();

window.addEventListener("load", ()=> {
    let long;
    let lat;


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            console.log(lat);
            console.log(long);

            const api = `https://api.darksky.net/forecast/1cc842fdbf881dfd6b1242cbd0ed8c1b/${lat},${long}`

            fetch(api)
                .then(data =>{
                    return data.json();
                })
                .then(data => {
                    console.log(data);
                });
        });
    }
});