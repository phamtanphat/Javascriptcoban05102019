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
function removeEnd(arr, n) {
    arr.splice(arr.length  - n , n);
    return arr
}

console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));