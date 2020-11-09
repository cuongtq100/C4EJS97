function noichuoi(){
      

       let chuoimot = document.getElementById('chuoimot').value;
       let chuoihai = document.getElementById('chuoihai').value;
  
        let i, l = Math.max(chuoimot.length,chuoihai.length);
        let result = [];
for (i = 0; i < l; i++) {
       result.push(chuoimot[i],chuoihai[i]);
}


alert(result);
}