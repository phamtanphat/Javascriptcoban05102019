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