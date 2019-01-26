var fps_audio = null;

function updateTime() {
  var lastPipSecond = null;
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  if (h < 10) {h = "0" + h};
  if (m < 10) {m = "0" + m};
  if (s < 10) {s = "0" + s};
  document.getElementById('time').innerHTML =h + ":" + m + ":" + s;  
  setTimeout(updateTime, 1000);

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
          fps_audio.unmute();
          // console.log("time signal - unmuted");
        } 
        else {
          button.innerHTML = "SOUND OFF";
          fps_audio.mute();
          // console.log("time signal - unmuted");
        }
        return 0;
}

function evaluatePip(s, lastPip) {
  var interval = document.getElementById("pipIntervalInput").value;
  if((s % interval-5 == 0) && (s > lastPip+5 || lastPip == null)){
    return true;
  }
  else{return false;}
}

function playPips() {
  fps_audio.play();
  console.log("time signal - Pips now.");
  return 0;
}

