function updateUTCTime(){
  const utcTimeElement = document.getElementById('utc-time');
  utcTimeElement.textContent = new Date().toUTCString();
}
updateUTCTime();
setInterval(updateUTCTime, 1000);