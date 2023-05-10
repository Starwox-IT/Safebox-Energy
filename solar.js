const hamburger = document.querySelector(".hamburger-cunt");
const hamburgerTop = document.querySelector(".top");
const hamburgerMid = document.querySelector(".mid");
const hamburgerBottom = document.querySelector(".bottom");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburgerTop.classList.toggle("rotate45");
  hamburgerMid.classList.toggle("hidden");
  hamburgerBottom.classList.toggle("rotateNeg45");
  navLinks.classList.toggle("d-none");
  body.classList.toggle("no_scroll");
});

// const currentPage = document.documentElement;
// const amount = currentPage.dataset.amount;

// const amountInput = document.getElementById('amount');
// amountInput.value = amount;

// if (window.location.href === "http://127.0.0.1:5503/payform.html") {
  
// }

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');
console.log(productId)

if(productId == 1){
  document.getElementById('amount').value = 805300;
}else if(productId == 2){
  document.getElementById('amount').value = 1551600;
}else if(productId == 3){
  document.getElementById('amount').value =  1833600;
}

const sendEmail = (e) => {
  e.preventDefault();
}


function payWithPaystack() {
    const form = document.getElementsByTagName('form')[0];
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const amount = form.elements['amount'].value * 100;
  
  var handler = PaystackPop.setup({ 
      key: 'pk_live_40fcfda186e9ee39aeb5c0eee56fad66db99a25c', //put your public key here
      email, //put your customer's email here
      amount, //amount the customer is supposed to pay
      metadata: {
          custom_fields: [
              {
                  display_name: "Full Name",
                  variable_name: "full_name",
                  value: name 
              }
          ]
      },
      callback: function (response) {
          //after the transaction have been completed
          //make post call  to the server with to verify payment 
          //using transaction reference as post data
          $.post("verify.php", {reference:response.reference}, function(status){
              if(status == "success")
                  //successful transaction
                  alert('Transaction was successful');
              else
                  //transaction failed
                  alert(response);
          });
      },
      onClose: function () {
          //when the user close the payment modal
          alert('Transaction cancelled');
      }
  });
  handler.openIframe(); //open the paystack's payment modal
}