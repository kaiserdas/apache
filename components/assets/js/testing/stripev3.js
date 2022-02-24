// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
//pk_live_DIH0BmB1obyjQvuimdsJI9MH - live
//pk_test_51Id2gRBVqVZ2ueLqtIH9GclmrHJII2dhR7s8iGJqGsaOzukryligGXvYNnMkS4nomXb5rAAw8mZYmOrJxHtinU2Z00J4rsWz7z
$(document).ready(function(){
    var x = getCookie('kffts3')
      if (x == ''){
        view();
        
      }
  });
  
  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  
  function view(){
    var r;
  
    var m = window.mobileCheck();
    var p = "checkout";
    var dat = {'c': 'v', 'm': m, 'p': p};
    if (document.referrer) {
      url = document.referrer; 
      r = url.match(/:\/\/(.[^/]+)/)[1];
      dat = {'c': 'v', 'm': m,'r': r, 'p': p};
   } 
    $.ajax({
      type: 'POST',
      url: 'https://pay.kaiserfitapp.com/rec/rec.php',
      crossDomain: true,
      data: dat,
      dataType: 'json'
  
      }); //end ajax
  
      document.cookie="kffts3=1";
  }
  
  function conv(ob, price){
    var m = window.mobileCheck();
    var p = "checkout";
    $.ajax({
      type: 'POST',
      url: 'https://pay.kaiserfitapp.com/rec/rec.php',
      crossDomain: true,
      data: {'c': 'c', 'm': m, 'p': p, 'o': ob, 'v': price},
      dataType: 'json'
  
      }); //end ajax
  
      document.cookie="kfftc3=1";
  }
  
//   var stripe = Stripe('pk_live_DIH0BmB1obyjQvuimdsJI9MH');//live
  var stripe = Stripe('pk_test_laGA1Jl4I44TUJFzQJI8DNuD'); //test
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
            setTimeout(function(){
                 window.location.href="/queen-formula-3.html";
            }, 500);
          break;
        case 3 :
            setTimeout(function(){
                window.location.href="/queen-formula-6.html";
           }, 500);
         
          break;
         case 6 :
            setTimeout(function(){
                window.location.href="/queen-formula-12.html";
           }, 500);
         
          break;
          
        default:
            setTimeout(function(){
                window.location.href="/queen-formula-3.html";
           }, 500);
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
      // fbq('track', 'Purchase', {
      //   value: price,
      //   currency: 'USD'
      //   });
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
    // dd += "&pi_id="+pi_id;
    dd += "&url="+window.location.href;
    // Submit the form
    $.ajax({
      type: 'POST',
      url: 'https://pay.kaiserfitapp.com/stripe/ptest.php',
      crossDomain: true,
      data: dd,
      dataType: 'json',
      success: function(data) {
     
        if (data.result == "confirm"){
       
        
        document.cookie="_piid="+data.paymentIntent.id; //also the orderid
        document.cookie = "oid="+data.paymentIntent.id;
        document.cookie = "__u_hash="+data.hash;
          document.cookie="_clisk="+data.paymentIntent.client_secret;
          document.cookie="cid="+data.customer.id;
          document.cookie="cmail="+data.customer.email;
          document.cookie="cName="+data.customer.name;
          document.cookie = "orderprice="+ data.price;
          document.cookie = "bot="+data.bot;
          window.location.href = data.paymentIntent.next_action.redirect_to_url.url;
        } 
  
      
        
        if(data.result == "true"){
         
          var price = data.price;
          var ob=0;
          if ($("#ob").is(":checked")){
            ob = 1;
          }
          
       
          conv(ob, price);
         
          dataLayer.push({'event':'checkout_purchase','conversionValue':price, 'orderbump': data.ob});
          dataLayer.push({'event':'conversion_trigger','conversionValue': price, 'orderbump': data.ob});
          
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
          document.cookie = "bot="+data.bot;
        document.cookie = "orderprice="+ data.price;
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
          recordPurchase(testid, data.price, data.bot);
        } else {
          findNextPage(data.bot);
        }
         
        }
        
        if (data.result == "false"){
      
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
     
       }); //end ajax
    
   
    
  }
  
  