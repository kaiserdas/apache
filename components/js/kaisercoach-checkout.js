$( document ).ready(function() {
  formVals();
    $("#ob").prop('checked', false);
   $("#2ndStep").attr("disabled", true);
  $("#3rdStep").attr("disabled", true);
 $("#cnum").val("");
  $("#form_errors").hide();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
	var mm = monthNames[today.getMonth()];
	var yyyy = today.getFullYear();
  function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
			}
  var ee = ordinal_suffix_of(dd);
var today1 = ee + ' ' + mm + ' ' + yyyy;
$("#curdate").text(today1);
});
  
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
  const prices = [
    {'id': "01", 'sku': 'sku_KJu9irxLKTIXcG', 'price': '$37.00'},
    {'id': "10",'sku': 'sku_KRkVAO7UtAuPgs', 'price': '$33.30'},
    {'id': "20",'sku': 'sku_KRkUe0A2IHtCp6', 'price': '$29.60'},
    {'id': "30",'sku': 'sku_KRkUu3i6r143Ba', 'price': '$25.90'}
  ];
 
  
	
    
   //*******intl-Tel-input******/

  	var input = document.querySelector("#cnum");
  	var dc="";
 var iti =   window.intlTelInput(input,{
      
      
      geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
          dc = countryCode;
        });
      },
    initialCountry: "auto",
    utilsScript: "build/js/utils.js?1613236686837",
    
    } );
  
 //var inputx = document.querySelector("#cnum"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin


var reset = function() {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

// on blur: validate
input.addEventListener('blur', function() {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
     
      validMsg.classList.remove("hide");
       return true;
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
      return false;
    }
  }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);

function checkIntl(){
   //reset();
  var inputx = document.querySelector("#cnum");
    if (inputx.value.trim()) {
    if (iti.isValidNumber()) {
     
      //validMsg.classList.remove("hide");
       return true;
    } else {
      //inputx.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      //errorMsg.classList.remove("hide");
      return false;
    }
  }
  
}



  
  
   //*******intl-Tel-input******/
  
  function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
  return regex.test(email);
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
  			
       var gg = getCookie("gglid");
        var fb = getCookie("k-fbclid");
      
      	if (gg != ""){
          gclid = gg;
        }
       if (fb != ""){
          fbclid = fb;
        }
      

				}
   
  
  function sendToInt(em, f, cn){
    
    var gclid= getCookie("gglid");

     
     
   
  	
    var country_code = iti.getSelectedCountryData()["dialCode"];
   //var cmail = phn.intlTelInput('getSelectedCountryData').dialCode;
    var ccde = "+"+country_code;
    var nums = ccde + " "+cn
    $.ajax({
    type: 'POST',
    url: 'https://hook.integromat.com/t9hlpiegh97whrpu0dq6nsoj1dn44y8y',
    crossDomain: true,
    data: {'email': em, 'name': f, 'phone': nums, 'fbclid': "", 'gclid':gclid},
    dataType: 'json',
    success: function(data) {
   		
    return nums;
    }
    });
    return nums;
  }
  function step1Check(){
    
    $("#form_errors").html('');
    var f=$("#fname").val();
     
     var em=$("#c-email").val();
     var cn=$("#cnum").val();
    var fc = true;
  
    if (f==""){
      $("#form_errors").append("<p>Name is required</p>");
      fc = false;
    } 
    
    if (em==""){
      $("#form_errors").append("<p>Email is required</p>");
      fc = false;
    } 
    if (cn==""){
      $("#form_errors").append("<p>Phone Number is required</p>");
      fc = false;
    } 
    if (!isEmail(em)){
       $("#form_errors").append("<p>Email is Invalid</p>");
      	fc = false;
    }
    
   if(!checkIntl()){
     fc = false;
   }
    
    if (fc === false){
       $("#form_errors").show();
     $('html, body').animate({ scrollTop: $('#form_errors').offset().top }, 'slow');
   
      return false;
    } else {
       var x = sendToInt(em, f, cn);
      //combine the country code and number
      var form = document.getElementById('payment-form');
      var hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'phones');
      hiddenInput.setAttribute('value', x);
      form.appendChild(hiddenInput);
       $("#form_errors").hide();
      $("#2ndStep").attr("disabled", false);
      return true;
    }
  }
 
  function step2Check(){
    $("#form_errors").html('');
    var s=$("#sname").val();
     var ct=$("#ctown").val();
     var pc=$("#postCode").val();
     var cc=$("#cCountry").val();
    
    var fc = true;
    if (s==""){
      $("#form_errors").append("<p>Street Name is required</p>");
      fc = false;
    } 
    if (ct==""){
      $("#form_errors").append("<p>City/Town is required</p>");
      fc = false;
    } 
    if (pc==""){
      $("#form_errors").append("<p>Zip Code is required</p>");
      fc = false;
    } 
    if (cc==null){
      $("#form_errors").append("<p>Country is required</p>");
      fc = false;
    } 
   
  
    
    if (fc === false){
       $("#form_errors").show();
      
     $('html, body').animate({ scrollTop: $('#form_errors').offset().top }, 'slow');
      return false;
    } else {
       $("#form_errors").hide();
      $("#3rdStep").attr("disabled", false);
      return true;
    }
  }

  function triggerCheck(){
		var cb = $("#ob").is(':checked');
	if (cb){
		console.log("s");
	} else {
		$("#ob").prop('checked', true);
   		$("#ob").trigger("change");
		
	}
	
	}

  
     function skuCheck(){ //check sku
        var sku= getParameterByName("dba");
     
       	if (sku == "" || sku == null){
          sku = "01";
        }
    	  $.each( prices, function( key, value ) {
          var tots = document.getElementsByClassName("orderTots");
          if (sku === value.id){
            $(".orderPrice").text(value.price);
            $(".orderTots").text(value.price);
           // tots[0].innerHTML = value.price;
            // tots[1].innerHTML = value.price;
            document.cookie = "sku_id="+value.sku;
          }
        });
      
    }
