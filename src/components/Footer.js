import { Link } from "react-router-dom"

function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.itemsLeft}</strong> item(s) left
      </span>
      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={event=>props.clearComplete(event)}>Clear completed</button>
    </footer>
  );
}

export default Footer;