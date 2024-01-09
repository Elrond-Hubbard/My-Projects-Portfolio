export default function ResumeCard() {
  return (
    <>
      <div className="mx-auto align-items-center col-10 col-xl-4">

      <a className="fs-5" href="/assets/resume.pdf" download="michael-marsolo-resume">Download resume</a>

        <h1>Michael James Marsolo</h1>
        <p>
          Full-stack web developer leveraging background in customer service and
          digital media to provide unique perspectives on how end-users interact
          with websites and software platforms. Earned a certificate in Full
          Stack Web Development from the UCF Coding Boot Camp. Innovative
          problem-solver who is passionate about developing apps with a focus on
          interactivity and accessibility. Strengths in creativity, teamwork,
          and building projects from ideation to execution.
        </p>

        <h1>Technical Skills:</h1>
        <p>
          JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
          Express, React, Node, Handlebars, jQuery, Bootstrap
        </p>

        <h1>Education</h1>

        <h4>Full Stack Web Development {`(Certificate)`}</h4>
        <p>University of Central Florida | Orlando, FL | 2023</p>

        <h1>Work Experience</h1>
        <h4>C's Family Diner</h4>
        <h4>2020-Present</h4>
        <p>
          Supervised staff, managed inventory, and executed company-wide
          decisions in a fast-paced, high-energy family dining restaurant.{" "}
        </p>
        <ul>
          <li>
          Configured POS systems at 4 locations to improve ticket times and staff efficiency.
          </li>
          <li>
            Coordinated with food distributors to ensure accurate inventory
            deliveries in a timely manner.
          </li>
          <li>
            Onboarded new candidates and created training guides to improve
            employee performance.
          </li>
        </ul>
      </div>
    </>
  );
}
