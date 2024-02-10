$(document).ready(function(){


    var age = 20;

    if(age < 18){
        $('.block').addClass('if-class');

    }
    else{
        $('.block').addClass('else-class');

    }
    // alert("asd");
    $('.hide').click(function(){
        // alert("Sdf");
        $('.block').hide();
    });

    $('.show').click(function(){
        $('.block').show();
    });

    $('.tog').click(function(){
        $('.block').toggle();

    });

    $('.btn-circle').click(function(){
        $('.block').addClass('circle');

    });

    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });
});