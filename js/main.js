---
layout: nil
---

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
       $("#fittext").lettering();
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
