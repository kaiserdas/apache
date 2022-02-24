$( document ).ready(function() {

 
    var tokenx = "";

   function showCO(){
     document.getElementById("co-box").style.display = 'block';
     productLoad();
   }
 
function upSession(){
$.ajax({
  type: 'POST',
  url: 'https://queenformula.net/api/curly.php',
  crossDomain: true,
  data: {'action': 'pLoad','fpage': 'fathacks','tokenx': tokenx},
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

     var fhw = getCookie("fh-watched");
     var uToken = getCookie("userToken");
      if (fhw != "") {
       
 document.getElementById("co-box").style.display = 'block';
}else { //initiate timer of vid
   document.cookie = "fh-watched=1";
  setTimeout(showCO, 2640000);
}  

     
      if (uToken != "") { //token Exists
            tokenx = uToken;
        
                    }else { //no token
                          let pass = [...crypto.getRandomValues(new Uint8Array(10))]
              .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
         
                       document.cookie = "userToken="+pass;
            tokenx = pass;
                }
}
   
   checkCookie();
pageLoad();
  //upSession();
  // split_init();
      }); //end doc ready
   


      function productLoad(){
        var email = getCookie('em');
        if (email != "") {
          $.ajax({
            type: 'POST',
            url: 'https://hook.integromat.com/lmma1cea3wx1ui8ns6oqmys8srojr7gd',
            crossDomain: true,
            data: {'email': email},
            dataType: 'json',
            success: function() {
            console.log("sadf");
            }
              }); 
        }
      }
        
   function pageLoad(){ //submit email if visitor opted in
    var email = getCookie('em');
    if (email != "") {
      $.ajax({
        type: 'POST',
        url: 'https://hook.integromat.com/l6lyn9zrw19oe5jo1ze85p0es4v1xqej',
        crossDomain: true,
        data: {'email': email},
        dataType: 'json',
        success: function() {
        console.log("sadf");
        }
          }); 
    }
 
   }
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
      

  
 
  
  

$('.checkout-button').click(function() {

  var page = getCookie('page');
  var dba=$(this).data('sku');
  var testidx = getCookie('testid'); //change this to the id of the active test

  if (testidx != '') { //there is an active test;
    recordCheckout(testidx, page, dba); 
  } else { //there is no running test
    window.location.href = "https://queenformula.net/kaisercoach-bundle-checkout.html?dba="+ dba;
   }
    
 
  
  
      
});
