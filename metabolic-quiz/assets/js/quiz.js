  $(document).ready(function(){
    $('input:checkbox').removeAttr('checked');
    var tokenx = "";
    function upSession(){
 		$.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/curly.php',
    crossDomain: true,
    data: {'action': 'pLoad','fpage': 'newQuiz','tokenx': tokenx, 'source': 'youtube'},
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
 
       var uToken = getCookie("userToken");


       
        if (uToken != "") { //token Exists
  			tokenx = uToken;
          
  					}else { //no token
    						let pass = [...crypto.getRandomValues(new Uint8Array(10))]
                .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
								console.log(pass);
    					 document.cookie = "userToken="+pass;
              tokenx = pass;
  				}
      
      upSession();
}
    
    checkCookie();
    
    
  }); //end document ready
      


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
    

function toRes(){
        var tokenx = getCookie('userToken');
 		$.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/curly.php',
    crossDomain: true,
    data: {'action': 'uLoad','fpage': 'newQuiz','tokenx': tokenx, 'user_action': 'proceed'},
    dataType: 'json',
    success: function(data) {
      console.log(data);
    },
     error: function(data){
       console.log(data);
     }
      }); 
} //toRes

    var widthValue = 0;
    var elem = document.getElementById("progress");
    var widthAnim = widthValue;


    function move() {
      var id = setInterval(frame, 12.5);
      var widthIncrement = 12.5;
      widthValue = widthAnim + widthIncrement;
      function frame() {
        if (widthAnim >= widthValue || widthValue > 100) {
          clearInterval(id);
          //button.disabled = true;
        } else {
          widthAnim++;
          elem.style.width = widthAnim + '%';
          elem.innerHTML = widthAnim * 1 + '%';
        }
      }
    }



    $(".answers-col").click(function(){
      move();

      var cb = $(this).find("input[type='checkbox']");
    
      cb.attr('checked', true);
      $(cb).prop('checked', true);
     
      var z = $(this).data('idx');
      if (z === 1){
        document.cookie="userage="+cb.val();
      }
      
      if (z === 3){
        document.cookie="wlg="+cb.val();
      }
      var x = "#q"+z;
      var y = "#q"+(z+1);
      if (z != 8){
        $(x).fadeOut('slow');
        $(y).fadeIn('slow');
      } else {
        elem.style.backgroundColor = "#0FFF50";
             elem.style.width = '100%';
      				elem.innerHTML = '100%';
              
        toRes();
        $('#question-modal').animate({
        //scrollTop: $("#progress").offset().top
          scrollTop: '0px'
    }, 300);
        
        
        setTimeout(function() {
           $("#question-modal").modal('hide');
          window.location.href="/metabolic-quiz/metabolic-test-result.html";
        }, 1500);
             
      }
      
    
    });


$( "#question-modal" ).on('shown', function(){
    gtag('event', 'conversion', {'send_to': 'AW-808125221/ogk9COHq3u8CEKWGrIED'});
});

    