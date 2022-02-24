

$( document ).ready(function() {
  // var price=getCookie("orderprice");
  // fbq('track', 'Purchase', {
          
  //   value: price,
  //   currency: 'USD'
  //   });
  const p = window.location.pathname.replace('/', '').replace('.html', '');
  
  var uid = "";
  var tokenx = "";
  var acid = "";
  var botqty = "";
     document.getElementById("up1-box").style.display = 'none';
     function showUp(){
       document.getElementById("up1-box").style.display = 'block';
       
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
        
			}
     
     function checkCookie() {
  var username = getCookie("cName");
       var fsw = getCookie("fs-watched");
      var cid = getCookie("cid");
      var userToken = getCookie('userToken');
      var x = getCookie(p);
      if (x == ''){
        view();
        
      }
       tokenx = userToken;
            if (cid != "") {
   uid = cid;
            
  }
        if (fsw != 0) {
   document.getElementById("up1-box").style.display = 'block';
  }else { //initiate timer of vid
    document.cookie = "fs-watched=1";
    setTimeout(showUp, 570000);
  }
  if (username != "") { //user exists
    
   document.getElementById("user").textContent=username;
  } else {
     
   	 document.getElementById("user").textContent="Visitor";
  }
  var acidx = getCookie("acid");
  if (acidx != ""){
      acid = acidx;
  }
  var botq = getCookie("bot");
  if (botq != ""){
      botqty = botq;
              }


}
     
     checkCookie();


     
function view(){


  var m = getCookie('mobile');
  var op = getCookie('originPage');

  var dat = {'c': 'v', 'm': m, 'p': p, 'op': op};
 
  $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/rec/rec.php',
    crossDomain: true,
    data: dat,
    dataType: 'json'

    }); //end ajax

    document.cookie=p+"=1";
}

function conv(price){
  var m = getCookie('mobile');
  var op = getCookie('originPage');
  var r = getCookie("convRef");
  $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/rec/rec.php',
    crossDomain: true,
    data: {'c': 'c', 'm': m, 'p': p, 'v': price, 'op':op,'r': r},
    dataType: 'json'

    }); //end ajax

    
}

      function updateAmount(testid, price){ //function to update purchase amount for a page in split test from upsell 1-4
        var mobile = getCookie('mobile');
        var stp = getCookie('stp');
        $.ajax({
           type: 'POST',
           url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
           crossDomain: true,
           data: {'testid': testid,'page_name': stp,'price': price, 'mobile': mobile},
           dataType: 'json',
           success: function(data) {
             console.log(data);
             nextPage();
           },
            error: function(data){
              console.log(data);
            }
       });
    }

      function nextPage(){
        switch(botqty){
          case "1":
            setTimeout(function(){

              window.location.href="/queen-night-burner-3.html";
            }, 300);
            break;
          case "3":
            setTimeout(function(){

              window.location.href="/queen-night-burner-6.html";
            }, 300);
            break;
             case "6":
              setTimeout(function(){

                window.location.href="/queen-night-burner-12.html";
              }, 300);
            break;
          default:
            setTimeout(function(){

              window.location.href="/queen-night-burner-3.html";
            }, 300);
            // window.location.href="/u2-fatlossstacks-stripe";
            break;
        } //end switch
      }
    function integro(addonid){
 	$.post("https://hook.integromat.com/hrmj8ohgwuxd3mtkblxbvtmrc49h4vvm",{'customer_id': uid, 'product_id':addonid},function(data) {
		
		
		});
  }
  function get_upsell(addonid, track, desc, bot){
   
     
    var orderid = getCookie('oid');
    var fbclid = getCookie('fbclid');
    var url=window.location.href;
    var userA = addonid;
    var dd = {'cid': uid,'addonid': addonid,'tokenx': tokenx,'track': track, 'useraction': userA, 'acid': acid,'desc': desc, 'bot': bot, 'orderid': orderid, 'fbclid': fbclid,'url': url};
    $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/upsell.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
      price = data.price;
      conv(price);
      window.MC_PIXEL.fireLogMoneyEvent('Purchased - Dream Body Academy', price, 'USD');
      fbq('track', 'Purchase', {
        value: data.price,
         currency: 'USD'}
         );
        
      integro(addonid);
    
    dataLayer.push({'event':'u1_purchase','conversionValue':price});
    gtag('event', 'conversion', {
      'send_to': 'AW-808125221/_3zVCN7a6tkCEKWGrIED',
      'value': data.price,
      'currency': 'USD',
      'transaction_id': data.receipt
  });
     
 
     
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");

      var testid = getCookie('testid');
      if (testid != ''){ // there is an active test
        updateAmount(testid, price);
      } else {
        nextPage();
      }

     
			
    },
      error: function(data){
        
        nextPage();
    }
      
    });
   //window.location.href="/upsell-2.html";
  }
  
      $('.up1btn').click(function(){
        var addonid = $(this).data('id');
        var page=$(this).data('page');
         var track = $(this).data('track');
            get_upsell(addonid, track);
      });
  
  $('.d1btn').click(function(){
    var desc = $(this).data('desc');
        var addonid = $(this).data('id');
        var bot=$(this).data('bot');
         var track = $(this).data('track');
            get_upsell(addonid, track, desc, bot);
      });
  	
  $('.skip').click(function(){

    window.location.href="/qf-ds-1.html";
        
       }); //u1skip
    
		}); //end doc ready

