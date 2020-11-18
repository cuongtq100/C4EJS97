
   let yess = document.getElementById('yes').outerHTML;
   let nos = document.getElementById('no').outerHTML;
   let varl = [yess,nos];
  function no(){
   
      document.getElementById('answers').innerHTML = varl.reverse();
  }
  



function yes(){
    alert('ok');
}