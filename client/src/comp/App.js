import './App.css';
import Input from './Input';
import List from './List';

function App() {
  const url = 'localhost:3005/todo';

  return (
    <div className="App">
      <h1>My todo list</h1>
      <Input />
      <List />
    </div>
  );
}

export default App;
