export default function ResumeCard() {
  return (
    <>
      <div className="mx-auto align-items-center col-10 col-xl-4">

        <a className="fs-5" href="/assets/Michael_Marsolo_Webdev_Resume.pdf" download="michael-marsolo-resume">Download resume</a>

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

        <h1>Work Experience</h1>
        <h4>Trazi Ventures</h4>
        <h4>Aug 2024 - Present</h4>
        <p>
        Collaborated with a diverse cross-disciplinary team to design and develop user-friendly 
        interfaces, ensuring seamless functionality and alignment with the goals of 
        various departments.{" "}
        </p>
        <ul>
          <li>
            Migrated <span><a href="https://checkpeople.com">checkpeople.com</a></span>'s legacy 
            React/Laravel codebase toa modern Vue/Nuxt architecture, resulting in an 11% increase 
            in conversions and significantly improved page load speeds.
          </li>
          <li>
            Integrated third-party payment APIs to process hundreds of secure transactions per month.
          </li>
          <li>
            Wrote a novel trackign system in a Laravel-based CRM to accurately monitor CSR activity.
          </li>
          <li>
            Collaborated with the marketing team to build pixel-perfect recreations of mockup designs.
          </li>
        </ul>
        <h4>Gold Tone Music Group</h4>
        <h4>Feb 2024 - Aug 2024</h4>
        <p>
          Developed, debugged, and maintained six company websites and multiple internal tools.{" "}
        </p>
        <ul>
          <li>
            Sole author of <span><a href="https://omebanjos.com">omebanjos.com</a></span>, 
            a full-stack storefront built with React, Apache, and MySQL that facilitated over $80,000 in 
            sales during its opening week.
          </li>
          <li>
            Designed and implementeed a RESTful API for a customer feedback widget and dashboard, 
            resulting in a 35% increase in sales leads.
          </li>
          <li>
            Refactored a package-sorting algorithm to save 20% in company shipping overhead.
          </li>
        </ul>

        <h1>Education</h1>

        <h4>Full Stack Web Development {`(Certificate)`}</h4>
        <p>University of Central Florida | Orlando, FL | 2023</p>
      </div>
    </>
  );
}
