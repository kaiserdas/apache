// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
//pk_live_DIH0BmB1obyjQvuimdsJI9MH - live
//pk_test_51Id2gRBVqVZ2ueLqtIH9GclmrHJII2dhR7s8iGJqGsaOzukryligGXvYNnMkS4nomXb5rAAw8mZYmOrJxHtinU2Z00J4rsWz7z
var stripe = Stripe('pk_live_DIH0BmB1obyjQvuimdsJI9MH');
var elements = stripe.elements();
var acid = "";
var tokenx = "";
var device = "";
 function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return "";

                    }

                   function checkCookie() {
										var uToken = getCookie("userToken");
                     var dev = getCookie("device");
                      if (dev != ""){
                      device = dev;
                  }
										tokenx = uToken;
               var acidx = getCookie("acid")
                    if (acidx != ""){
                        acid = acidx;
                    }

                }
              
        
            checkCookie();

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
  var sku = getParameterByName('sku');

// Create an instance of the card Element.
var card = elements.create('cardNumber', {
	classes : {
		base: "form-control",
		
		invalid:"error"
	}
	
	
	
});

var cardexp = elements.create('cardExpiry', {
	classes : {
		base: "form-control",
		
		invalid:"error"
	}
	
	
	
});

var cardcvc = elements.create('cardCvc', {
	classes : {
		base: "form-control",
		
		invalid:"error"
	}
	
	
	
});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#stripecn');
cardexp.mount('#stripexpd');
cardcvc.mount('#stripecc');

// Create a token or display an error when the form is submitted.
// var formx = document.getElementById('payment-form');
// formx.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log(formx);

// });


var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  
  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the customer that there was an error.
     // var errorElement = document.getElementById('card-errors');
     // errorElement.textContent = result.error.message;
      // $('html, body').animate({ scrollTop: $('#card-errors').offset().top }, 'slow');
      // $("#modPurchase").modal('hide');
      
      $("#card-errors").html('');
     		$("#card-errors").append("<p style='color: red;'>"+ result.error.message +"</p>");
        $('html, body').animate({ scrollTop: $('#card-errors').offset().top }, 'slow');
        $("#modPurchase").modal('hide');
    } else {
      
     
      
      // Send the token to your server.
      stripeTokenHandler(result.token);
   
    }
  });
});

function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var skuu = getParameterByName('sku');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
 
  var dd = $('#payment-form').serialize(); 
	dd += "&tokenx=" + tokenx;
   dd += "&device=" + device;
 
 
  // Submit the form
  $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripe/dba.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
      
      if(data.result == "true"){
        gtag('event', 'conversion', {
      'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
      'value': data.price,
      'currency': 'USD',
      'transaction_id': ''
  });
      	console.log(data.ob);
      console.log(data.firstName);
       document.cookie = "cName="+data.firstName; 
      document.cookie = "cid="+data.cid; 
      document.cookie = "obx="+data.ob;
      document.cookie = "cmail="+data.cmail;
    //return false;
     
      function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return "";

                    }

                   function checkCookie() {

                     var fsw = getCookie("fs-watched");

                if (fsw != "") {
                 console.log("welcome back");
                } else {


                    document.cookie = "fs-watched=0";
                 

                }
              }
        
           // checkCookie();
        //ultracart tracking
  (function(img) { img.src = 'https://kaiserbody.com/api/conversions/ultracart?salePages=64&conversionData=' + encodeURIComponent('receipt=' + data.orderid + '&amount='+ data.price +'&products='+sku) + '&referrer=' + encodeURIComponent(document.referrer); })(new Image); 
   
        
        $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
      window.location.href = "/stage/u1-fatlossstacks-stripe";
      }
      
      if (data.result == "false"){
        window.location.href = "/stage/u1-fatlossstacks-stripe";
        
      }
      window.location.href = "/stage/u1-fatlossstacks-stripe";
    },
      error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {
       
        $("#card-errors").html('');
     		$("#card-errors").append("<p style='color: red;'>io Declined/Insufficient Funds.<br>Please Check your Card Details</p>");
        $('html, body').animate({ scrollTop: $('#card-errors').offset().top }, 'slow');
        $("#modPurchase").modal('hide');
      
        
      }
   
	 });
  
 
  
}