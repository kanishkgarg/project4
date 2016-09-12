$(document).ready(function(){
    

$("nav li a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
})
$("nav li:nth-child(1)").click(function(){
    $("#home").removeClass("hidden1").siblings().addClass("hidden1");
    
});
    $("nav li:nth-child(2)").click(function(){
    $("#about").removeClass("hidden1").siblings().addClass("hidden1");
    
});
    
    $("nav li:nth-child(3)").click(function(){
    $("#menu").removeClass("hidden1").siblings().addClass("hidden1");
       
    
});
    $("nav li:nth-child(4)").click(function(){
    $("#contact").removeClass("hidden1").siblings().addClass("hidden1");
    
});
    
    $("#menu li").mouseover(function(){
        var x = $(this).data('price');
        $("#price").text(x);
    });
     $("#menu li").mouseleave(function(){
        $("#price").text("0.00")
});
});

