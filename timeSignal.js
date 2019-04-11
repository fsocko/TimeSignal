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

  if(evaluatePip(today, getInterval())){
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
    console.log("time signal - muted");
  }
  return 0;
}

//date, array
exports.evaluatePip = function(today, intervals) {

  //isLastPipMoreThan5 : pip sound is 5s, do not allow pips to overlap.
    var isLastPipMoreThan5 = (lastPipSecond == null || (today - lastPipSecond > 5000));
    if(!isLastPipMoreThan5){
      return false;
    }

  // var correctSeconds = null;
  // if(intervals.intervalM <= 0 || intervals.intervalM == null) {
  //   correctSeconds = (((today.getSeconds()+5) % intervals.intervalS) == 0);
  // }
  // else if(intervals.intervalM > 0) {
  //   correctSeconds = (((today.getSeconds()+5) + intervals.intervalM * 60) % intervals.intervalS == 0);
  // }

  // if(!Boolean(correctSeconds)) {
  //   console.log("evaluate pip - seconds not correct: " + 
  //   "todayS:" + today.getSeconds() + 
  //   " Mod: "  + ((today.getSeconds()) % (intervals.intervalS -5)));
  //   return false;
  // }

  lastPipSecond = Date.now();
  return true;

//  var correctMinutes = (intervals.getMinutes -1 == today.getMinutes())
}


function getInterval(){
  
  var guiIntervalS = document.getElementById("pipIntervalInputS").value;
  var guiIntervalM = document.getElementById("pipIntervalInputM").value;

  var intervalArray = {
    intervalS:guiIntervalS,
    intervalM:guiIntervalM
  };
  return intervalArray;
}

function playPips() {
  pips_audio.play();
  console.log("time signal - Pips now.");
  return 0;
}

