import { useState} from "react";
import { useSelector } from 'react-redux';

//  custom hooks can be reused in other places of the app
//  that might require the fetching of todos
//  most of the time, it's useful for reuseable state logic
//  that you might use in different of the application

//  this is all business logic
const useTodoApp = () => {


  const [todoInput, setTodoInput] = useState("");


  // state = the whole store
  const {todos} = useSelector(({ todos }) => todos);
  // console.log(todos);



  //  useEffect is many life cycle methods in 1
  //  useEffect takes 2 arguments
  //  a function to call and normally an array of dependencies
  //  whenever an element in the array of dependencies changes, the function is called again
  //  the function inside of useEffect will only get fired "once" when the component is mounted
  //  mounted means that "return" has already been called. "return" means html was already rendered

  // //  if any of the elements in the array or 2nd parameter changes, this function is called again
  // useEffect(() => {
  //   console.log('inside useEffect');
  //   // IIFE -  Immediately Invoked Function Expression
  //   (async () => {
  //     const res = await fetch('https://dummyjson.com/todos');
  //     const data = await res.json();
  //     setTodos(data.todos);
  //   })();
  //
  //
  //   //  componentWillUnmount lifeCycle method equivalence
  //   //    when we want to do something when the component is unmounted, we return a function from useEffect
  //   //   whatever is inside of that callback function will be called when the component is unmounted or "leaves the page"
  //   //   Maybe this page came with modals  you want those modals to close when the user leaves the page
  //   //   useful for resetting state to default values when the component leaves the page
  //   //   when you want realtime subscriptions
  //   //   "realtime" meaning that when 2 people are viewing the page at the same time from 2 different machines
  //   //    when a user makes 1 update, both users see the update without refreshing the page
  //   //   subscribe and unsubscribe to a realtime subscription
  //   return () => {
  //     console.log('inside of useEffect return value');
  //   }
  // }, []);

  //  if any of the elements in the array or 2nd parameter changes, this function is called again

  return {
    todos,
    todoInput, setTodoInput,
  };

};

export default useTodoApp;