$( document ).ready(function() {
    var tokenx = "";

   function showCO(){
     document.getElementById("co-box").style.display = 'block';
   }
   
function upSession(){
$.ajax({
  type: 'POST',
  url: 'https://queenformula.net/api/curly.php',
  crossDomain: true,
  data: {'action': 'pLoad','fpage': 'fathacks','tokenx': tokenx, 'source': 'vsl'},
  dataType: 'json',
  success: function(data) {
    console.log(data);
  },
   error: function(data){
     console.log(data);
   }
    }); 
}
    
   
   function checkCookie() {
var userage = getCookie("userage");
     var fhw = getCookie("fh-watched");
     var uToken = getCookie("userToken");
      if (fhw != "") {
       
 document.getElementById("co-box").style.display = 'block';
}else { //initiate timer of vid
   document.cookie = "fh-watched=1";
  setTimeout(showCO, 2955000);
}  
if (userage != "") { //user came from quizpage]
  console.log("for ages "+userage);
 //document.getElementById("agerange").textContent=userage;
  
} else {
      console.log("welcome");
  }
     
      if (uToken != "") { //token Exists
            tokenx = uToken;
        
                    }else { //no token
                          let pass = [...crypto.getRandomValues(new Uint8Array(10))]
              .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
          console.log(pass);
                       document.cookie = "userToken="+pass;
            tokenx = pass;
                }
}
   
   checkCookie();

  upSession();

      }); //end doc ready
   

var timeInSecs = 0;
      var ticker = 0;

    function startTimer(secs) {
      timeInSecs = parseInt(secs);
      ticker = setInterval("tick()", 1000); 
  }
   function tick() {
  var secs = timeInSecs;
  if (secs > 0) {
  timeInSecs--; 
  }
  else {
  clearInterval(ticker);
  startTimer(2*60); // 4 minutes in seconds
  }

  var days= Math.floor(secs/86400); 
  secs %= 86400;
  var hours= Math.floor(secs/3600);
  secs %= 3600;
  var mins = Math.floor(secs/60);
  secs %= 60;
  var pretty = ( (hours < 10 ) ? "0" : "" ) + hours + ":" + ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
  var xmins = ( (mins < 10) ? "0" : "" ) + mins;
    var xsec = ( (secs < 10) ? "0" : "" ) + secs;
    document.getElementById("mins").innerText = xmins;
    document.getElementById("sec").innerText = xsec;
  //document.getElementById("countdown").innerHTML = pretty;
  }






      startTimer(2*60);


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
      
          }//getCookie
    
          const tokent = getCookie("userToken");
      
  function fmins(mins){
     $.ajax({
  type: 'POST',
  url: 'https://queenformula.net/api/curly.php',
  crossDomain: true,
  data: {'action': 'fathacks','mins': mins,'tokenx': tokent},
  dataType: 'json',
  success: function(response) {
    console.log(response.data);
  },
   error: function(response){
     console.log(response.data);
   }
    });
  }
  
 
 setTimeout(function() {
   var mins = "5";
   fmins(mins);
                          }, 300000);
  
   setTimeout(function() {
   var mins = "15";
   fmins(mins);
                          }, 900000);
  
   setTimeout(function() {
   var mins = "30";
   fmins(mins);
                          }, 1800000);
  
    setTimeout(function() {
   var mins = "45";
   fmins(mins);
                          }, 2700000);
  
    setTimeout(function() {
   var mins = "60";
   fmins(mins);
                          }, 36000000);
  
        setTimeout(function() {
   var mins = "75";
   fmins(mins);
                          }, 45000000);
  
  

$('.checkout-button').click(function() {
  document.cookie="refsite=youtube";
  var dba=$(this).data('sku');
  
   var dd = {'action': 'uLoad','fpage': 'fathacks','tokenx': tokent, 'user_action': 'proceed'};
    
      $.ajax({
  type: 'POST',
  url: 'https://queenformula.net/api/curly.php',
  crossDomain: true,
  data: dd,
  dataType: 'json',
  success: function(response) {
    console.log(response.data);
    document.cookie="refsite=tiktok";
    window.location.href = "/kaisercoach-bundle-checkout.html?dba="+ dba;
  },
   error: function(response){
      console.log(response.data);
     document.cookie="refsite=tiktok";
   window.location.href = "/kaisercoach-bundle-checkout.html?dba="+ dba;
   }
    });
  
  
      
});
