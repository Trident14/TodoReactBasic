import "./App.css"
export const Task = (props) => {
    return (
      <div
        className="task"
    
      >
        <h1 style={{ color: props.completed ? "green" : "black" }}>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}> ✓ </button>
        <button onClick={() => props.deleteTask(props.id)}> X </button>
      </div>
    );
  };