import anime from 'animejs';

export const animateSideDrawer = () =>
  anime({
    targets: '.left-side-drawer',
    left: '0',
    easing: 'easeOutQuart',
    duration: 500,
  });

export const animateOutSideDrawer = () =>
  anime({
    targets: '.left-side-drawer',
    left: '-131px',
    easing: 'easeOutQuart',
    duration: 500,
  });

export const hideHeroIntroContent = () =>
  anime({
    targets: '.hero-intro-content',
    clipPath: 'circle(0% at 100% 0)',
    easing: 'easeOutQuart',
    duration: 1000,
  });

export const showHeroIntroContent = () =>
  anime({
    targets: '.hero-intro-content',
    clipPath: 'circle(200% at 100% 0)',
    easing: 'easeOutQuart',
    duration: 1000,
  });

// min-width: 400px;
// min-height: 400px;
export const openReadMoreBox = () =>
  anime({
    targets: '.more-info-box',
    // keyframes: [
    //   { clipPath: 'polygon(4% 5%, 88% -4%, 91% 103%, -4000% 41%, 90% 88%, -10% 90%)' },
    //   { clipPath: 'polygon(0% 0%, 100% 0%, 100% 1000%, 100% 100%, 100% 100%, 0% 100%)' },
    // ],
    borderRadius: [
      '1% 1% 1% 1% / 46% 48% 47% 50%',
      '5% 5% 5% 5% / 46% 48% 47% 50%',
      '15% 15% 15% 15% / 46% 48% 47% 50%',
      '12% / 46% 48% 47% 50%',
      '9% / 46% 48% 47% 50%',
      '6% / 46% 48% 47% 50%',
      '3% / 46% 48% 47% 50%',
      '0',
    ],
    translateX: [100, 0],
    height: '70vh',
    bottom: '-86px',
    width: '35vw',
    duration: 400,
    easing: 'linear',
    complete: function () {
      anime({
        targets: '.more-info-box-content',
        translateX: ['-2vw', 0],
        opacity: [0, 1],
        duration: 700,
        easing: 'linear',
      });
    },
  });

export const hideReadMoreBox = () =>
  anime({
    targets: '.more-info-box-content',
    translateX: '-2vw',
    opacity: 0,
    duration: 300,
    easing: 'linear',
    complete: function () {
      anime({
        targets: '.more-info-box',
        height: '0',
        bottom: '8px',
        width: '0',
        duration: 300,
        easing: 'linear',
      });
    },
  });
