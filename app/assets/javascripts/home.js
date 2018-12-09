const START_MAX_SIZE = 10;

// BUG: console logs are useful for debugging, but slow down the app should be
// controlled by a flag.

function addStar() {
  const bg = document.getElementById('star-bg');

  const star = document.createElement('div');
  const starStyle = {
    // BUG: No need to get bg.offset every time.
    top: `${Math.random() * bg.offsetHeight}px`,
    left: `${Math.random() * bg.offsetWidth}px`,
    size: `${Math.random() * START_MAX_SIZE}px`,
  }
  star.classList.add('star');

  star.style.top = starStyle.top;
  star.style.left = starStyle.left;
  star.style.width = starStyle.size;
  star.style.height = starStyle.size;
  bg.appendChild(star);
}

function animateStars() {
  // BUG: Does this animation finish within a single animation frame?
  const stars = document.querySelectorAll('.star');
  stars.forEach((star) => {
    // Change star style.
    const size = `${Math.random() * START_MAX_SIZE}px`;
    star.style.width = size;
    star.style.height = size;
    star.style.opacity = Math.random();
    // Move the star.
    const newTop = Number(star.style.top.split('px')[0]) + 1;
    if (newTop < window.innerHeight) {
      star.style.top = `${newTop}px`;
    } else {
      // Remove star when is out of screen.
      star.parentNode.removeChild(star);
      // Add a new star.
      addStar();
    }
  })
}

function run() {
  console.time('home.run')
  console.debug('home.addStar started');

  const bg = document.getElementById('star-bg');
  // I really wish to have many more stars, something like
  // `Math.floor(Math.sqrt(bg.offsetHeight * bg.offsetWidth))`, but it hurts the
  // performance :(
  const numOfStars =
      Math.floor(Math.sqrt(bg.offsetHeight));
  // BUG: can replace lodash with native code.
  _.times(numOfStars, addStar);

  // BUG: using setInterval to control animation is not recommended.
  // BUG: the same animation effect can be done with pure CSS.
  setInterval(animateStars, 100);

  console.debug('home.run finished');
  console.timeEnd('home.run');
}

document.addEventListener('DOMContentLoaded', run, false);
