import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const todos = [new Todo('Learn react'), new Todo('Learn typescript')]
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
