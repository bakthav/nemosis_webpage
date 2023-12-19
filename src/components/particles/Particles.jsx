import Particles from 'react-particles-js';

const Particle = () => {
  const particlesConfig = {
    particles: {
      number: {
        value: 80,
      },
      size: {
        value: 3,
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    },
  };

  return (
    <div>
      <Particles params={particlesConfig} style={{ position: 'absolute', width: '100%', height: '100%' }} />

      <h1>Hello, Particles!</h1>
    </div>
  );
};

  export default Particle;