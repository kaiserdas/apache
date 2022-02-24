$(document).ready(function() {
  
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
  		var vid1 = getCookie("vid1");
       var vid2 = getCookie("vid2");
       var vid3 = getCookie("vid3");
       var vid4 = getCookie("vid4");
   
       if (document.getElementById("result1")){
       
            
        //   var meta = getCookie("p_meta");
        //  var gender = getCookie("p_gender");
        //  var age = getCookie("p_age");
        //  var goal = getCookie("p_goal");
        //  document.getElementById("meta").textContent = meta;
    		// 	document.getElementById("gender").textContent = gender;
   			//  document.getElementById("age").textContent = age;
    		// document.getElementById("goal").textContent = goal;
           
       }
       
       
       if (document.getElementById("result2")){
           if (vid2 != "") {
            document.getElementById("r2Btn").style.display = "block";
            }
            
        var height = getCookie("p_height");
         var weight = getCookie("p_weight");
         var exp = getCookie("p_exp");
         var wgo = getCookie("p_wgo");
          var weightx = getCookie("p_weightx");
        document.getElementById("xheight").textContent = height;
    document.getElementById("xweight").textContent = weight;
   document.getElementById("xxp").textContent = exp;
   document.getElementById("xgain").textContent = wgo;
    document.getElementById("wlg").textContent = weightx;
  
          
           
       }
       if (document.getElementById("result3")){
         
            if (vid3 != "") {
            document.getElementById("r3Btn").style.display = "block";
            }
           var mot = getCookie("p-mot");
         var db = getCookie("p-db");
         var ins = getCookie("p-ins");
          document.getElementById("motLevel").textContent = mot;
    document.getElementById("dbgoal").textContent = db;
   	document.getElementById("aoi").textContent = ins;
   
          }
       
       
       if (document.getElementById("result4")){
         
         var timex = getCookie("p-timeGoal");
           document.getElementById("timeGoal").textContent = timex;
           
            if (vid4 != "") {
            document.getElementById("r4Btn").style.display = "block";
            }
          
       
       }
 
        
}
     
     checkCookie();
  
});


       function getMobileOperatingSystem() {
                var userAgent = navigator.userAgent || navigator.vendor || window.opera;

                if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
                {
                  return 'iOS';

                }
                else if( userAgent.match( /Android/i ) )
                {

                  return 'Android';
                }
                else
                {
                  return 'unknown'; 
                }
              }

              var device = getMobileOperatingSystem();

              document.cookie = "device="+device;
     function getParameterByName(name, url = window.location.href) {
                      name = name.replace(/[\[\]]/g, '\\$&');
                      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                          results = regex.exec(url);
                      if (!results) return null;
                      if (!results[2]) return '';
                      return decodeURIComponent(results[2].replace(/\+/g, ' '));
                  }
                  var acid = getParameterByName('acid'); 
                  if (acid != "") { //activecampaignID
                      document.cookie = "acid="+acid;
                  }    
     var g_clid = getParameterByName('gclid');
       if (g_clid != "") { //gclid
                      document.cookie = "gglid="+g_clid;
                  } 

     	var tokenx = "";
       
  
  
  function upSession(quiz, tokenx) {
    $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/curly.php',
    crossDomain: true,
    data: {'action': 'uLoad','fpage': quiz,'tokenx': tokenx, 'user_action': 'start'},
    dataType: 'json',
    success: function(response) {
      console.log(response.data);
    },
     error: function(response){
       console.log(response.data);
     }
      });//end ajax
 
		} //end upSession

function endQuiz(quiz, tokenx) {
    $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/curly.php',
    crossDomain: true,
    data: {'action': 'endQuiz','fpage': quiz,'tokenx': tokenx, 'user_action': 'completed'},
    dataType: 'json',
    success: function(response) {
      console.log(response.data);
    },
     error: function(response){
       console.log(response.data);
     }
      });//end ajax
 
		} //end upSession
  

  
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
     
     function checkCookie(quiz, mode) {
  
      
       var uToken = getCookie("userToken");
     var tokenx = ""
        if (uToken != "") { //token Exists
  			tokenx = uToken;
             if(mode === "start"){
                upSession(quiz ,tokenx);
              }
              
               if(mode === "end"){
                endQuiz(quiz ,tokenx);
              }
  					}else { //no token
    						let pass = [...crypto.getRandomValues(new Uint8Array(10))]
                .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
			console.log(pass);
    					 document.cookie = "userToken="+pass;
              tokenx = pass;
              if(mode === "start"){
                upSession(quiz ,tokenx);
              }
              
               if(mode === "end"){
                endQuiz(quiz ,tokenx);
              }
              
  				}
}
     
    
  
