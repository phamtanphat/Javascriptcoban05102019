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
            if(error) return reject(error)
            const value = JSON.parse(body)
            if(!value.success) return reject(value.message)
            return resolve(value.message)
        });
    })
}

function tru(a , b ){
    return new Promise((res , rej) => {
        const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(url , function (error , response , body) {
            if(error) return rej(error)
            const value = JSON.parse(body)
            if(!value.success) return rej(value.message)
            return res(value.message)
        });
    })
}
function nhan(a , b ){
    return new Promise((res , rej) => {
        const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(url , function (error , response , body) {
            if(error) return rej(error)
            const value = JSON.parse(body)
            if(!value.success) return rej(value.message)
            return res(value.message)
        });
    })
}
function chia(a , b , cb){
    return new Promise((res , rej) => {
        const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(url , function (error , response , body) {
            if(error) return rej(error)
            const value = JSON.parse(body)
            if(!value.success) return rej(value.message)
            return res(value.message)
        });
    })
}
// cong(5 , 10 , function(error , body){
//     if(error) return console.log(error);
//     console.log(body);
// })
// dien tich hinh chu nhat (s = a * b)
function dientich(a , b ){
    return new Promise((res,rej) => {
        nhan(a , b)
        .then(tich => res(tich))
        .catch(error => rej(error))
    })
}
// dientich( 5 , 6)
// .then(dientich => console.log(dientich))
// .catch(error => console.log(error))
// chu vi hinh chu nhat(P = (A + B) X 2)
function chuvi( a , b ){
    return new Promise((res , rej) => {
        cong(a , b )
        .then(tong => nhan(tong , 2))
        .then(chuvi => res(chuvi))
        .catch(error => rej(error))
    })
}

chuvi( 5 , 10)
.then(ketqua => console.log(ketqua))
.catch(error => console.log(error))






















