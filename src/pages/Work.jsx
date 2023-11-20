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
      description:
        `jSynth is a musical instrument built with JavaScript 
        and the Tone.js library. Users can record and play back 
        note sequences, manipulate a full suite of synth parameters, 
        and adjust playback tempo to their liking.  
        This work-in-progress will soon allow users to compose, 
        collaborate, and perform remotely over an Express server connection.`,
      demoLink: "https://elrond-hubbard.github.io/jSynth2/",
      codeLink: "https://github.com/Elrond-Hubbard/jSynth2",
    },
    {
      name: "NASA Browser",
      image: "/assets/mars.png",
      description: "Test",
      demoLink: "https://chrisdehaan.github.io/Team-SCCRM/mars-rover.html",
      codeLink: "",
    },
    {
      name: "Coming Soon",
      image: "",
      description: "",
      demoLink: "",
      codeLink: "",
    },
  ];

  return (
    <>
      <section className="">
        <div className="py-5 d-flex justify-content-evenly">
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