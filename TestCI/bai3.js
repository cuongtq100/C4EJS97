
function quay(){
let number = document.getElementById('number').value;
 if (number == 5){
    alert('Bạn đã Trúng thưởng');
}
else if(number>=0 && number <=10 && number !=5){
    alert('Bạn không trúng thưởng');
}
else{
    alert('bạn nhập sai hãy nhập lại');
}
}



