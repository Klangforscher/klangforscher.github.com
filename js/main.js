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

$("#fittext").fitText(0.6, { minFontSize: "30px", maxFontSize: "160px" });



// Get 'username'

//

var a = audiojs.createAll({
  trackEnded: function() {
  store.set('state', 'play');
    if($(".next").length > 0){
      $(".next")[0].click();
    }
  }
});
var audio = a[0];

$('#playbtn, .intro').click(function(e) {
  store.set('state', 'off');
  $('#playbtn').toggleClass("ispaused isplaying");
  e.preventDefault();
  audio.playPause();
});

var playerState = store.get('state');
if(playerState == "play"){
  $("#playbtn").trigger('click');
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
  }
});
