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


function cong(a , b){
    return new Promise((resolve , reject) =>{
        const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(url , function (error , response , body) {
            if(error) return reject(error.message)
            const value = JSON.parse(body)
            if(!value.success) return reject(value.message)
            return resolve(value.message)
        });
    })
}
cong(5,10)
.then(response => console.log(response))


// function tru(a , b , cb){
//     const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
//     request(url , function (error , response , body) {
//         if(error) return cb(error.message);
//         const value = JSON.parse(body)
//         if(!value.success) return cb(value.message)
//         return cb(null , value.message)
//     });
// }
// function nhan(a , b , cb){
//     const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
//     request(url , function (error , response , body) {
//         if(error) return cb(error.message);
//         const value = JSON.parse(body)
//         if(!value.success) return cb(value.message)
//         return cb(null , value.message)
//     });
// }
// function chia(a , b , cb){
//     const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
//     request(url , function (error , response , body) {
//         if(error) return cb(error.message);
//         const value = JSON.parse(body)
//         if(!value.success) return cb(value.message)
//         return cb(null , value.message)
//     });
// }
// cong(5 , 10 , function(error , body){
//     if(error) return console.log(error);
//     console.log(body);
// })
// dien tich hinh chu nhat (s = a * b)
// function dientich(a , b , cb){
//     nhan(a , b , function(error,value){
//         cb(error,value)
//     })
// }
// dientich(10 , 5 , function(error , value){
//     if(error) return console.log(error)
//     return console.log(value)
// })
// chu vi hinh chu nhat(P = (A + B) X 2)
// function chuvi( a , b , cb){
//     cong(a , b , function(error , tong){
//         if(error) return cb(error)
//         nhan(tong , 2 , function(error , tich){
//             if(error) return cb(error)
//             return cb(null , tich)
//         })
//     })
// }

// chuvi( 5 , undefined , function(error , value){
//     if(error) return console.log(error)
//     return console.log(value);
// })






















