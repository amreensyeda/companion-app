
function DashboardContent({ removedTasks }) {
    return (
      <ul>
        {removedTasks.map((removedTask) => (
           <li key={removedTask.task}>
            <div className="tasks-container" >
            <h3 className="tasks-heading">{removedTask.task}</h3>
            <img src={removedTasks[removedTask.image]} className="tasks-image"  />
            <button className="tasks-done">Task Completed</button>
          </div>
          </li>
        ))}
      </ul>
      
    );
  }
  
  export default DashboardContent;
  