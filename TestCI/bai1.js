
let n = Number(prompt('nhập 1 số chẵn từ 4-20'));
 while (n<=4 || n>=20 || n%2!=0){
       n = Number(prompt('nhập lại 1 số chẵn từ 4-20'));
 }
  
       let input =Number(prompt('nhập số cần tìm'))
       let find = n/2 + input;
       let xfind = input - n/2;
       if(n/2 > input){
              alert('số đối là: '+ find);
       }
       else{
              alert('số đối là:' +xfind);
       }
 

