import TodoApp from "./TodoApp";
//  A component
//  A functional component is a function that returns html
//  when returning html, there must only be 1 parent element
import {useState} from 'react';



const App = () => {
  const [showTodoApp, setShowTodoApp] = useState(true);

  return (
    <div>
      <button
        onClick={() => setShowTodoApp(!showTodoApp)}
      >
        {showTodoApp ? 'Hide' : 'Show'} todo app
      </button>
      {
        showTodoApp ?
          <TodoApp/>
          :
          null
      }
    </div>
  );
};


export default App;
