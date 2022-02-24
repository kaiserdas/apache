$( document ).ready(function() {

    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
      
      console.log(window.mobileCheck());
      var tokenx = "";
  
     function showCO(){
      // document.getElementById("co-box").style.display = 'block';
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
  var userage = getCookie("userage");
       var fhw = getCookie("fh-watched");
       var uToken = getCookie("userToken");
        if (fhw != "") {
         
   document.getElementById("co-box").style.display = 'block';
  }else { //initiate timer of vid
     document.cookie = "fh-watched=1";
    //setTimeout(showCO, 2640000);
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
  
    //upSession();
    // split_init();
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
    document.cookie="refsite=fb";
    var page = getCookie('page');
    var dba=$(this).data('sku');
    var testidx = getCookie('testid'); //change this to the id of the active test
  
     var dd = {'action': 'uLoad','fpage': 'fathacks','tokenx': tokent, 'user_action': 'proceed'};
      
        $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/curly.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(response) {
      // console.log(response.data);
      document.cookie="refsite=fb";
      // window.location.href = "/kaisercoach-bundle-checkout.html?dba="+ dba; // use this link if there are no existing test
      if (testidx != '') { //there is an active test;
        recordCheckout(testidx, page, dba); 
      } else { //there is no running test
        window.location.href = "https://queenformula.net/kaisercoach-bundle-checkout.html?dba="+ dba;
       }
     
    },
     error: function(response){
        //submit parameters regardless of error in-case there is an active test
       document.cookie="refsite=fb";
       window.location.href = "https://queenformula.net/kaisercoach-bundle-checkout.html?dba="+ dba +"&spid="+ testidx +"&page="+page; //use these parameters for split testing
  
     }
      });
    
    
        
  });
  