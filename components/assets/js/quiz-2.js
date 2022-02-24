  $(document).ready(function(){
    
  
  
    
  }); //end document ready

  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  const mob = window.mobileCheck();
  const p = window.location.pathname.replace('/', '').replace('.html', '');
  var x = getCookie(p);
  if (x == ''){
    view();
  }
  function view(){
    var r;
  
    
   
    var dat = {'c': 'v', 'm': mob, 'p': p, 'op':p};
    if (document.referrer) {
      url = document.referrer; 
      r = url.match(/:\/\/(.[^/]+)/)[1];
      document.cookie="convRef="+r;
      dat = {'c': 'v', 'm': m,'r': r, 'p': p, 'op':p};
   } 
    $.ajax({
      type: 'POST',
      url: 'https://pay.kaiserfitapp.com/rec/rec.php',
      crossDomain: true,
      data: dat,
      dataType: 'json'

      }); //end ajax

      document.cookie=p+"=1";;
  }

  function conv(){
   
   
   
    var r = getCookie("convRef");
    $.ajax({
      type: 'POST',
      url: 'https://pay.kaiserfitapp.com/rec/rec.php',
      crossDomain: true,
      data: {'c': 'c', 'm': mob, 'p': p, 'op':p,'r': r},
      dataType: 'json'
      }); //end ajax
      document.cookie="originPage="+p;
      document.cookie=p+"conversion=1";
      document.cookie="mobile="+mob;
  }
      var uip = getip();

      function getip(){
        $.get("https://ipinfo.io", function(response) {
          return response.ip;
      }, "json")
      }
  

  function integromatt(action, ip) {
    var fbc = getCookie('_fbc');
    
        $.ajax({
        type: 'POST',
        url: 'https://hook.integromat.com/rzwt665qate0d0bu5xhex9q7cr0lun7m',
        crossDomain: true,
        data: {'Event': action, 'fbc': fbc,'url': window.location.href, 'userAgent': navigator.userAgent, 'ipAddress':ip},
        dataType: 'json'
  
        }); //end ajax
  }



  var quiz = [];
  var cquiz = [];
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

$(".quiz-cart").click(function(){
  var ans = $(this).data('ans');
  quiz.push(ans);

  function vowel(string){
    if (string.charAt(0) === 'A') {
      return "an "+ string;
    } else {
      return "a "+ string;
    }
  }

  var x = parseInt($(this).data("idx"));
 
  switch (x) {
    case 0:
    $("#a1").text(ans);
    break;
    case 1:
    $("#a2").text(vowel(ans));
    break;
    case 2:
      $("#a3").text(ans);
      break;
    case 3:
      $("#a4").text(ans);
    case 4:
      let m = $("#a4").text();
      $("#a5a").text(m);
      $("#a5b").text(ans);
      case 6 :
        $("#a7").text(ans); 
        break;
    case 7:
      let r = $("#a5a").text();
      let d = $("#a5b").text();
      $("#a8a").text(r);
      $("#a8b").text(d);
      $("#a8c").text(ans);
    default: break;
  }//end switch
});
   

function quizzify(){
  var elements = {
    q1: quiz[0],
    q2: quiz[1],
    q3: quiz[2],
    q4: quiz[3],
    q5: quiz[4],
    q6: quiz[5],
    q7: quiz[6],
    q8: quiz[7],
    q9: quiz[8]


 }

cquiz.push(elements);
var jsonStr = JSON.stringify( cquiz );

 document.cookie = "cquiz="+jsonStr;
 

}

    $(".answers-col").click(function(){
 
    
  $(".lazy").each(function(i, obj) {
   
    let x = obj.dataset.src
    obj.src = x;

});
      $('#question-modal').animate({
      
          scrollTop: '0px'
    }, 300);
      

      var cb = $(this).find("input[type='checkbox']");
    
      cb.attr('checked', true);
      $(cb).prop('checked', true);
     
      var z = $(this).data('idx');
      if (z === 2){
        document.cookie="userage="+cb.val();
   
       
        
      }
      
      if (z === 3){


       
        document.cookie="wlg="+cb.val();
      }
      var x = "#q"+z;
      var y = "#q"+(z+1);
      if (z != 8){
       
        // $(x).fadeOut('slow');
        // $(y).fadeIn('slow');
       setTimeout(function() {
        move();
        $(x).animate({
          left: '-100px',
          opacity: 'hide'
        }, function(){
          $(y).animate({
            right: '0px',
            opacity: 'show'
          });
        });
     
 
       
      
       }, 500);
      
       
      } else {
       
        elem.style.backgroundColor = "#0FFF50";
             elem.style.width = '100%';
      				elem.innerHTML = '100%';
              quizzify();
              var cc = getCookie(p+"conversion");
              if (cc == ''){
                conv();
              }

              setTimeout(function() {
          
                $("#question-modal").modal('hide');
                
                window.location.href="/fathacks-vsl.html";
              
             }, 500);
     
      

    
  
     
             
      }
      
    
    });




$(".ini-ans").click(function(){

  $('input:checkbox').prop('checked', false);
    
});


$(".final-ans").click(function(){
  integromatt('SubmitApplication', uip);
  document.cookie="_uip="+uip;
});

    