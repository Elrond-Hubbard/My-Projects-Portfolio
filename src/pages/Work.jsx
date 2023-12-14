import Project from "../components/Project";

export default function Work() {
  const projects = [
    {
      name: "SCCRM Healthcare",
      image: "/assets/surgeon.png",
      description: `Full-stack project built with MySQL and Socket.io. 
      The app is focused on real-time display of hospital 
      patient vitals data. 
      The site includes SMS alert functionality and a dynamic 
      pulse-oximetry display. 
      Login: 5555,  Password: 5. 
      Use the /patsim endpoint to manipulate vitals.`,
      demoLink: "https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/",
      codeLink: "https://github.com/Elrond-Hubbard/Team-SCCRM-2",
    },
    {
      name: "jSynth Synthesizer",
      image: "/assets/synth.png",
      description: `jSynth is a musical instrument built with JavaScript 
        and the Tone.js library. Users can record and play back 
        note sequences, manipulate a full suite of synth parameters, 
        and adjust playback tempo to their liking.  
        This work-in-progress personal project will soon allow users to compose, 
        collaborate, and perform remotely over an Express server connection.`,
      demoLink: "https://elrond-hubbard.github.io/jSynth2/",
      codeLink: "https://github.com/Elrond-Hubbard/jSynth2",
    },
    {
      name: "Programon Palace",
      image: "/assets/programon.png",
      description: `Prográmon Palace leverages MongoDB and Express to support discrete user accounts and card trading features, and
      React's state management system for complex realtime interactions. The project aims to establish a scaleable baseline for what 
      could eventually be built into an entertaining and market-ready gaming product. Login: "AshKetchum", Password: "missingno"`,
      demoLink: "https://programon-palace-c417e58495b0.herokuapp.com/",
      codeLink: "https://github.com/Bunde20/Team-SCCRM-3",
    },
    {
      name: "NASA Browser",
      image: "/assets/mars.png",
      description: `Developed and deployed the Mars Rover page for this image browsing project. 
      The site calls various NASA API endpoints to deliver thousands of astronomical images to the user. 
      The page leverages jQuery to simplify DOM traversal and event handling. Users can search for images 
      taken on specific dates in a rover's mission, and even filter the results based on which on-board 
      camera took the photo.`,
      demoLink: "https://chrisdehaan.github.io/Team-SCCRM/mars-rover.html",
      codeLink: "https://github.com/ChrisDeHaan/Team-SCCRM",
    },
  ];

  return (
    <>
      <section className="">
        <div className="py-5 d-flex flex-wrap justify-content-evenly">
          {projects.map((project) => {
            return (
              <Project
                name={project.name}
                image={project.image}
                description={project.description}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
