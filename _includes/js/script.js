

 $(function() {
    $('.navbar-nav').on('click', function(){ 
        if($('.navbar-header .navbar-toggle').css('display') !='none'){
            $(".navbar-header .navbar-toggle").trigger( "click" );
        }
    });
});




  

     
      if ($(window).width() <1024) 
      {
            var shiftWindow = function() { scrollBy(0, -90) };
            if (location.hash) shiftWindow();
            window.addEventListener("hashchange", shiftWindow);
      }else if($(window).width() >= 1024 && $(window).width() <= 1440 ){
            var shiftWindow = function() { scrollBy(0, -130) };
            if (location.hash) shiftWindow();
            window.addEventListener("hashchange", shiftWindow);
      }



function disableMe(i)
{     
      
      var pathArray = window.location.hash;
      
      if(i == 1 && pathArray == "#home"){
        flag=1;
       // document.getElementById("a1").style.color = "black";
        event.preventDefault();


      }else if(i == 2 && pathArray == "#about"){
       // document.getElementById("a2").style.color = "black";
        event.preventDefault();
        flag=2;
      }else if(i == 3 && pathArray == "#services"){
        //document.getElementById("a3").style.color = "black";
        event.preventDefault();
        flag=3;
      }else if(i == 4 && pathArray == "#contact"){
        //document.getElementById("a4").style.color = "black";
        event.preventDefault();
        flag=4;
      }

     //alert(flag);
}




