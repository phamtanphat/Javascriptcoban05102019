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
function dientichTamGiac(a , h){
    var s = a * h / 2
    // return hoac khong co return thi method tra ve gia tri undefined
    return s
}
console.log(dientichTamGiac(5 , 10))