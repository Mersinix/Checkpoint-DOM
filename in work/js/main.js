// Get the Html element
let price=document.getElementById('price').value;
let plus=document.getElementsByClassName('glyphicon glyphicon-plus');
let moins=document.getElementsByClassName('glyphicon glyphicon-moins');
let totalprice=document.getElementsById('plus-moins-sub');


function remov(){
    let leave=document.getElementsByClassName('like-out-1');
    let btn=document.getElementsByClaName('removeBtn');
    
    btn.addEventListener('click',function(){
        leave.remove();
        });
};

    
// Create increment decrement function
// article1
function increment() {
    document.getElementById("plus-moins-number").stepUp(1);
  }
  function decrement() {
    document.getElementById("plus-moins-number").stepUp(-1);
  };

//   article2
  function increment2() {
    document.getElementById("plus-moins-number-2").stepUp(1);
  }
  function decrement2() {
    document.getElementById("plus-moins-number-2").stepUp(-1);
  };
  //   article3
  function increment3() {
    document.getElementById("plus-moins-number-3").stepUp(1);
  }
  function decrement3() {
    document.getElementById("plus-moins-number-3").stepUp(-1);
  };


//  Create subtotal function
function subtotal(){
    let number = document.getElementById("plus-moins-number").value;
   totalprice.value= number*29.99;
   document.getElementsById('plus-moins-sub').value=totalprice;
   // Get the input value
    plus.addEventListener('click',subtotal);
    moins.addEventListener('click',subtotal);
    };





 


  //  Create subtotal function
 