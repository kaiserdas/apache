//* JS file for split testing functions */
const testid = 5; //change this to the test id you created
              function randomIntFromInterval(min, max) { // min and max included 
                   return Math.floor(Math.random() * (max - min + 1) + min);
              }

              function weightedRand(spec) {
  var i, j, table=[];
  for (i in spec) {
    // The constant 10 below should be computed based on the
    // weights in the spec for a correct and optimal table size.
    // E.g. the spec {0:0.999, 1:0.001} will break this impl.
    for (j=0; j<spec[i]*10; j++) {
      table.push(i);
    }
  }
  return function() {
    return table[Math.floor(Math.random() * table.length)];
  }
}
var rand012 = weightedRand({0:0.0, 1:0.5, 2:0.5}); //change this according to the number of pages in the test and their weights



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

        function split_init() {
            var pageData = getCookie('page');
            if (pageData != ''){ //user already visited
              $('#main-content').load('pages/'+pageData);
            } else {
              // var number = randomIntFromInterval(1, 2);
              var number = rand012(); // random in distribution...
              console.log(number);
              var pageData = 'page'+number+'.html';
           
            document.cookie='page='+pageData;
            $('#main-content').load('pages/'+pageData);
            recordLanding(pageData);
            }  
        }
                 
          
          
          function recordLanding(pageData){ //function to record the split test landing page count of the selected page
            $.ajax({
                type: 'POST',
                url: 'https://pay.kaiserfitapp.com/split_test/landing.php',
                crossDomain: true,
                data: {'testid': testid,'page_name': pageData},
                dataType: 'json',
                success: function(data) {
                  return true;
               
                },
                 error: function(data){
                   console.log(data);
                 }
                  });
          }


          function recordCheckout(){ //function to record checkout click
            var page = getCookie('page');
            $.ajax({
                type: 'POST',
                url: 'https://pay.kaiserfitapp.com/split_test/checkout.php',
                crossDomain: true,
                data: {'testid': testid,'page_name': page},
                dataType: 'json',
                success: function() {
                
                  //direct user to checkout
                  window.location.href = "https://queenformula.net/kaisercoach-checkout.html?dba=01&spid="+ testid +"&page="+page;
                },
                 error: function(data){
                   console.log(data);
                 }
                  });
          }
                  


          function recordPurchase(price, bot){ //record the purchase on the checkout page
            var testidx = getParameterByName('spid');
            var page = getParameterByName('page');
            document.cookie="spid="+testid;
            document.cookie="stp="+page;
        
            $.ajax({
              type: 'POST',
              url: 'https://pay.kaiserfitapp.com/split_test/purchase.php',
              crossDomain: true,
              data: {'testid': testidx,'page_name': page,'price': price},
              dataType: 'json',
              success: function() {
                  return true;
                // console.log(data);
                // findNextPage(bot);
              },
               error: function(data){
                 console.log(data);
               }
                });
          }



          
      function updateAmount(price){ //function to update purchase amount for a page in split test from upsell 1-4
        var testidx = getCookie('spid');
        var stp = getCookie('stp');
        $.ajax({
           type: 'POST',
           url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
           crossDomain: true,
           data: {'testid': testidx,'page_name': stp,'price': price},
           dataType: 'json',
           success: function(data) {
            return true;
           },
            error: function(data){
              console.log(data);
            }
       });
    }

    function updateAmount2(price){ //function to update purchase amount for a page in split test at the thank-you page
        var testidx = getCookie('spid');
        var stp = getCookie('stp');
        $.ajax({
           type: 'POST',
           url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
           crossDomain: true,
           data: {'testid': testidx,'page_name': stp,'price': price},
           dataType: 'json',
           success: function(data) {
             return true;
            
           },
            error: function(data){
              console.log(data);
            }
       });
      }