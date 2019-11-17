const request = require('request');
// let a = 0;
// setTimeout(() => {
//     a = 10;
//     cb(a);
// }, 1000);

// function cb(a){
//     console.log(a);
// }



// function getTemp(city , cb){
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${city}`;
//     request(URL , function (error , response , body) {
//         if(error) return cb(error.message);
//         const value = JSON.parse(body)
//         if(value.message) return cb("City not found");
//         return cb(null,value.main.temp);
//     });
// }
// getTemp('Saigon' , function (error , body){
//     if(error) return console.log(error);
//     return console.log(body);
// });

https://pheptinhonline.herokuapp.com/tru/-5/0

function cong(a , b , cb){
    const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
    request(url , function (error , response , body) {
        if(error) return cb(error.message);
        const value = JSON.parse(body)
        if(!value.success) return cb(value.message)
        return cb(null , value.message)
    });
}

cong(5 , 10 , function(error , body){
    if(error) return console.log(error);
    console.log(body);
})















