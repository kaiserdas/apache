// $(".bundle-button").eq(1).css('background-color', '#141414');
// $(".bundle-button").eq(1).css('color', '#fff');
$(document).ready(function(){

  $("#act").trigger("click");
});
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
$("#curdate").css('font-weight', '700');
// var initial = 900000;
// var count = initial;
// var counter; //10 will  run it every 100th of a second
// var initialMillis;

// function timer() {
//   if (count <= 0) {
//       clearInterval(counter);
//       return;
//   }
//   var current = Date.now();
  
//   count = count - (current - initialMillis);
//   initialMillis = current;
//   displayCount(count);
// }
// function displayCount(count) {
//   let res = Math.floor(count / 1000);
//   let milliseconds = count.toString().substr(-2);
//   let seconds = res % 60;
//   if (seconds < 10){
//     seconds = "0"+seconds;
//   }
//   let minutes = (res - seconds) / 60;
//   if (minutes < 10){
//     minutes = "0"+minutes;
//   }
//   document.getElementById("counter").innerText =
//       minutes + ':' + seconds + ':' + milliseconds;
// }
// clearInterval(counter);
// initialMillis = Date.now();
// setInterval(timer, 1);



var timeInSecs;
var ticker;

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
  document.getElementById("counter").innerText = "00:00:00"
// clearInterval(ticker);
// startTimer(15*60); // 10 minutes in seconds
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
  document.getElementById("counter").innerText = "00:"+xmins+":"+xsec;
  // document.getElementById("sec").innerText = xsec;
//document.getElementById("countdown").innerHTML = pretty;
}

startTimer(15*60);




function showBest(){
  $("#bv").toggleClass("show");
}
$(".bundle-button").click(function() {
    $(".bundle-button").removeClass("list-head selected");
    $(".bundle-button").css("background-color", "#fff");
    $(".bundle-button").css("color", "#0085c6");

    $(this).addClass("list-head selected");
    $(this).css('background-color', $(this).data('background'));
    $(this).css('color', $(this).data('color'));
    if ($(this).data('id') == "platinum") {
      $("#bv").show();
    } else {
      $("#bv").hide();
    }
    //change the active pic
    let bundle = "#"+$(this).data('id');
    $(".bundle-pic").removeClass("shown");
    $(bundle).addClass("shown");


    //change the product section accordingly
    let bundleDiv = "#"+$(this).data('id')+"-bundle";
    $(".box-bundle").removeClass('shown');
    $(bundleDiv).addClass("shown");
});

$('.scroll-product').click(function(){
    $('html, body').animate({
        scrollTop: $("#product-section").offset().top - 20 
    }, 'slow');
});


$(".comment-page").click(function(){
    $(".comment-section").removeClass("active");
 var page = $(this).data("page");
 var section = "#comment-section-"+page;
   
   
    $(section).addClass(" active");
    $('html, body').animate({
       scrollTop: $(section).offset().top - 20 
   }, 'slow');
});
  
  $("#comment-prev").click(function(){
          var page = $(".comment-section.active").attr("id");
    var x = parseInt($(".comment-section.active").data("page")) - 1;
   
    if (page == "comment-section-1"){
          return false;
    } else {
       $(".comment-section").removeClass("active");
     var section =  "#comment-section-"+x;
      $(section).addClass(" active");
      $(".comment-page").eq(x).addClass("active");
    $('html, body').animate({
       scrollTop: $(section).offset().top - 20 
   }, 'slow');
    }
  });
  
  
  $("#comment-next").click(function(){
          var page = $(".comment-section.active").attr("id");
      var x = parseInt($(".comment-section.active").data("page")) + 1;
    
    if (page == "comment-section-5"){
          return false;
    } else {
       $(".comment-section").removeClass("active");
     var section =  "#comment-section-"+x;
      $(section).addClass(" active");
      $(".comment-page").eq(x).addClass("active");
    $('html, body').animate({
       scrollTop: $(section).offset().top - 20 
   }, 'slow');
    }
  });


  $(".cta-button").click(function() {
    var page = getCookie('page');
    var dba=$(this).data('id');
    var testidx = getCookie('testid'); //change this to the id of the active test
  
    if (testidx != '') { //there is an active test;
        recordCheckout(testidx, page, dba); 
      } else { //there is no running test
        window.location.href = "https://queenformula.net/kaisercoach-bundle-checkout.html?dba="+ dba;
       }
  });