var meta = "";
var gender = "";
var age = "";
var goal = "";
$(".btnMod").click(function() {
  var ans = $(this).data("meta");
 	 	meta = ans;
  var quiz = "fb-quiz";
  fbq('track', 'Lead');
  var mode = "start";
   checkCookie(quiz, mode); 
  console.log(meta);
  $("#mainSection").hide();
  $("#quiz1").fadeIn();
});
$(".genderButton").click(function() {
  var ans = $(this).data("gender");
 	 	gender = ans;
  $("#genderDiv").hide();
  $("#ageDiv").fadeIn();
  console.log(gender);
});

$(".ageButton").click(function() {
  var ans = $(this).data("age");
 	 	age = ans;
  $("#ageDiv").hide();
  $("#goalDiv").fadeIn();
  console.log(age);
});

$(".goalButton").click(function() {
  var ans = $(this).data("goal");
 	 	goal = ans;
   var quiz = "fb-quiz";
 
   var mode = "end";
   checkCookie(quiz, mode); 
  $("#goalDiv").hide();
  $("#comp1").fadeIn();
  console.log(goal);
  //$("#mainSection").fadeOut();
   //$("#blueTop").fadeOut();
  setTimeout(function() {
    gtag('event', 'conversion', {'send_to': 'AW-808125221/NpwGCO-Cru8CEKWGrIED'});
   
    document.cookie="p_meta="+meta;
    document.cookie="p_gender="+gender;
    document.cookie="p_age="+age;
    document.cookie="p_goal="+goal;
    
  $("#quiz1").hide();
    //$("#result1").fadeIn();
		
    
    window.location.href="/vsl-result.html";
}, 2000);
});


var height = "";
var weight = "";
var weightx = "";
var diet = "";
var exp = "";
var wgo = "";
$(".statxButton").click(function() {
  height = "N/A";
  weight = "N/A";
   var quiz = "quiz2";
  var mode = "start";
   checkCookie(quiz, mode); 
    $("#statDiv").hide();
  $("#weightDiv").fadeIn();
});
$(".statButton").click(function() {
  document.getElementById("statError").innerHTML = "";
  let y = $("#height").val();
  let w = $("#weight").val();
 
  if (y == "" || w == "") {
    document.getElementById("statError").innerHTML = "Please Provide the Needed Information<br><br>";
    return false;
  }
  if (isNaN(y) || isNaN(w)){
    document.getElementById("statError").innerHTML = "Please Provide the Correct Information<br><br>";
    return false;
  }
  
   var quiz = "quiz2";
  var mode = "start";
   checkCookie(quiz, mode); 
  height = y;
  weight = w;
   $("#statDiv").hide();
  $("#weightDiv").fadeIn();
  console.log(height);
  console.log(weight);
});

$(".weightButton").click(function() {
  var ans = $(this).data("weight");
 	 	weightx = ans;
  $("#weightDiv").hide();
  $("#dietDiv").fadeIn();
  console.log(weightx);
});

$(".dietButton").click(function() {
  var ans = $(this).data("diet");
 	 	diet = ans;
  $("#dietDiv").hide();
  $("#wLossDiv").fadeIn();
  console.log(diet);
});

$(".wButton").click(function() {
  var ans = $(this).data("exp");
 	 	exp = ans;
  $("#wLossDiv").hide();
  $("#wGoDiv").fadeIn();
 console.log(exp);
});

