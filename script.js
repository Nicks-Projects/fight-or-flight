window.onload = function() {
  const slideRect = document.getElementById('slideRect');
  const blackScreen = document.getElementById('blackScreen');
  const whiteFade = document.getElementById('whiteFade');
  const mainScreen = document.getElementById('mainScreen');
  const titleText = document.getElementById('titleText');
  const startBtn = document.getElementById('startBtn');

  // 1. Animate rectangle sliding in quickly then decelerate
  setTimeout(() => {
    slideRect.style.transform = 'translateX(0)';
  }, 200);

  // 2. After 3 seconds, slide out quickly
  setTimeout(() => {
    slideRect.style.transition = 'transform 0.3s cubic-bezier(0.9,0,0.9,1)';
    slideRect.style.transform = 'translateX(100vw)';
  }, 3500);

  // 3. Fade to white screen
  setTimeout(() => {
    whiteFade.style.opacity = 1;
  }, 3900);

  // 4. Fade out white
  setTimeout(() => {
    whiteFade.style.opacity = 0;
    blackScreen.classList.add('hidden');
  }, 4600);

  // 5. Show main screen with background and animated text/button
  setTimeout(() => {
    mainScreen.classList.remove('hidden');
    setTimeout(() => {
      titleText.style.opacity = 1;
      titleText.style.transform = 'translateX(0)';
    }, 100);
    setTimeout(() => {
      startBtn.style.opacity = 1;
      startBtn.style.transform = 'scaleX(1)';
    }, 1000);
  }, 5000);

  // 6. Redirect when start button is clicked
  startBtn.onclick = function() {
    window.location.href = "LVLSLCT.html"; // Make sure to create this page!
  };
};
