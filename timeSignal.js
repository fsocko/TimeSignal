var pips_audio = null;
var lastPipSecond = null;

function init(){
  toggleMute();
  updateTime();
}

function updateTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  if (h < 10) {h = "0" + h};
  if (m < 10) {m = "0" + m};
  if (s < 10) {s = "0" + s};
  document.getElementById('time').innerHTML =h + ":" + m + ":" + s;  
  setTimeout(updateTime, 900);

  if(evaluatePip()){
    lastPipSecond = today.getSeconds;
    playPips();
  }
}

function toggleMute() {
  var audio = document.getElementById("pip_audio");
  var button = document.getElementById("muteToggle");

  if (button.innerHTML === "SOUND OFF" && pips_audio.muted) {
    button.innerHTML = "SOUND ON";
    pips_audio.unmute();
    button.style.backgroundColor = "#009E2D"; 
    console.log("time signal - unmuted");
  } 
  else {
    button.innerHTML = "SOUND OFF";
    pips_audio.mute();
    button.style.backgroundColor = "#9e0b00";
    console.log("time signal - unmuted");
  }
  return 0;
}

function evaluatePip() {
  
  var interval_s = document.getElementById("pipIntervalInputS").value;
  var interval_m = document.getElementById("pipIntervalInputM").value;

  // if(((m) % interval_m == 0) && ((s+5) % interval_s == 0) && (s > lastPipSecond+5 || lastPipSecond == null)){
  //   return true;
  // }

  var today = new Date();
  var seconds = today.getSeconds();
  var minutes = today.getMinutes();
  
  var isLastPipMoreThan5 = 
    ((seconds >= lastPipSecond+5) || lastPipSecond == null);

  if ((isLastPipMoreThan5 == true) && ((seconds+5) % interval_s == 0)) {
        return true;
  }
  else{return false;}
}

function playPips() {
  pips_audio.play();
  console.log("time signal - Pips now.");
  return 0;
}

