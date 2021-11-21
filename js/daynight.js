var currentTime = new Date().getHours();

function timeCheck() {
  if (currentTime > 20 || currentTime < 6) {
    //document.documentElement.classList.add('night');
  }
}

timeCheck();