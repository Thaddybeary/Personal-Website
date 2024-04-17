const particlesConfig = {
  background: {
      color: {
          value: "#000000"  // Dark blue background
      }
  },
  fpsLimit: 120,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push"  // Add new particles when clicking
          },
          onHover: {
              enable: true,
              mode: "bubble"  // Move particles away on mouse hover
          }
      },
      modes: {
          push: {
              quantity: 4
          },
          repulse: {
              distance: 200,
              duration: 0.4
          },
          bubble: {
            distance: 200,
            size: 20,
            duration: 2
          },
      }
  },
  particles: {
      color: {
          value: "#ffffff"  // White particles
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1
      },
      move: {
          direction: "none",
          enable: true,
          outMode: "bounce",  // Bounce off the edges of the canvas
          random: true,
          speed: 6,
          straight: false
      },
      number: {
          density: {
              enable: true,
              area: 1200  // Density of particles
          },
          value: 80  // Number of particles
      },
      opacity: {
          value: 0.5
      },
      shape: {
          type: "circle"  // Shape of the particles
      },
      size: {
          value: 3,
          random: true,
          anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
          }
      }
  },
  detectRetina: true
};

export default particlesConfig;