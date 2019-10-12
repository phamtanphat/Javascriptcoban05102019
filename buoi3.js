// 10 : Array method
    //Them va xoa gia tri trong mang
    // array.push : them 1 phan tu vao cuoi mang - tra ve kich thuoc mang
    // array.pop : xoa 1 phan tu cuoi - tra ve phan tu bi xoa
    // array.shift : xoa phan tu dau tien trong mang - tra ve phan tu bi xoa
    // array.unshift : them 1 phan tu vao dau mang - tra ve kich thuoc mang
    // array.splice : 
            // + Them gia tri vao vi tri nao arrayNumber.splice(vitri , 0 , giatrithemvao  )
            // - Xoa gia tri o vi tri arrayNumber.splice(vitri, soluongphantu  )
    // var arrayNumber = [1,2,3,4,5]
    // arrayNumber.push(6)
    // arrayNumber.pop
    // arrayNumber.shift()
    // // arrayNumber.unshift(0)
    // arrayNumber.splice(1 , 1  )
    // console.log(arrayNumber)
    //Btap 1 :
    // tra ve [2,3,1]
    // function removeEnd(arr, n) {
    //     arr.splice(arr.length  - n , n);
    //     return arr
    // }

    // console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));
    //Btap 2 :
    // Viết hàm JavaScript để lấy phần tử đầu tiên của mảng. Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng

    // function first(arr, n) {
    
    //     return  arr.splice(0 , n )
    // }

    // console.log(first([1, 2, 3], 2)); // expect [1, 2]
//11 : Callback la gia tri
    // var giangvien = {
    //     name : 'Pham Tan Phat',
    //     thoigianday : function(onFinish){
    //         console.log("Trua thu bay va sang chu nhat")
    //         onFinish()
    //     }
    // }
    // function finish(){
    //     console.log("Ket thuc buoi hoc")
    // }
    // var finish = function(){
    // }
    // giangvien.thoigianday(function(){
    //     console.log("Ket thuc")
    // })
    // var maylocnuoc = {
    //     name : 'May loc nuoc viet nam',
    //     locnuoc : function(onFinish){
    //         console.log("Dang trong trinh loc nuoc")
    //         onFinish()
    //     }
    // }
    // function lochoantat(){
    //     console.log("Loc hoan tat")
    // }
    // maylocnuoc.locnuoc(console.log())
    // Bai tap 1
    /**
     * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
     * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. Hàm sumAndDo làm nhiệm vụ tính tổng array đó, sau đó gọi callback function với tham số là kết quả tổng vừa tính
     */
    // function double(num) {
    //     console.log(num * 2)
    // }
    // function sumAndDo(nums, callback) {
    //     var sum = 0
    //     for(var value of nums){
    //         sum += value
    //     }
    //     callback(sum)
    // }

    // sumAndDo([1, 2, 3], double);
    //Bai tap 2 :
    /**
     * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
     * - Khai báo 1 biến result có giá trị là 1 empty array
     * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
     * - Trả về result array
     */
    // function transform(numbers, callback) {
    //     // Viết nội dung hàm ở đây 
    //         var arrayResult = []
    //         for(var value of numbers){
    //             arrayResult.push(callback(value))
    //         }
    //         return arrayResult
    //     }
    //     function double(num) {
    //       return num * 2;
    //     }
        
    //     var output = transform([2, 4, 6], double);
    //     console.log(output);
        // Expect: [4, 8, 12]
//12 : Ham map

    // var numbers = [1,2,3,4,5]

    // var newNumbers = numbers.map(function(num){
    //     return num * 2
    // })
    // console.log(newNumbers)

    //bai tap 1 :

    /**
     * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
     * 2. Sử dụng map method và hàm tripple để nhân 3 các phần 
     * tử trong mảng dưới đây
     */
    // Khai báo tripple function ở đây
    // function tripple(num){
    //     return num * 3
    // }
    // var numbers = [10, 5, 8];
    // var newNumbers = numbers.map(function(num){
    //     return tripple(num)
    // })
    // console.log(newNumbers)

    // Gợi ý: numbers.map... (tự viết tiếp)
    //Bai tap 2
    // Make an array of strings of the names
    // function namesOnly(arr) {
    //     var arrOutput = arr.map(function(item){
    //         return item.name
    //     })
    //     console.log(arrOutput)
    // }

    // namesOnly([
    //   {
    //     name: "Angelina Jolie",
    //     age: 80
    //   },
    //   {
    //     name: "Eric Jones",
    //     age: 2
    //   },
    //   {
    //     name: "Paris Hilton",
    //     age: 5
    //   },
    //   {
    //     name: "Kayne West",
    //     age: 16
    //   },
    //   {
    //     name: "Bob Ziroll",
    //     age: 100
    //   }
    // ])
    // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
    // bai tap 3 : tinh dien tich hinh chu nhat , S = A X B
    // function renderAcreage(arr) {
    //     var arrOutput = arr.map(function(item){
    //         return item.witdh * item.height
    //     })
    //     console.log(arrOutput)
    // }
    // renderAcreage([
    //   {
    //     witdh: 4,
    //     height : 6
    //   },
    //    {
    //     witdh: 5,
    //     height : 7
    //   },
    //   {
    //     witdh: 1,
    //     height : 3
    //   },
    //   {
    //     witdh: 5,
    //     height : 10
    //   },
    //   {
    //     witdh: 10,
    //     height : 10
    //   }
    // ]) 
// 13 : Ham filter
// var numbers = [1,2,3,4,5,6]
// var newNumbers = numbers.filter(function(item){
//     if(item > 3){
//         return true
//     }
//     return false
// })
// console.log(newNumbers)
//Bai tap 1
//Cho một mảng các số, trả về một mảng moi chỉ có các số từ 5 trở lên
// function fiveAndGreaterOnly(arr) {
//     return arr.filter(function(item){
//         if(item > 5){
//             return true
//         }
//         return false
//     })
// }
// console.log(fiveAndGreaterOnly([2,4,5,6,7,8,9,10]))
//Bai tap 2
// Ví dụ:
// Cho một mảng số, trả về một mảng mới chỉ bao gồm các số chẵn

// function evensOnly(arr) {
// 	return arr.filter(function(item){
//         return item % 2 == 0
//     })
// }
// console.log(evensOnly([1,2,3,4,5,6,7,8]))
