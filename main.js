$( ".header" ).next().css( "margin-top", "6px" );
$( ".subheader" ).next().css( "margin-top", "6px" );
$(".button-collapse").sideNav();  
$("#bp2t").click(function(){
  $('body:not(:animated)').animate({scrollTop: $("#p2t").offset().top - 200}, 1300, 'easeInOutQuad' );}
);
$("#bbd").click(function(){
  $('body:not(:animated)').animate({scrollTop: $("#bd").offset().top - 200}, 1300, 'easeInOutQuad' );}
);
$("#p2tp").click(function(){
    var win = window.open('','printwindow');
    win.document.write($("#p2t").html());
    win.print();
    win.close();
});
/*$('#p2tp').click(function() {
  $('body').append('<iframe id="printf" style="font-family:Roboto;" name="printf"><</iframe>');
  $('#printf').contents().find('body').append(document.getElementById("p2t"));
  window.frames["printf"].focus();
  window.frames["printf"].print();
});*/
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.getElementsByClassName("sider").style.visibility = "visible";
}
