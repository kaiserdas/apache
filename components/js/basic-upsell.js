$( document ).ready(function() {
			var sid = "";
  var uid = "";
   var un = "";
  var obx = 0;
  var tokenx = "";
  var acid = "";
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
     }
         

     
     checkCookie();
  function u4ia(){
   if (obx==1){ //orderbump ticked
     window.location.href="/upsell-4.html";
   } else if (obx==0) {
   console.log("no-orderbump");
     window.location.href="/u4kfc.html";
   } else {
     console.log("Kaiserfit");
   }
    
  }
   if (un != ""){
   console.log("up");
   }
  function findNextPage(fstep){
    switch (fstep){
      case "u2":
        window.location.href="/upsell-3.html";
        break;
      case "d1":
        window.location.href="/queen-night-burner-3.html";
        break;
        case "d2":
        window.location.href="/upsell-3.html";
        break;
      case "u3":
       u4ia();
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
  function get_upsell(addonid, fstep, taboola_id, page, track){
         var userA = addonid;
    var dd = {'cid': uid,'addonid': addonid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid};

    	$.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/upsell.php',
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
      integro(addonid);
  //  _tfa.push({notify: 'event', name: taboola_id, id: 1376421});
    
      
            
 	//fb tracking
      fbq('track', 'Purchase', {value: data.price, currency: 'USD'});
      
      
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
    
			findNextPage(fstep);
    },
        error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {
       
      	findNextPage(fstep);
        
      }
        
      });

  } //end get_upsell
  function get_downsell(planid, fstep, page, track, bot){
             var userA = planid;
    var orderid = getCookie('oid');
    var dd = {'cid': uid,'addonid': planid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid, 'bot': bot, 'orderid': orderid};
 		
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
         _tfa.push({notify: 'event', name: 'u4kfc_purchase', id: 1376421});
           
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
       var track = $(this).data('track');
     var addonid = $(this).data('id');
         var fstep = $(this).data('idx');
      var taboola_id = $(this).data('taboola');
         var page = $(this).data('page');
           get_upsell(addonid, fstep, taboola_id, page, track);
  
		});
  
    $('.dsbtn').click(function(){
      var track = $(this).data('track');
      var planid = $(this).data('id');
         var fstep = $(this).data('idx');
     var page = $(this).data('page');
     		
         var bot = $(this).data('bot');
           get_downsell(planid, fstep, page, track, bot);
   
   
  
		});
  
    $('.tybtn').click(function(){
        var track = $(this).data('track');
        var addonid = $(this).data('id');
      var useraction = addonid;
      $("#ldr").removeClass("glyphicon-ok");
      $("#ldr").addClass("glyphicon-alert");
      $('#modPurchase').modal('show');
      $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/upsell.php',
    crossDomain: true,
    data: {'cid': uid,'addonid': addonid,'track': track,'tokenx': tokenx,'useraction': useraction},
    dataType: 'json',
    success: function(data) {
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
  
    $('.sku').click(function(){
     var skid = $("#sku_id").val();
      var sname = $("#sku_name").val();
      var sprice = $("#sku_price").val();
     $.post("https://pay.kaiserfitapp.com/stripe/skuCreateLive.php",{'id': skid,'name': sname,'price': sprice},function(data) {
			console.log(data);
       $('#skus').trigger("reset");
     // $("#ldr").removeClass("glyphicon-alert");
      //$("#ldr").addClass("glyphicon-ok");
    
			//$("#modPurchase").modal('hide');
		});
   });
  
  
   $('.u4-check').click(function(){
       
      

 				 var track = $(this).data('track');
  var dd = {'action': 'uLoad','fpage': track,'tokenx': tokenx, 'user_action': 'skipped'};  
  
    $.ajax({
    type: 'POST',
     url: 'https://queenformula.net/api/curly.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(response) {
      console.log(response.data);
    
     	u4ia();
    },
     error: function(response){
        console.log(response.data);
      	u4ia();
     }
      }); //end ajax
  
		}); //end u4check
  
  $('.skip').click(function(){
    var track = $(this).data('track');
   
  var dd = {'action': 'uLoad','fpage': track,'tokenx': tokenx, 'user_action': 'skipped'};  
 
 
  
  
  
    $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/curly.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
      
    console.log(data);
     
    if (track === "U1D1"){
      window.location.href = "/u1-d2.html";
      }
       if (track === "U1D2"){
      window.location.href = "/u1-d3.html";
      }
         if (track === "U1D3"){
           u4ia();
      }
         if (track === "U2"){
           window.location.href = "/u2-d1.html";
      }
         if (track === "U2D1"){
           u4ia();
      }
        if (track === "U4" || track === "U4KFC"){
           window.location.href = "/thank-you.html";
      }
        
    },
     error: function(data){
       
        console.log(data);
      
        if (track === "U1D1"){
     window.location.href = "/u1-d2.html";
     }
      if (track === "U1D2"){
     window.location.href = "/u1-d3.html";
     }
        if (track === "U1D3"){
    			u4ia();
     }
        if (track === "U2"){
    			window.location.href = "/u2-d1.html";
     }
        if (track === "U2D1"){
    			u4ia();
     }
       if (track === "U4" || track === "U4KFC"){
    			window.location.href = "/thank-you.html";
     }
     }
      }); //end ajax
  
  
  
  
  
  });//end skip

});
