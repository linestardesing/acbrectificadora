// rotate
// options.rotateIn = ..-360..360.. - direction and angle of rotate for new image, default +180 
// options.scaleIn >0 - scale for new image, default 10
// options.noCross - Do not rotate prev image
// options.rotateOut= ..-360..360.. - direction and angle of rotate for prev image, default +180 
// options.scaleOut >0 - scale for new image, default 10
function ws_rotate(a,f,e){var c=jQuery,l=c(this);c(".ws_list",e);var g={position:"absolute",left:0,top:0},h=c("<div>").addClass("ws_effect ws_rotate").css(g).css({height:"100%",width:"100%",overflow:"hidden"}).appendTo(e),d;this.go=function(e,m){var b=c(f[0]),b={width:b.width(),height:b.height(),marginTop:parseFloat(b.css("marginTop")),marginLeft:parseFloat(b.css("marginLeft")),maxHeight:"none",maxWidth:"none"};d&&d.stop(!0,!0);d=c(f.get(e)).clone().css(g).css(b).appendTo(h);if(!a.noCross){var k=
c(f.get(m)).clone().css(g).css(b).appendTo(h);wowAnimate(k,{opacity:1,rotate:0,scale:1},{opacity:0,rotate:a.rotateOut||180,scale:a.scaleOut||10},a.duration,"easeInOutExpo",function(){k.remove()})}wowAnimate(d,{opacity:1,rotate:-(a.rotateIn||180),scale:a.scaleIn||10},{opacity:1,rotate:0,scale:1},a.duration,"easeInOutExpo",function(){d.remove();d=0;l.trigger("effectEnd")})}};
