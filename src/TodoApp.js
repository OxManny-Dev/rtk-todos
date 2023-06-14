import useTodoApp from "./useTodoApp";
import { useDispatch } from 'react-redux';
import {addTodo} from "./actions/todoActionCreators";

//  in functional components, you cannot create "side effects"
//  side effects are things like: changing the DOM, making API calls, updating state is another one.
//  in order to create "side effects" in a functional component, we make use of "hooks"

//  this is nothing but view logic
const TodoApp = () => {

  const dispatch = useDispatch();


  //
  const {
    todos,
    todoInput, setTodoInput,
  } = useTodoApp();

  //  action creator > action > dispatch > reducers > store

  return (
    <div>
      <h1>Manny is cool</h1>

      <input
        type="text"
        onChange={(event) => setTodoInput(event.target.value)}
        value={todoInput}
        placeholder='Enter a todo'
      />
      <button
        onClick={() => {
          dispatch(addTodo(todoInput)); // { type: 'ADD_TODO', payload: 'some input'}
          setTodoInput("");
        }}
      >
        Add Todo
      </button>
      {
        todos.length === 0 ?
          <p>No todos to display</p>
          :
          <ul>
            {
              todos.map((todo, index) => {
                return (
                  <li key={index}>
                    <p>{todo}</p>
                    <p>Not completed</p>
                  </li>
                );
              })
            }
          </ul>

      }
    </div>
  );
};

// constructor  => componentWillMount => render => componentDidMount  => updateLifecycleMethods

// componentWillUnmount  this gets called whenever the component leaves the page

export default TodoApp;