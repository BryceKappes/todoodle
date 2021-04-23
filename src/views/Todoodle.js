import Youtube from "../components/Youtube"
import "../App.css";
import DrawingBoard from 'react-drawing-board';
  
  function Todoodle(){
        
  return (
    <div className="todo-container">
      <div id="youtube">
        <Youtube/>
      </div>
      <div id="drawing-board">
        <DrawingBoard className="drawing-board"/>
      </div>
    </div>
  )
}

export default Todoodle;