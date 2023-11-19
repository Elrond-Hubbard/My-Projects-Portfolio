import Project from "../components/Project";

export default function Work() {
  return (
    <>
      <section>
        <div id="projects">
          <Project
            project="project-1"
            name="Remote Health Monitor"
            url=""
            description="description"
          />
          ;
          <Project
            project="project-2"
            name="NASA Image Browser"
            url=""
            description="description"
          />
          ;
          <Project
            project="project-3"
            name="jSynth Synthesizer"
            url=""
            description="description"
          />
          ;
          <Project
            project="project-4"
            name="Project Name"
            url=""
            description="description"
          />
          ;
        </div>
      </section>
    </>
  );
}
