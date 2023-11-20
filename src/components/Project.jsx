import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <div id="projectCard" className="mt-5 d-flex flex-column col-2">
      <h3 className="display-6 text-center">{props.name}</h3>
      <img className="img-fluid" src={props.image} />
      <p className="fs-5 p-2">{props.description}</p>
      <div>{props.tech}</div>
      <div className="mt-auto p-2 d-flex justify-content-evenly">
        <a href={props.demoLink} target="_blank" className="btn btn-large btn-light">DEMO</a>
        <a href={props.codeLink} target="_blank" className="btn btn-large btn-dark">CODE</a>
      </div>
    </div>
  );
}
