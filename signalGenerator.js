var pips_audio = null;
var lastPipSecond = null;

function updateTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  if (h < 10) {h = "0" + h};
  if (m < 10) {m = "0" + m};
  if (s < 10) {s = "0" + s};
  document.getElementById('time').innerHTML =h + ":" + m + ":" + s;  
  setTimeout(updateTime, 600);

  if(evaluatePip(s, lastPipSecond)){
    lastPipSecond = s;
    playPips();
  }
}

function toggleMute() {
        var audio = document.getElementById("pip_audio");
        var button = document.getElementById("muteToggle");
        
        if (button.innerHTML === "SOUND OFF") {
          button.innerHTML = "SOUND ON";
          pips_audio.unmute();
          // console.log("time signal - unmuted");
        } 
        else {
          button.innerHTML = "SOUND OFF";
          pips_audio.mute();
          // console.log("time signal - unmuted");
        }
        return 0;
}

function evaluatePip(s) {
  var interval = document.getElementById("pipIntervalInput").value;
  if((s % interval-5 == 0) && (s > lastPipSecond+5 || lastPipSecond == null)){
    return true;
  }
  else{return false;}
}

function playPips() {
  pips_audio.play();
  console.log("time signal - Pips now.");
  return 0;
}