$(".wGoButton").click(function() {
   var ans = $(this).data("wgo");
 	 	wgo = ans;
  $("#wGoDiv").hide();
  $("#comp2").fadeIn();
   var quiz = "quiz2";
  var mode = "end";
   checkCookie(quiz, mode); 
 setTimeout(function() {
   gtag('event', 'conversion', {'send_to': 'AW-808125221/G0msCJ3L4O8CEKWGrIED'});
    
   
   document.cookie="p_height="+height;
   document.cookie="p_weight="+weight;
   document.cookie="p_exp="+exp;
   document.cookie="p_wgo="+wgo;
   document.cookie="p_weightx="+weightx;
  $("#quiz2").hide();
     window.location.href="/vsl-quiz-result-2";
   
}, 2000);
});

$("#quiz3 .modal-body .question .checkbox").click(function() {
  


});

var mot = "";
var db = "";
var ins = "";
$(".routineButton").click(function() {
 // var ans = $(this).data("diet");
 //	 	diet = ans;
   var quiz = "quiz3";
  var mode = "start";
   checkCookie(quiz, mode); 
  $("#routineDiv").hide();
  $("#motDiv").fadeIn();
  //console.log(diet);
});

$(".motButton").click(function() {
  var ans = $(this).data("mot");
 	 	mot = ans;
  $("#motDiv").hide();
  $("#dbDiv").fadeIn();
  console.log(mot);
});

$(".dbButton").click(function() {
  var ans = $(this).data("db");
 	 	db = ans;
  $("#dbDiv").hide();
  $("#insDiv").fadeIn();
  console.log(db);
});

$(".insButton").click(function() {
  var ans = $(this).data("ins");
 	 	ins = ans;
 $("#insDiv").hide();
  $("#comp3").fadeIn();
   var quiz = "quiz3";
  var mode = "end";
   checkCookie(quiz, mode); 
 setTimeout(function() {
   gtag('event', 'conversion', {'send_to': 'AW-808125221/HClPCPmxtu8CEKWGrIED'});
   

  document.cookie = "p-mot="+mot;
  document.cookie = "p-db="+db;
   document.cookie = "p-ins="+ins;
   
  $("#quiz3").hide();
window.location.href="/vsl-quiz-result-3";
   
    //$("#email3").fadeIn();
}, 2000);
});

function isEmail(email){
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
  return regex.test(email);
}
function sendCustomPlan(email){
  $.ajax({
    type: 'POST',
    url: 'https://hook.integromat.com/6icysrlf7uw2pkd9bq6wkstfs23itogy',
    crossDomain: true,
    data: {'email': email},
    
    success: function(data) {
   		
    console.log(data);;
    }, 
    error: function(data) {
     console.log(data); 
    }
    });
}
$(".email").click(function() {
   document.getElementById("Errorx").innerHTML = "";
  var ans = $("#emailx").val();
 	 	if (!isEmail(ans)) {
       document.getElementById("Errorx").innerHTML = "Please provide a Valid email";
   	return false;
    } else {
      sendCustomPlan(ans);
      
    }
  $("#result2").fadeOut();
  $("#quiz3").modal("hide");
  $("#result3").fadeIn();
 
});

var xx = "";
var timex = "";

$(".xxButton").click(function() {
 // var ans = $(this).data("db");
 //	 	db = ans;
   var quiz = "quiz4";
  var mode = "start";
   checkCookie(quiz, mode); 
  $("#xxDiv").hide();
  $("#motsDiv").fadeIn();
 // console.log(db);
});

$(".motsButton").click(function() {
 // var ans = $(this).data("db");
 //	 	db = ans;
  $("#motsDiv").hide();
  $("#timeDiv").fadeIn();
 // console.log(db);
});

$(".timeButton").click(function() {
 var ans = $(this).data("time");
	timex = ans;
  $("#timeDiv").hide();
  $("#ssDiv").fadeIn();
 // console.log(db);
});


function fbgo() {
  window.location.href = "https://urlgeni.us/fb_messenger/pass";
}
$(".ssButton").click(function() {
 // var ans = $(this).data("ins");
 	// 	ins = ans;
 $("#ssDiv").hide();
  $("#comp4").fadeIn();
   var quiz = "quiz4";
  var mode = "end";
   checkCookie(quiz, mode); 
 setTimeout(function() {
  
   document.cookie="p-timeGoal="+timex;
    gtag('event', 'conversion', {'send_to': 'AW-808125221/vr51CNjc4O8CEKWGrIED'});

   
  $("#quiz4").hide();
   window.location.href="/vsl-quiz-result-4";
}, 2000);
});




 