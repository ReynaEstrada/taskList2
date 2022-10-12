import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import TaskList from './components/taskList';
function App() {
  return (
    <div className='App-TaskList'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='task-list-main'>
        <h1>My TaskList</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
