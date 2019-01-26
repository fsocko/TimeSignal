function toggleMute() {
        
        var audio = document.getElementById("pip_audio");
        var button = document.getElementById("muteToggle");

        if (button.innerHTML === "SOUND OFF") {
          button.innerHTML = "SOUND ON";
          audio.muted = false;
        } 
        else {
          button.innerHTML = "SOUND OFF";
          audio.muted = true;
        }
        return 0;
}

function evaluatePip(h, m, s) {
  var interval = document.getElementById("pipIntervalInput").value;
  if(s % interval == 0){
    return true;
  }
  else{return false;}
}

function playPip() {
  var audio = document.getElementById("pip_audio").value;
  soundManager.play('mySound');
  return 0;
}

function loadSoundManager(){

  soundManager.setup({
    url: '',
    onready: function() {
      var mySound = soundManager.createSound({
        id: 'aSound',
        url: 'bbc_pips.mp3'
      });
      mySound.play();
    },
    ontimeout: function() {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
  });

}