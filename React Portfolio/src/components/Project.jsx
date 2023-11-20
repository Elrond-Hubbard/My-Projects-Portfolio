export default function Project(props) {
  return (
    <div className="col-2 border">
      <h3 className="text-center">{props.name}</h3>
      <img className="img-fluid" src={props.image} />
      <p className="fs-5 p-2">{props.description}</p>
      <div>{props.tech}</div>
      <div className="p-2 d-flex justify-content-evenly">
        <button className="btn btn-large btn-success">DEMO</button>
        <button className="btn btn-large btn-success">CODE</button>
      </div>
    </div>
  );
}
