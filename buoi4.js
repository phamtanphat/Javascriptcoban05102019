    //Bai tap
    /**
     * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
     * Tìm hiểu thêm indexOf:
     * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     * Example:
     * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
     * 
    */

    // function removeDuplicate(array = []) {
    //   // write code here...
    //     var arrayOutput = array.filter(function(item , index ,arr){
    //         // console.log(item , index)
    //         if(index == arr.indexOf(item)){
    //             return true
    //         }
    //         return false
    //     })
    //     return arrayOutput
        
    // }
    // console.log(removeDuplicate([1, 1, 2, 3, 3 ,4,4,5]))
// 16 : Math 

    // Math.round() : lam tron gia tri 
    // Math.ceil() : lam tron len
    // Math.floor() : lam tron xuong
    // Math.abs() : tri tuyet doi
    // Math.max() : tim ra gia tri lon nhat
    // Math.min() : tim ra gia tri nho nhat
    // Math.random() : tra 0 ~ 1
    // a = Math.random() * 10
    // console.log(Math.round(a))
    // bai tap 1 :
    // Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
    // [1,3,2,5,6] => [1,3,4,5,36]
    // function powerup(arr) {
    //   // your code here!
    //   return arr.map(function(item){
    //       if(item % 2 == 0) return Math.pow(item , 2)
    //       return item
    //   })
    // }
    // console.log(powerup([1,3,2,5,6]))
    //Bai tap 2 
    // * 
    //   Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
    //   Làm tròn điểm trung bình
    // */

    // function average(arr) {
    //     return Math.round(arr.reduce(function(total , currentvalue){
    //         return total + currentvalue
    //     },0) / arr.length)
    // }

    // console.log(average([8, 8 , 6.75])) // 8
    // Ví dụ
    /* 
    Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
    Yêu cầu sử dụng Math Object
        [1,-2,-3,-4,5,6,7,-8] => [1,2,3,4,5,6,7,8]
    // */
    // function positiveNumber(arr) {
    //   // your code here
    //     return arr.map(function(item){
    //         return Math.abs(item)
    //     })
    // }
    // console.log(positiveNumber([1,-2,-3,-4,5,6,7,-8]))
    // Ví dụ

    /** 
     * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
     * Cho biết đó có phải là tam giác vuông hay không? 
    */
    // function rightTriangle(a, b, c) {
    //   // your code here
    //   if(Math.pow(a , 2) == (Math.pow(b , 2) + Math.pow(c , 2))){
    //       return "day la tam giac vuong"
    //   }else{
    //       return "day khong phai la tam giac vuong"
    //   }
    // }
    // console.log(rightTriangle(7,3,4))
// 17 : Object handle
// var cat = {
//     name : 'Meo meo',
//     weight : '3 kg',
//     getWeight : function(){
//         console.log(this.weight)
//     }
// }
// constructor function
// camelcase : quy luat dat ten bien
// function Animal(name , weight){
//     this.name = name
//     this.weight = weight
//     this.eat = function(food){
//         console.log(food)
//     }
// }
// var cat2 = new Animal("cat",2)
// console.log(cat2.name)
// console.log(cat2.weight)
// cat2.boss = "Nguyen Van A"
// console.log(cat2.boss)
// **
//  * Viết hàm countProperty để in ra độ dài của một đối tượng
//  * @param {object}
//  * @return {number}
//  * 
//  * Example: 
//  * var student = {
//  *      name: "Jerry", 
//  *      age: 14,
//  *      role: "student"
//  *  }
//  * lengthObj(student); // length: 3
// }
// */

function countProperty(obj) {
  // viết code ở đây
  return Object.keys(obj).length
}
var student = {
    name: "Jerry", 
    age: 14,
    role: "student"
}
console.log(countProperty(student))