$( document ).ready(function() {
  var price=0;
  var uid = "";
  var acid = "";
  var tokenx = "";
  var botqty = "";
  var orderid = "";
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
         var userToken = getCookie("userToken");
       var iOrder = getCookie("iOrder");
       orderid = iOrder;
       tokenx = userToken;
            if (cid != "") {
   uid = cid;
              console.log(username);
  }else { //no user id present
    console.log("hello visitor");
  }
        if (fsw != 0) {
   document.getElementById("up1-box").style.display = 'block';
  }else { //initiate timer of vid
    document.cookie = "fs-watched=1";
    setTimeout(showUp, 570000);
  }
  if (username != "") { //user exists
    console.log("welcomeback");
   document.getElementById("user").textContent=username;
     document.getElementById("user1").textContent=username;
  } else {
     console.log("hello visitor");
   	 document.getElementById("user").textContent="Visitor";
     document.getElementById("user1").textContent="Visitor";
  }
       var acidx = getCookie("acid");
  if (acidx != ""){
      acid = acidx;
  }
        var botq = getCookie("botqty");
        if (botq != ""){
            botqty = botq;
                    }
		}
     
     checkCookie();
   $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripetest/db.php',
    crossDomain: true,
    data: {'action': 'pLoad','fpage': 'U1','tokenx': tokenx},
    dataType: 'json',
    success: function(response) {
      console.log(response.data);
    },
     error: function(response){
       console.log(response.data);
     }
      }); //end ajax post
  
  function nextPage(){
    switch(botqty){
      case "1":
        window.location.href = "/stage/queen-night-burner-3";
        break;
      case "3":
        window.location.href = "/stage/queen-night-burner-6";
        break;
         case "6":
        window.location.href = "/stage/queen-night-burner-12";
        break;
      default:
        window.location.href = "/stage/queen-night-burner-3";
        break;
    } //end switch
  }
    function integro(addonid){
 	$.post("https://hook.integromat.com/hrmj8ohgwuxd3mtkblxbvtmrc49h4vvm",{'customer_id': uid, 'product_id':addonid},function(data) {
		
		console.log(data);
		});
  }
  function get_upsell(addonid, page, track, desc){
    var userA = addonid;
    var oid = orderid;
    var dd = {'cid': uid,'addonid': addonid,'tokenx': tokenx,'track': track, 'useraction': userA, 'acid': acid, 'desc': desc,'orderid': oid}
    $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripe/upsellLive.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
      integro(addonid);
    	console.log(data.message);
    
    price = data.price;
      gtag('event', 'conversion', {
      'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
      'value': price,
      'currency': 'USD',
      'transaction_id': data.receipt
  				});
      //ultracart
    (function(img) { img.src = 'https://kaiserbody.com/api/conversions/ultracart?salePages=64&conversionData=' + encodeURIComponent('receipt='+ data.receipt +'&amount='+ data.price +'.00&products='+ data.productid +'') + '&referrer=' + encodeURIComponent(document.referrer); })(new Image); 
		
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
      window.location.href = "/stage/u2-night-burner";
			//nextPage();
    },
      error: function(data){
         window.location.href = "/stage/u2-night-burner";
   // nextPage();
    }
      
    });
    //	window.location.href="u2-8-bottles";
  }
  function get_downsell(planid, fstep, taboola_id, page, track){
             var userA = planid;
    var dd = {'cid': uid,'addonid': planid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid};
 		
    $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripe/downsellLive.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
    	
       integro(planid);
   
      var price = data.price;
      gtag('event', 'conversion', {
      'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
      'value': price,
      'currency': 'USD',
      'transaction_id': data.receipt
  				});
  
    
      
             //ultracart
     (function(img) { img.src = 'https://kaiserbody.com/api/conversions/ultracart?salePages='+ page +'&conversionData=' + encodeURIComponent('receipt='+ data.receipt +'&amount='+ data.price +'.00&products='+ data.productid +'') + '&referrer=' + encodeURIComponent(document.referrer); })(new Image); 
  
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
    
			nextPage();
    },
      error: function(data) {
      	nextPage();
      }
    });
  } //end downsell func
  
      $('.up1btn').click(function(){
        var addonid = $(this).data('id');
        var page=$(this).data('page');
         var track = $(this).data('track');
            get_upsell(addonid, page, track);
      });
  $('.upsbtn').click(function(){
        var addonid = $(this).data('id');
        var page=$(this).data('page');
         var track = $(this).data('track');
            get_upsell(addonid, page, track);
      });
  $('.dsbtn').click(function(){
      var track = $(this).data('track');
      var planid = $(this).data('id');
         var fstep = $(this).data('idx');
     var page = $(this).data('page');
     		var taboola_id = $(this).data('taboola');
           get_downsell(planid, fstep, taboola_id, page, track);
   
   
  
		});
  $('.d1btn').click(function(){
    var desc = $(this).data('desc');
        var addonid = $(this).data('id');
        var page=$(this).data('page');
         var track = $(this).data('track');
            get_upsell(addonid, page, track, desc);
      });
  	
  $('.skip').click(function(){
         var track = $(this).data('track');
    var dd = {'action': 'uLoad','fpage': 'U1','tokenx': tokenx, 'user_action': 'skipped'};
      
        $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripetest/db.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(response) {
      console.log(response.data);
       if (track === "U1") {
     
          window.location.href = "/stage/qf-downsell-1";
       
      }
   if (track === "U1D1") {
      if (botqty === "1") {
          window.location.href = "/stage/queen-formula-u1d2-3";
        }
        if (botqty === "3") {
           window.location.href = "/stage/queen-formula-u1d2-6";
        }
        if (botqty === "6") {
           window.location.href = "/stage/queen-formula-u1d2-12";
        } 
   }
    
      
      if (track === "U1D2"){
    		if (botqty === "1") {
          window.location.href = "/stage/queen-formula-u1d3-3";
        }
        if (botqty === "3") {
           window.location.href = "/stage/queen-formula-u1d3-6";
        }
        if (botqty === "6") {
           window.location.href = "/stage/queen-formula-u1d3-12";
        } 
     }
          
     
        if (track === "U1D3"){
     u4ia();
     }
    },
     error: function(response){
        console.log(response.data);
       if (track === "U1") {
       window.location.href = "/stage/qf-downsell-1";
      }
   if (track === "U1D1") {
      if (botqty === "1") {
          window.location.href = "/stage/queen-formula-u1d2-3";
        }
        if (botqty === "3") {
           window.location.href = "/stage/queen-formula-u1d2-6";
        }
        if (botqty === "6") {
           window.location.href = "/stage/queen-formula-u1d2-12";
        } 
   }
    
      
      if (track === "U1D2"){
    		if (botqty === "1") {
          window.location.href = "/stage/queen-formula-u1d3-3";
        }
        if (botqty === "3") {
           window.location.href = "/stage/queen-formula-u1d3-6";
        }
        if (botqty === "6") {
           window.location.href = "/stage/queen-formula-u1d3-12";
        } 
     }
          
     
        if (track === "U1D3"){
     u4ia();
     }
     }
      });
    
    //if (track == "U1-3") {
    //  window.location.href = "/stage/queen-formula-u1d1-3";
   // }
   //  if (track == "U1-6") {
    //  window.location.href = "/stage/queen-formula-u1d1-6";
   // }
   //  if (track == "U1-12") {
   //   window.location.href = "/stage/queen-formula-u1d1-12";
   // }
       }); //u1skip
		}); //end doc ready

