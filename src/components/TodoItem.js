import { useContext } from "react"
import { TodosContext } from "../views/home";
import { Card } from "react-bootstrap"



function TodoItem(props) {
  const dispatch = useContext(TodosContext)
  return (
//     <li className={props.completed ? "completed" : ""}>
//       <div className="view">
//         <input
//           className="toggle"
//           type="checkbox"
//           checked={props.completed}
//           onChange={(event)=> dispatch({type: "TOGGLE_COMPLETE", payload: props.id})}
//         />
//         <label>{props.title}</label>
//         <button className="destroy" onClick={(event)=> dispatch({type: "DELETE_TODO", payload: props.id})} />
//       </div>
//     </li>
//   );
// }
      [
  'Primary',
].map((variant, idx) => (
  <div id="card-todo-container">
  <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Body className="view">
      <li className={props.completed ? "completed" : ""}>
      <Card.Title> {props.title} </Card.Title>
      <Card.Text>
       <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event)=> dispatch({type: "TOGGLE_COMPLETE", payload: props.id})}
        />
        <button className="destroy" onClick={(event)=> dispatch({type: "DELETE_TODO", payload: props.id})} />
      </Card.Text>
      </li>
    </Card.Body>
  </Card>
  </div>
))
  );
}
export default TodoItem;