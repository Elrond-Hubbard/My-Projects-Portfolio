import Project from "../components/Project";

export default function Work() {
  const projects = [
    {
      name: "Remote Health Monitor",
      image: "../public/assets/surgeon.png",
      description:
        "Team project focused on real-time display of hospital patient vitals data. The site is powered by a MySQL database with relational models used to manage login credentials, patient information, and vital signs. We also implemented WebSocket functionality and developed a dynamic pulse-oximetry display.",
    },
    {
      name: "jSynth Synthesizer",
      image: "../public/assets/synth.png",
      description:
        "jSynth is a musical instrument built with JavaScript and the Tone.js library.",
    },
    {
      name: "NASA Image Browser",
      image: "",
      description: "",
    },
    {
      name: "",
      image: "",
      description: "",
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
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
