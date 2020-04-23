import tilt from './tilt';

const initTilt = () => {
  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 3,
  });
};

export default initTilt;
