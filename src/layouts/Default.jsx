import Nav from "components/Nav";
import "./Default.modules.scss";

export default function Default(props) {
  return (
    <>
      <Nav />
      <div className="default-layout container-fluid">{props.children}</div>
    </>
  );
}
