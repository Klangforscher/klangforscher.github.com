---
layout: nil
---


//$(function(){
 //     $('picture').picture();
//});

/*! Backstretch - v2.0.3 - 2012-11-30
 * * http://srobbin.com/jquery-plugins/backstretch/
 * * Copyright (c) 2012 Scott Robbin; Licensed MIT */
(function(e,t,n){"use strict";e.fn.backstretch=function(r,s){return(r===n||r.length===0)&&e.error("No images were supplied for Backstretch"),e(t).scrollTop()===0&&t.scrollTo(0,0),this.each(function(){var t=e(this),n=t.data("backstretch");n&&(s=e.extend(n.options,s),n.destroy(!0)),n=new i(this,r,s),t.data("backstretch",n)})},e.backstretch=function(t,n){return e("body").backstretch(t,n).data("backstretch")},e.expr[":"].backstretch=function(t){return e(t).data("backstretch")!==n},e.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var r={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},i=function(n,i,o){this.options=e.extend({},e.fn.backstretch.defaults,o||{}),this.images=e.isArray(i)?i:[i],e.each(this.images,function(){e("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=e(n),this.$wrap=e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container),this.$root=this.isBody?s?e(t):e(document):this.$container;if(!this.isBody){var u=this.$container.css("position"),a=this.$container.css("zIndex");this.$container.css({position:u==="static"?"relative":u,zIndex:a==="auto"?0:a,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&s?"fixed":"absolute"}),this.index=0,this.show(this.index),e(t).on("resize.backstretch",e.proxy(this.resize,this)).on("orientationchange.backstretch",e.proxy(function(){this.isBody&&t.pageYOffset===0&&(t.scrollTo(0,1),this.resize())},this))};i.prototype={resize:function(){try{var e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,i=this.isBody?t.innerHeight?t.innerHeight:this.$root.height():this.$root.innerHeight(),s=r/this.$img.data("ratio"),o;s>=i?(o=(s-i)/2,this.options.centeredY&&(e.top="-"+o+"px")):(s=i,r=s*this.$img.data("ratio"),o=(r-n)/2,this.options.centeredX&&(e.left="-"+o+"px")),this.$wrap.css({width:n,height:i}).find("img:not(.deleteable)").css({width:r,height:s}).css(e)}catch(u){}return this},show:function(t){if(Math.abs(t)>this.images.length-1)return;this.index=t;var n=this,i=n.$wrap.find("img").addClass("deleteable"),s=e.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=e("<img />").css(r.img).bind("load",function(t){var r=this.width||e(t.target).width(),o=this.height||e(t.target).height();e(this).data("ratio",r/o),e(this).fadeIn(n.options.speed||n.options.fade,function(){i.remove(),n.paused||n.cycle(),n.$container.trigger(s,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[t]),n},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(this.index===0?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(e.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){e(t).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var s=function(){var e=navigator.userAgent,n=navigator.platform,r=e.match(/AppleWebKit\/([0-9]+)/),i=!!r&&r[1],s=e.match(/Fennec\/([0-9]+)/),o=!!s&&s[1],u=e.match(/Opera Mobi\/([0-9]+)/),a=!!u&&u[1],f=e.match(/MSIE ([0-9]+)/),l=!!f&&f[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&i&&i<534||t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]"||u&&a<7458||e.indexOf("Android")>-1&&i&&i<533||o&&o<6||"palmGetResource"in t&&i&&i<534||e.indexOf("MeeGo")>-1&&e.indexOf("NokiaBrowser/8.5.0")>-1||l&&l<=6)}()})(jQuery,window);





(function( $ ){
	
  $.fn.fitText = function( kompressor, options ) {
	   
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
	
    return this.each(function(){

      // Store the object
      var $this = $(this); 
        
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();
				
      // Call on resize. Opera debounces their resize by default. 
      $(window).on('resize', resizer);
      	
    });

  };

})( jQuery );

(function(e,t){"use strict";var n=typeof Element!="undefined"&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){var e,n,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"]],i=0,s=r.length,o={};for(;i<s;i++){e=r[i];if(e&&e[1]in t){for(i=0,n=e.length;i<n;i++)o[r[0][i]]=e[i];return o}}return!1}(),i={request:function(e){var i=r.requestFullscreen;e=e||t.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[i]():e[i](n&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){t[r.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(){},onerror:function(){}};if(!r)return e.screenfull=!1;Object.defineProperties(i,{isFullscreen:{get:function(){return!!t[r.fullscreenElement]}},element:{enumerable:!0,get:function(){return t[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return t[r.fullscreenEnabled]}}}),t.addEventListener(r.fullscreenchange,function(e){i.onchange.call(i,e)}),t.addEventListener(r.fullscreenerror,function(e){i.onerror.call(i,e)}),e.screenfull=i})(window,document);

var txt=$("#lastupdatetimestamp").text();
$("#lastupdatetimestamp").html(moment(txt, "DD.MM.YYYY HH:mm:ss").fromNow());

var urls=[{% for post in site.categories.audio %}"{{ post.url }}",{% endfor %}""];

/*global jQuery */
/*!	
 * FitText.js 1.1
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

(function( $ ){
  $.fn.fitText = function( kompressor, options ) {
    // Setup options
    var compressor = kompressor || 1,
settings = $.extend({ 'minFontSize' : Number.NEGATIVE_INFINITY, 'maxFontSize' : Number.POSITIVE_INFINITY }, options);
return this.each(function(){
  // Store the object
  var $this = $(this); 
  // Resizer() resizes items based on the object width divided by the compressor * 10
  var resizer = function () {
    $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
  };
  // Call once to set.
  resizer();
  // Call on resize. Opera debounces their resize by default. 
  $(window).on('resize', resizer);
});

};

})( jQuery );

$("#fittext").fitText(0.6, { minFontSize: "30px", maxFontSize: "300px" });

 $(document).ready(function() {
       /* 
   $(function(){
         $('picture').picture();
   });
*/

       $(".tracktitle").lettering();

         });

/* AUDIO */

// pick random track from array of urls
if($(".next").length>0){
  urls.pop(); // remove last element, it's empty
  $("#shuffle").click(function(){
    var index=Math.floor(Math.random()*urls.length)
    window.open (urls[index],'_self',false);
  });
}

var a = audiojs.createAll({
  trackEnded: function() {
    store.set('state', 'play');
    if($(".next").length > 0){
      $(".next")[0].click();
    }
  }
});

var audio = a[0];

function playit(){
  $("#playbtn").addClass("playing").html('<i class="icon-pause icon-spin"></i>');
  audio.play();
  store.set('state', 'play');
}

function pauseit(){
  $("#playbtn").removeClass("playing").html('<i class="icon-play"></i>');
  audio.pause();
  store.set('state', 'off');
}

$('#playbtn, .intro').click(function(e) {
  if($(".kernjs_panel").length==0){
  if($("#playbtn").hasClass("playing")){
    pauseit();
  }else{
    playit();
  }
  e.preventDefault();
  }
});

if($(".audiojs").length>0){
var playerState = store.get('state');
if(playerState == "play"){
  playit();
}
}



$(document).keydown(function(e) {
  var unicode = e.charCode ? e.charCode : e.keyCode;
  if (unicode == 37) {
    if($(".next").length > 0){
      $(".next")[0].click();
    }
  } else if (unicode == 39) {
    if($(".prev").length > 0){
      $(".prev")[0].click();
    }
  } else if (unicode == 32) {
    audio.playPause();
    e.preventDefault();
    $('#playbtn').toggleClass("ispaused isplaying");
  } else if (unicode == 70) {
    if (screenfull.enabled) {
      screenfull.request();
    }
  }
});
