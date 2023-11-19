

export default function Project(props) {
  return (
    <a className={props.project} href={props.url}>
      <div id="projectCard">
        <h3>
          {props.name}
          <p>{props.description}</p>
        </h3>
      </div>
    </a>
  );
}
