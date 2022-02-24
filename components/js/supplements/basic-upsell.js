$( document ).ready(function() {
  const p = window.location.pathname.replace('/', '').replace('.html', '').replace('!', '');;
			var sid = "";
  var uid = "";
   var un = "";
  var obx = 0;
  var tokenx = "";
  var acid = "";
  var botqty = "";
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
   	var ob = getCookie("obx");
      var cid = getCookie("cid");
       var cd = getCookie("sid");
        var userToken = getCookie("userToken");
       tokenx = userToken;

       var x = getCookie(p);
       if (x == ''){
       view();
       }   
       if (cid != "") {//user exists
   				uid = cid;
       	un = username;
         obx = ob;
         sid  = cd;
          if($("#yt").length){
           document.getElementById("yt").innerText = un;
         }
         if($("#u3name").length){
           document.getElementById("u3name").innerText = un;
         }
         if($("#u1d1name").length){
           document.getElementById("u1d1name").innerText = un;
         } 
         
         
         
 		 				}else { //no user id present
              console.log("hello visitor");
               if($("#u1d1name").length){
           document.getElementById("u1d1name").innerText = "visitor";
         } 
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
        data: {'c': 'c', 'm': m, 'p': p, 'v': price, 'op':op, 'r': r},
        dataType: 'json'
    
        }); //end ajax
    
        
    }
     function updateAmount(testid, price, fstep){ //function to update purchase amount for a page in split test from upsell 1-4
      var mobile = getCookie('mobile');
      var stp = getCookie('stp');
      $.ajax({
         type: 'POST',
         url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
         crossDomain: true,
         data: {'testid': testid,'page_name': stp,'price': price,'mobile': mobile},
         dataType: 'json',
         success: function(data) {

           if (data.result) {
            findNextPage(fstep);
           } else {
            findNextPage(fstep);
           }
           
         },
          error: function(data){
            console.log(data);
          }
     });
  }

   
 function updateAmount2(testid, price){ //function to update purchase amount for a page in split test at the thank-you page
  var mobile = getCookie('mobile');
  var stp = getCookie('stp');
  $.ajax({
     type: 'POST',
     url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
     crossDomain: true,
     data: {'testid': testid,'page_name': stp,'price': price,'mobile': mobile},
     dataType: 'json',
     success: function(data) {
       console.log(data);
      
     },
      error: function(data){
        console.log(data);
      }
 });
}

  function u4ia(){
    if (obx==1){ //orderbump ticked
      //window.location.href="/u4-forever-fat-loss-stripe";
      if (botqty === "1") {
           window.location.href="/queen-biotics-3.html";
         }
         if (botqty === "3") {
            window.location.href="/queen-biotics-6.html";
         }
         if (botqty === "6") {
            window.location.href="/queen-biotics-12.html";
         }
    } else if (obx==0) {
    console.log("no-orderbump");
      window.location.href="/u4kfc.html";
    } else {
      console.log("Kaiserfit");
    }
    
  } //end u4ia
   if (un != ""){
   console.log("up");
   }
  function findNextPage(fstep){
 

    switch (fstep){
      case "u2":
        if (botqty === "1") {
          window.location.href="/queen-pure-collagen-3.html";
        }
        if (botqty === "3") {
           window.location.href="/queen-pure-collagen-6.html";
        }
        if (botqty === "6") {
           window.location.href="/queen-pure-collagen-12.html";
        }
       // window.location.href="/u3-meal-master-class-stripe";
        break;
       
      case "d1":
        if (botqty === "1") {
          window.location.href="/queen-night-burner-3.html";
        }
        if (botqty === "3") {
          window.location.href="/queen-night-burner-6.html";
        }
        if (botqty === "6") {
          window.location.href="/queen-night-burner-12.html";
        }
        break;
        case "d2":
          if (botqty === "1") {
            window.location.href="/queen-pure-collagen-3.html";
          }
          if (botqty === "3") {
             window.location.href="/queen-pure-collagen-6.html";
          }
          if (botqty === "6") {
             window.location.href="/queen-pure-collagen-12.html";
          }
        break;
        case "d3":
          if (botqty === "1") {
            window.location.href="/queen-biotics-3.html";
          }
          if (botqty === "3") {
            window.location.href="/queen-biotics-6.html";
          }
          if (botqty === "6") {
            window.location.href="/queen-biotics-12.html";
          }
        break;
        case "d4":
          window.location.href="/thank-you.html";
        break;
      case "u3":
        if (botqty === "1") {
          window.location.href="/queen-biotics-3.html";
        }
        if (botqty === "3") {
           window.location.href="/queen-biotics-6.html";
        }
        if (botqty === "6") {
           window.location.href="/queen-biotics-12.html";
        }
        break;
          case "u4":
       window.location.href="/thank-you.html";
        break;
      default:
        console.log("journey stop");
        break;
    }
  }
  
     function integro(addonid){
 	$.post("https://hook.integromat.com/hrmj8ohgwuxd3mtkblxbvtmrc49h4vvm",{'customer_id': uid, 'product_id':addonid},function(data) {
		
	
		});
  }
  function get_upsell(addonid, fstep, taboola_id, page, track, desc, bot){
         var userA = addonid;
         var oid = getCookie('oid');
         var fbclid = getCookie('fbclid');
         var url=window.location.href;
    var dd = {'cid': uid,'addonid': addonid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid, 'desc': desc, 'orderid': oid, 'bot': bot, 'fbclid': fbclid,'url': url};

    	$.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/upsell.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
      conv(data.price);
      window.MC_PIXEL.fireLogMoneyEvent('Purchased - Dream Body Academy', price, 'USD');
      dataLayer.push({'event':taboola_id,'conversionValue':data.price});
      gtag('event', 'conversion', {
        'send_to': 'AW-808125221/_3zVCN7a6tkCEKWGrIED',
        'value': data.price,
        'currency': 'USD',
        'transaction_id': data.receipt
      });

      gtag('event', 'conversion', {
        'send_to': 'AW-10803493079/tJn5CNrc14EDENfxwJ8o',
        'value': data.price,
        'currency': 'USD',
        'transaction_id': data.receipt
    });
      integro(addonid);
  //  _tfa.push({notify: 'event', name: taboola_id, id: 1376421});
    
      
            
 	//fb tracking
      fbq('track', 'Purchase', {value: data.price, currency: 'USD'});
      
      
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
      var testid = getCookie('testid');
      if (testid != ''){ // there is an active test
        updateAmount(testid, data.price, fstep);
      } else {
        findNextPage(fstep);
      }
			
    },
        error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {
      //  console.log(data);
      	findNextPage(fstep);
        
      }
        
      });

  } //end get_upsell
  function get_downsell(planid, fstep, taboola_id, page, track, desc){
             var userA = planid;
    var dd = {'cid': uid,'addonid': planid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid, 'desc': desc};
 		
    $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/downsell.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
      gtag('event', 'conversion', {
        'send_to': 'AW-808125221/_3zVCN7a6tkCEKWGrIED',
        'value': data.price,
        'currency': 'USD',
        'transaction_id': data.receipt
    });
       integro(planid);
   
     
     
  //  _tfa.push({notify: 'event', name: taboola_id, id: 1376421});
    
      
             //ultracart
   	//fb tracking
      fbq('track', 'Purchase', {
        value: data.price,
         currency: 'USD'}
         );
    
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
    
			findNextPage(fstep);
    },
      error: function(data) {
      	findNextPage(fstep);
      }
    });
  } //end downsell func
  
  
  
    $('.kfc').click(function(){
        var plan = $(this).data('id');
       $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/kfc.php',
    crossDomain: true,
    data: {'uid': uid,'plan': plan},
    dataType: 'json',
    success: function(data) {
      console.log(data);
      
      integro(addonid);		
             console.log(data);
               gtag('event', 'conversion', {
      'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
      'value': 0.0,
      'currency': 'USD',
      'transaction_id': data.receipt
  				});
        //  _tfa.push({notify: 'event', name: 'u4kfc_purchase', id: 1376421});
           
	//fb tracking
      fbq('track', 'Purchase', {value: 0.00, currency: 'USD'});
 
      
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
    
			window.location.href="/thank-you.html";
    }, 
      error: function(data) {
      	window.location.href="/thank-you.html";
      }
       });
 		});
  
      $('.d1btn').click(function(){
        var desc = $(this).data('desc');
       var track = $(this).data('track');
     var addonid = $(this).data('id');
         var fstep = $(this).data('idx');
      var taboola_id = $(this).data('taboola');
         var page = $(this).data('page');
         var bot = $(this).data('bot');
           get_upsell(addonid, fstep, taboola_id, page, track, desc, bot);
  
		});
  
    $('.dsbtn').click(function(){
      var desc = $(this).data('desc');
      var track = $(this).data('track');
      var planid = $(this).data('id');
         var fstep = $(this).data('idx');
     var page = $(this).data('page');
     		var taboola_id = $(this).data('taboola');
           get_downsell(planid, fstep, taboola_id, page, track, desc);
   
   
  
		});
  
    $('.ty-btn').click(function(){
      var bot = 3;
      var desc = $(this).data('desc');
        var track = $(this).data('track');
        var addonid = $(this).data('id');
      var useraction = addonid;
      var oid = getCookie('oid');
      var fbclid = getCookie('fbclid');
      var url=window.location.href;
      $("#ldr").removeClass("glyphicon-ok");
      $("#ldr").addClass("glyphicon-alert");
      $('#modPurchase').modal('show');
      $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/upsell.php',
    crossDomain: true,
    data: {'cid': uid,'addonid': addonid,'track': track,'tokenx': tokenx,'useraction': useraction,'acid': acid, 'desc': desc, 'orderid': oid, 'bot': bot,'fbclid': fbclid, 'url': url},
    dataType: 'json',
    success: function(data) {
      conv(data.price);
      dataLayer.push({'event':'ty_purchase','conversionValue':parseFloat(data.price)});
      gtag('event', 'conversion', {
        'send_to': 'AW-808125221/_3zVCN7a6tkCEKWGrIED',
        'value': data.price,
        'currency': 'USD',
        'transaction_id': data.receipt
    });
       integro(addonid);
 
    
  //  _tfa.push({notify: 'event', name: taboola_id, id: 1376421});
    
      
	//fb tracking
      fbq('track', 'Purchase', {value: data.price, currency: 'USD'});
      var testid = getCookie('testid');
      if (testid != ''){ // there is an active test
        updateAmount2(testid, data.price);
      } 
      
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");

    
			$('#modPurchase').modal('hide');
    },
        error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {
       
      		$('#modPurchase').modal('hide');
        
      }
        
      });
      $(this).attr('disabled', 'disabled');
      $(this).attr('value', 'Addon Purchased');
      $(this).val('Addon Purchased');
       $(this).text('Addon Purchased');
      		
		});
  
  


  $('.dskip').click(function(){
    var track = $(this).data('track');
   
    switch (track) {
      case "U1D3": 
      if (botqty === "1") {
      window.location.href="/queen-night-burner-3.html";
    }
    if (botqty === "3") {
       window.location.href="/queen-night-burner-6.html";
    }
    if (botqty === "6") {
       window.location.href="/queen-night-burner-12.html";
    }
        break;
      case "U2": 
        if (botqty === "1") {
        window.location.href="/queen-night-burner-downsell-3";
      }
      if (botqty === "3") {
         window.location.href="/queen-night-burner-downsell-6";
      }
      if (botqty === "6") {
         window.location.href="/queen-night-burner-downsell-12";
      }
          break;
         case "U3": 
        if (botqty === "1") {
        window.location.href="/queen-pure-collagen-downsell-3";
      }
      if (botqty === "3") {
         window.location.href="/queen-pure-collagen-downsell-6";
      }
      if (botqty === "6") {
         window.location.href="/queen-pure-collagen-downsell-12";
      }
          break;
        case "U4": 
        if (botqty === "1") {
        window.location.href="/queen-biotics-downsell-3";
      }
      if (botqty === "3") {
         window.location.href="/queen-biotics-downsell-6";
      }
      if (botqty === "6") {
         window.location.href="/queen-biotics-downsell-12";
      }
          break;
        case "U2D1": 
      if (botqty === "1") {
        window.location.href="/queen-pure-collagen-3";
      }
      if (botqty === "3") {
         window.location.href="/queen-pure-collagen-6";
      }
      if (botqty === "6") {
         window.location.href="/queen-pure-collagen-12";
      }
          break;
      case "U3D1" :
        if (botqty === "1") {
          window.location.href="/queen-biotics-downsell-3.html";
        }
        if (botqty === "3") {
           window.location.href="/queen-biotics-downsell-6.html";
        }
        if (botqty === "6") {
           window.location.href="/queen-biotics-downsell-12.html";
        }
        break;
      case "U4D1":
        window.location.href = "/thankyou-page-stripe";
        break;
      default: 
        break;
        
        
      } //end switch
  
  
  
  
  
  });//end dskip
  
});
