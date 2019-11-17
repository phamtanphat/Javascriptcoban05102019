// let a = 0;
// setTimeout(() => {
//     a = 10;
//     cb(a);
// }, 1000);

// function cb(a){
//     console.log(a);
// }
const request = require('request');


function getTemp(city){
    const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${city}`;
    request(URL , function (error , response , body) {
        if(error) return console.log(error.message);
        const value = JSON.parse(body)
        if(value.message) return console.log("City not found");
        return console.log(value.main.temp);
    });
}
getTemp('Saigon');