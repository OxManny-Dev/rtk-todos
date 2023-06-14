import { useSelector } from 'react-redux';


const Whatever = () => {


  const { todos } = useSelector(({todos}) => todos);


  return (
    <div>
      <h1>Hello World</h1>
      <h2>He be todos state away from Todo App</h2>
      {
        todos.length === 0 ?
          <h1>Make some todos.</h1>
          :
          <ul>
            {
              todos.map((todo, index) => {
                return <li key={index}>{todo}</li>
              })
            }
          </ul>
      }
    </div>
  );
};

export default Whatever;