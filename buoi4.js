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
function powerup(arr) {
  // your code here!
  return arr.map(function(item){
      if(item % 2 == 0) return Math.pow(item , 2)
      return item
  })
}
console.log(powerup([1,3,2,5,6]))
//Bai tap 2 
// * 
//   Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
//   Làm tròn điểm trung bình
// */

function average(arr) {
}

average([8, 8 , 6.75]) // 8