var cstep= 1;
var activestep = 'firstStep';
function openStep(evt, step) {
var xstep = evt.currentTarget.getAttribute('data-idx');
//console.log(evt.currentTarget.id);
cstep = xstep;
activestep = evt.currentTarget.id
  console.log(activestep);
if (activestep == "firstStep" || activestep == "2ndStep"){
 if (step1Check()){
  switch (activestep){
    case "firstStep":
      
      document.getElementById("btnTxt").textContent = "PROCEED TO NEXT STEP";
     
      break;
      
    case "2ndStep":
     //prodCheck();
      
      document.getElementById("btnTxt").textContent = "PROCEED TO FINAL STEP";
      break;
    default:
      break;
  } //end switch
 }
  skuCheck();
  document.getElementById("next-step").style.display = "block";
  document.getElementById("btnStripe").style.display = "none";
} else {
  if (step2Check()){
  document.getElementById("next-step").style.display = "none";
  document.getElementById("btnStripe").style.display = "block";
   setTimeout(triggerCheck, 1000);
  }
}

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (cstep == 3){
    document.getElementById("stripeOptions").style.display = "block";
       document.getElementById("btnTxt").textContent = "COMPLETE SECURE ORDER";
		
			 
  }
  document.getElementById(step).style.display = "block";
	//$('#'+i).addClass("active");
  evt.currentTarget.className += " active";
}






function en_stripe(){
  document.getElementById("stripeOptions").style.display = "block";
       document.getElementById("btnTxt").textContent = "COMPLETE SECURE ORDER";
		
			 
}
  //formVals section
   var go = function(){
         var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
     document.getElementById("step1").style.display = "block";
	//$('#'+i).addClass("active");
 			 $("#firstStep").addClass("active");
      document.getElementById("next-step").style.display = "block";
  		document.getElementById("btnStripe").style.display = "none";
      document.getElementById("btnTxt").textContent = "PROCEED TO NEXT STEP";
     cstep = 1;
     activestep = 'firstStep';
  }
  
  $(".changeOpt").click(function(e){
    e.preventDefault();
  var dx = $(this).data('dx');
  go();
   switch (dx){
     case "email":   
          $( "#c-email" ).focus();
       break;
     case "num":
       $( "#cnum" ).focus();
       break;
     default: break;
   } 
     
  
  });

//formVals section

function formVals(){
  var email = $('#c-email').val();
  var cnum = $('#cnum').val();
 
  x=document.getElementsByClassName("formVal emails");
  y=document.getElementsByClassName("formVal nums");

  x[0].textContent = email;
  x[1].textContent = email;
  y[0].textContent = cnum;
  y[1].textContent = cnum;
}


document.getElementById("step1").style.display = "block";

 $( ".kaiserCheckout" ).click(function(e) {
   e.preventDefault();
   function cleartabs(){
	 var stept=$(this).data('step');
   var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
   }
	 
	if (cstep == '1'){
    if (step1Check()){
       //prodCheck();
      skuCheck();
      cleartabs();
    document.getElementById('step2').style.display = "block";
    var maptab = document.getElementById('2ndStep');
    maptab.className = maptab.className + ' active';
    document.getElementById("btnTxt").textContent = "PROCEED TO FINAL STEP";
    cstep = 2;
    activestep = '2ndStep';
    }
  } else if (cstep == '2'){
    if (step2Check()){
      cleartabs();
    document.getElementById('step3').style.display = "block";
    var maptab = document.getElementById('3rdStep');
    maptab.className = maptab.className + ' active';
    document.getElementById("btnTxt").textContent = "COMPLETE SECURE ORDER";
   $(this).hide();
    document.getElementById("btnStripe").style.display = "block";
    cstep = 3;
    activestep = '3rdStep';
    en_stripe();
    
      $('html, body').animate({ scrollTop: $('#scard').offset().top }, 'slow');
      setTimeout(triggerCheck, 1000);
    }
  } else if (cstep == '3') {
    
    
    // console.log(form);
      $("#payment-form").submit();
      $("#stripe-form").submit();
      console.log("finishing checkout");
  } else {
    console.log("checkout");
  }

});

