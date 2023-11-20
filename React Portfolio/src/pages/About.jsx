import CurrentProjectEmbed from "../components/currentProjectEmbed";

export default function About() {
  const me = {
    fullName: "Michael James Marsolo",
    title: "FULL-STACK DEVELOPER",
    message:
      "Take a look at my work! Feel free to reach out regarding projects and hiring.",
    description:
      "I like building clean, efficient, user-friendly applications with:",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "MySQL",
      "Bootstrap",
    ],
  };

  return (
    <section className="col-12 d-flex flex-wrap flex-row-reverse" id="about">
      <div className="col-12 col-xl-6">
        <img className="w-100" id="octo" src="/assets/octo.png" />
      </div>
      <div
        className="mb-5 d-flex justify-content-center flex-column pt-5 col-12 col-xl-4"
        id="aboutMe"
      >
        <h2>{me.fullName}</h2>
        <h1>{me.title}</h1>
        <p className="py-1 fs-4">{me.description}</p>
        <div className="py-4 d-flex flex-wrap col-11">
          {me.tech.map((item) => {
            return <h4 className="col-4">{item}</h4>;
          })}
        </div>
        <p className="py-1 fs-4">{me.message}</p>
        <h3>CURRENTLY BUILDING:</h3>
        <div className="ratio ratio-16x9">
          <CurrentProjectEmbed />
        </div>
      </div>
    </section>
  );
}
