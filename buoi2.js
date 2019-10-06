// 3 : Toan tu (Arthimetic Operator)

    // 1 : ++ --
    // 2 : * / %
    // 3 : + -

    // var a = 5;
    // a++ : gan truoc roi tang gia tri len 1 va nguoc lai
    // console.log(++a)
    //Btap 1 
    // var a = 10;
    // var h = 20;

    /**
     * a: cạnh đáy của 1 hình tam giác
     * h: chiều cao của tam giác đó
     * Yêu cầu: khai báo biến s bằng diện tích của hình tam giác này 
        1 / 2 a * h
    */
    // var s = a * h / 2
    // console.log(s)
    //Bai tap 2 
    // var width = 10;
    // var height = 20;

    // var s = width * height;
    /**
     * width: Chiều rộng của 1 hình chữ nhật
     * height: Chiều cao của hình chữ nhật
     * s: diện tích của hình chữ nhật (code mẫu)
     * Yêu cầu: 
     * - Khai báo biến p là chu vi của hình chữ nhật này.
     */
    // var p = (width + height) / 2
    // console.log(p)
    //Bai tap 3 :
    // var r = 10;

    // var s = r * r * 3.14;
    /**
     * r: Bán kính của 1 hình tròn
     * s: Diện tích của hình tròn đó
     * Yêu cầu: 
     * - Khai báo biến p là chu vi của hình tròn này.
     */
    // var p = r * 2 * 3.14
    // console.log(p)
    // phep tinh tang giam
    // var a = 5
    // var b = 6

    // var ketqua = ++a - ++b * --a + --b + b++ * a++ - --a

    //  6 - ++b * --a + --b + b++ * a++ - --a     a : 6 , b : 6
    //  6 - 7 * --a + --b + b++ * a++ - --a       a : 6 , b : 7
    //  6 - 7 *   5 + --b + b++ * a++ - --a       a : 5 , b : 7
    //  6 - 7 *   5 + 6 + b++ * a++ - --a         a : 5 , b : 6
    //  6 - 7 *   5 + 6 + 6 * a++ - --a           a : 5 , b : 7
    //  6 - 7 *   5 + 6 + 6 * 5 - --a             a : 6 , b : 7
    //  6 - 7 *   5 + 6 + 6 * 5 - 5               a : 5 , b : 7
    //  6 - 35      + 6 + 30    - 5
    //  2
    // console.log(ketqua)
//4 : Phep gan
    // var a = 5
    // var b = 6
    // a = b = 8
    // a *= 2
    //chia lay phan du
    // b %= 2 
    // console.log(b)
//5 : function 
    // function dientichTamGiac(a , h){
    //     var s = a * h / 2
        // return hoac khong co return thi method tra ve gia tri undefined
    //     return s
    // }
    // console.log(dientichTamGiac(5 , 10))


    // Bài tập: Viết hàm tính thể tích khối hộp.
    // Nhận vào các tham số như dưới, trả về thể tích của khối hộp.
    /**
     * Tính thể tích khối hộp
     * https://www.wikihow.com/Calculate-Volume-of-a-Box
     * @param {Number} w Chiều rộng
     * @param {Number} h Chiều cao
     * @param {Number} l Chiều dài
     * @returns {Number} Diện tích

    function getBoxVolume(w, h, l) {
        var v = w * h * l
        return v
    }
    
    console.log(getBoxVolume(10, 20, 30)); // 6000
    console.log(getBoxVolume(4, 5, 6)); // 120
    */
//6 : Object method
    // var khoapham = {
    //     name : 'Khoa Pham',
    //     age : 35,
    //     info : function(){
    //         console.log("Ten : " + this.name + " Tuoi : " + this.age)
    //     }
    // }
    // khoapham.info()
    /**
     * Khai báo biến `rectangle` là 1 object gồm có các property:
     * - width: chiều rộng, là 1 số bất kì
     * - height: chiều cao, là 1 số bất kì
     * Viết các method:
     * - getWidth: trả về chiều rộng
     * - getHeight: trả về chiều cao
     * - getArea: trả về diện tích
     */
    // const rectangle = {
    //     width : 10 ,
    //     height : 15 ,
    //     getWidth : function(){
    //         return this.width
    //     },
    //     getHeight : function(){
    //         return this.height
    //     },
    //     getArea : function(){
    //         return this.width * this.height 
    //     }
    // }
    // console.log(rectangle.getWidth())
    // console.log(rectangle.getHeight())
    // console.log(rectangle.getArea())
// 7 : Cac phep toan so sanh
    // Gia tri bang false : null , 0 , false , undefined , ""
    // var a = 5
    // var b = '5'
    // if( a === b){
    //     console.log("true")
    // }else{
    //     console.log("false")
    // }
    // Ví dụ:

    // var a = [1, 2];
    // var b = [1, 2];
    // console.log(a == b);
    // Chạy chương trình và tìm hiểu 
    // vì sao kết quả lại là false mặc dù giá trị của 2 array 
    // có vẻ giống nhau. Viết câu trả lời ở dưới đây.

    //Vi du
    // var a = 'A';
    // var b = 'a';

    // console.log(a > b);
    // Chạy chương trình và tìm hiểu vì sao kết quả lại là 
    //false mặc dù 1000 trông có vẻ lớn hơn 200. 
    //Viết câu trả lời ở dưới đây.
//8 : Vong lap
// Ví dụ
// var array = [1, 2, 4, 8, 16];
// /**
//  * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
//  * 16
//  * 8
//  * 4
//  * 2
//  * 1
//  */
// for(var i = array.length - 1 ; i > -1 ; i--){
//     console.log(array[i])
// }
