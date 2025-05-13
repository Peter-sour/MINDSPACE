// // src/components/ParticlesBackground.jsx
// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim"; // Lebih ringan dari full engine

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine); // Gunakan slim engine
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         particles: {
//           number: {
//             value: 80,
//             density: {
//               enable: true,
//               area: 800
//             }
//           },
//           color: { value: "#818cf8" },
//           shape: { type: "circle" },
//           opacity: { value: 0.3 },
//           size: { value: 3, random: true },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             outModes: { default: "out" }
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#818cf8",
//             opacity: 0.2,
//             width: 1
//           }
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "grab" },
//             onClick: { enable: true, mode: "push" },
//             resize: true
//           },
//           modes: {
//             grab: {
//               distance: 140,
//               links: { opacity: 0 }
//             },
//             push: { quantity: 4 }
//           }
//         },
//         detectRetina: true
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#818cf8"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
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
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#818cf8",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={options} />
  );
};

export default ParticlesBackground;
