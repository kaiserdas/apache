$(document).ready(function(){
    // confirm();
  
    window.top.postMessage('3DS-authentication-complete');
});
var stripe = Stripe('pk_live_DIH0BmB1obyjQvuimdsJI9MH');
function on3DSComplete() {
    // Hide the 3DS UI
    // yourContainer.remove();
    var client_secret = getCookie('_clisk');
    // Check the PaymentIntent
    stripe.retrievePaymentIntent(client_secret)
      .then(function(result) {
   
        if (result.error) {
          // PaymentIntent client secret was invalid
          $("#purchase-stat").text("There seems to be an error with your purchase. Please contact your issuing bank");
          $("purchase-stat").addClass("text-danger");
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            // Show your customer that the payment has succeeded
            var testid = getCookie('testid');
            var price = getCookie("orderprice");
            var bot = parseInt(getCookie("bot"));
            var orderid = getCookie("oid");
            window.MC_PIXEL.fireLogMoneyEvent('Purchased - Dream Body Academy', price, 'USD');
            //google track
            dataLayer.push({'event':'checkout_purchase','conversionValue':price});
            gtag('event', 'conversion', {
              'send_to': 'AW-10803493079/tJn5CNrc14EDENfxwJ8o',
              'value': price,
              'currency': 'USD',
              'transaction_id': orderid
          });

           
            if (testid != ''){ // there is an active test
              recordPurchase(testid, price, bot);
            } else {
              findNextPage(bot);
            }
          } else if (result.paymentIntent.status === 'requires_payment_method') {
            // Authentication failed, prompt the customer to enter another payment method
            $("#purchase-stat").text("It seems your card isn't capable of this purchase, please contact your bank or use another card");
            $("purchase-stat").addClass("text-danger");
          }
        }
      });
  }

  window.addEventListener('message', function(ev) {
    if (ev.data === '3DS-authentication-complete') {
      on3DSComplete();
    }
  }, false);


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




    function confirm(){
        var si_id = getCookie("_siid");
        var pi_id = getCookie("_piid");
        var pm_id = getCookie("_pmid");
        var cid = getCookie("cid");
        var dd = {'si_id':si_id, "pm_id": pm_id, "pi_id": pi_id, "cid": cid};
        $.ajax({
            type: 'POST',
            url: 'https://pay.kaiserfitapp.com/stripe/confirmSetupIntent.php',
            crossDomain: true,
            data: dd,
            dataType: 'json',
            success: function(data) {
                console.log(data);

            }

        }); // end ajax
    }