// hàm để chia nhỏ chức năng của ứng dụng, tái sử dụng, dễ bảo trì, code tường minh hơn
//  khai báo hàm
//  function tenHam(){
//     //Nội dung chức năng của hàm
// }
// gọi hàm
// tenHam();


function xuatThongTin(){
    console.log('Hello Cybersoft');
}
//gọi hàm
xuatThongTin();


document.getElementById('btnTinhToan').onclick = function() {
    var num1 = document.getElementById('soThu1').value; 
    var num2 = document.getElementById('soThu2').value; 

    var tongLa = tinhTong(num1,num2)
    // // tinhTong(soThu1,soThu2)
    // //in ra màn hình tổng
    // document.getElementById('ketQua').innerHTML = tong;

    // var tong = tinhTong (Number(so))
    var hieu = num1 - num2;
    var tich = num1 * num2;
    var thuong = num1 / num2;

    var ketQua = 'Tổng: ' + tongLa + ',' +'Hiệu: ' + hieu + ',' + 'Tích: ' + tich + ',' + 'Thương: ' + thuong;
    document.getElementById('ketQua').innerHTML = ketQua;
}




function tinhTong(a,b){ //tính tổng 2 số (input1,input2,...)
    // Ghi chú : các input sẽ đc định nghĩa giá trị khi gọi hàm
    // console.log('Số A',soA);
    // console.log('Số B',soB);
    var sum = Number(a) + Number(b);
    return sum; //return output;


}


// // cách khai báo hàm t2
// var tenHam = function Ư
document.getElementById('btnThucHien').onclick = function(){


    thucHienThayDoiDiv('div1');
    thucHienThayDoiDiv('div2');
    thucHienThayDoiDiv('div3');
    // var num1 = document.getElementById('div1');
    // var num2 = document.getElementById('div2');
    // var num3 = document.getElementById('div3');

    // num1.style.fontSize = '1.5rem';
    // num1.style.border = '1px solid #000';
    // num1.style.backgroundColor = '#d4edda';
    // num1.style.textAlign = 'center';



    // num2.style.fontSize = '1.5rem';
    // num2.style.border = '1px solid #000';
    // num2.style.backgroundColor = '#d4edda';
    // num2.style.textAlign = 'center';
    // num2.style.fontWeight = 'bold';

    




    // num3.style.fontSize = '1.5rem';
    // num3.style.border = '1px solid #000';
    // num3.style.backgroundColor = '#d4edda';
    // num3.style.textAlign = 'center';

}
// khi chúng ta code 1 đoạn code chức năng lặp đi lặp lại nhiều lần thì chúng ta sẽ định nghĩa hàm


function thucHienThayDoiDiv(id){

    var div = document.getElementById(id)

    div.style.fontSize = '1.5rem';
    div.style.border = '1px solid #000';
    div.style.backgroundColor = '#d4edda';
    div.style.textAlign = 'center';
}