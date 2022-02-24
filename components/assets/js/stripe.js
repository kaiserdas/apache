// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
//pk_live_DIH0BmB1obyjQvuimdsJI9MH - live
//pk_test_51Id2gRBVqVZ2ueLqtIH9GclmrHJII2dhR7s8iGJqGsaOzukryligGXvYNnMkS4nomXb5rAAw8mZYmOrJxHtinU2Z00J4rsWz7z
var stripe = Stripe('pk_live_DIH0BmB1obyjQvuimdsJI9MH');
var elements = stripe.elements();
var acid = "";
var tokenx = "";
var device = "";
function getUserDate(){
    var d = new Date();
  
    var date1 = d.getFullYear() + '-' +
              ((d.getMonth()+1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) +
              '-' +
              (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());
  
  var time1 = (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) +
              ':' +
              (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) +
              ':' +
              (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
  
              var dd = date1+ " " +time1;
            return dd;
  }



function findNextPage(bot){
  	
  	switch (bot) {
      case 1:
        window.location.href="/queen-formula-3.html";
        break;
      case 3 :
        window.location.href="/queen-formula-6.html";
        break;
       case 6 :
        window.location.href="/queen-formula-12.html";
        break;
        
      default:
        window.location.href="/queen-formula-3.html";
        break;
    }
  
}


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

                    } //end getcookie function

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

     } //end checkCookie function
              
        
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

  function recordPurchase(testid, price, bot){ //function to record purchase if there is an active test
    fbq('track', 'Purchase', {
      value: price,
      currency: 'USD'
      });
    var page = getCookie('page');
    document.cookie="spid="+testid;
    document.cookie="stp="+page;
    var mobile = getCookie('mobile');
    $.ajax({
      type: 'POST',
      url: 'https://pay.kaiserfitapp.com/split_test/purchase.php',
      crossDomain: true,
      data: {'testid': testid,'page_name': page,'price': price, 'mobile': mobile},
      dataType: 'json',
      success: function(data) {
        
        if (data.result){
          findNextPage(bot);
        } else {
          findNextPage(bot);
        }
        
      },
       error: function(data){
         console.log(data);
       }
        });
  }


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
 var fbclid = getParameterByName("fbclid");
 var fbclid = getCookie("_fbc");
  if (fbclid) {
    document.cookie ="fbclid="+fbclid;
  }
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
 
  var dd = $('#payment-form').serialize(); 
  var sku_id = getCookie("sku_id");
  var pdate = getUserDate();
  dd += "&sku_id=" + sku_id;
	dd += "&tokenx=" + tokenx;
  dd += "&acid=" + acid;
   dd += "&device=" + device;
 	dd += "&pdate="+pdate;
  dd += "&fbclid="+fbclid;
  dd += "&url="+window.location.href;
  // Submit the form
  $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripe/kaisercoach.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
      
     var bot = data.bot;
      
      if(data.result == "true"){
        console.log(data);
        var price = data.price;
        // fbq('track', 'Purchase', {
        //   value: price,
        //   currency: 'USD'
        //   });
        
    //   ttq.track('CompletePayment', {
    //     content_id: sku_id,
    //     content_type: 'product',
    //     content_name: 'Dream Body in 90',
    //     quantity: 1,
    //     price: price,
    //     value: price,
    //     currency: 'USD',
	// 	});
 
  gtag('event', 'conversion', {
    'send_to': 'AW-10803493079/tJn5CNrc14EDENfxwJ8o',
    'value': data.price,
    'currency': 'USD',
    'transaction_id': data.orderid
});
        document.cookie = "bot="+bot;
      document.cookie = "orderprice="+ price;
       document.cookie = "cName="+data.firstName; 
      document.cookie = "cid="+data.cid; 
      document.cookie = "obx="+data.ob;
      document.cookie = "cmail="+data.cmail;
        document.cookie = "oid="+data.orderid;
         document.cookie = "__u_hash="+data.hash;
         document.cookie = "app=true";
		
        $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
      //window.location.href="/u1-fatlossstacks-stripe";
      var testid = getCookie('testid');
      if (testid != ''){ // there is an active test
        recordPurchase(testid, price, bot);
      } else {
        findNextPage(bot);
      }
       
      }
      
      if (data.result == "false"){
        console.log(data);
         $("#card-errors").html('');
     		$("#card-errors").append("<p style='color: red;'>Card Declined/Insufficient Funds.<br>Please Check your Card Details</p>");
        $('html, body').animate({ scrollTop: $('#card-errors').offset().top }, 'slow');
        $("#modPurchase").modal('hide');
        return false;
       // window.location.href="/u1-fatlossstacks-stripe";
        
      }
     // window.location.href="/u1-fatlossstacks-stripe";
      
    },
      error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {
        console.log('error', data);
        $("#card-errors").html('');
     		$("#card-errors").append("<p style='color: red;'>Card Declined/Insufficient Funds.<br>Please Check your Card Details</p>");
        $('html, body').animate({ scrollTop: $('#card-errors').offset().top }, 'slow');
        $("#modPurchase").modal('hide');
      
        
      }, done: function () {

        console.log('done');
      }
   
	 });
  
 
  
}

