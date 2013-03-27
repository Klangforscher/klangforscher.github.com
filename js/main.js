

$("#fittext").fitText(0.6, { minFontSize: "30px", maxFontSize: "160px" });


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
    //audio.playPause();
  }
});



      audiojs.events.ready(function() {
        var audios = document.getElementsByTagName('audio');

        var a1 = audiojs.create(audios[0], {
          css: false,
          createPlayer: {
            markup: false,
            playPauseClass: 'play-pauseZ',
            scrubberClass: 'scrubberZ',
            progressClass: 'progressZ',
            loaderClass: 'loadedZ',
            timeClass: 'timeZ',
            durationClass: 'durationZ',
            playedClass: 'playedZ',
            errorMessageClass: 'error-messageZ',
            playingClass: 'playingZ',
            loadingClass: 'loadingZ',
            errorClass: 'errorZ'
          }
        });

        var a2 = audiojs.create(audios[1]);
/*
        var a3 = audiojs.create(audios[2], {
          createPlayer: {
            markup: '\
              <div class="play-pause"> \
                <p class="play"></p> \
                <p class="pause"></p> \
                <p class="loading"></p> \
                <p class="error"></p> \
              </div> \
              <div class="scrubber"> \
                <div class="progress"></div> \
                <div class="loaded"></div> \
              </div> \
              <div class="time"> \
                <em class="played">00:00</em>/<strong class="duration">00:00</strong> \
              </div> \
              <div class="error-message"></div>',
            playPauseClass: 'play-pause',
            scrubberClass: 'scrubber',
            progressClass: 'progress',
            loaderClass: 'loaded',
            timeClass: 'time',
            durationClass: 'duration',
            playedClass: 'played',
            errorMessageClass: 'error-message',
            playingClass: 'playing',
            loadingClass: 'loading',
            errorClass: 'error'
          });
*/
      });
