//  props can only be passed down, they dont travel up
import {useState, Component} from "react";

// Hooks are a way to add state to a functional component
// hooks always start with the word "use"
// useState is a function that returns an array with 2 elements
// it takes 1 argument, what default state should be
// the first element in the array is the value we pass into useState
// the 2nd element is a function for updating the value of the first element

// In React, if we want UI to update/"re-render"
//  we need to trigger a "state" change
class FavoriteThings extends Component {
  //  constructor 1st
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // componentWillMount
  // this is called before render but after constructor or "2nd"
  // we used to use this before all the time
  //  this is now bad practice
  // componentWillMount() {}
  // }

  //  life-cycle methods
  //  there is an order for when life-cycle methods are called


  //  this gets called after render
  //  this is where we make "side-effects" this replaces componentWillMount
  // componentDidMount() {
  // }

  // gets called only when component leaves the page
  //  component is about to disappear from the page

  // componentWillUnmount() {
  // }

  // componentDidUpdate gets called whenever state or props are updated in a component

  //  render is called after componentWillMount
  render() {
    return (
      <div>
        <h1>My name is {this.props.name.toUpperCase()}</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({count: this.state.count + 1});
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (this.state.count - 1 < 0) {
              return;
            }
            this.setState({count: this.state.count - 1});
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

// const FavoriteThings = (props) => {
//
//   const [count, setCount] = useState(69420);
//
//
//
//   return (
//     <div>
//       <h1>My name is {props.name.toUpperCase()}</h1>
//       <p>{count}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           if (count - 1 < 0) {
//             return;
//           }
//           setCount(count - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

export default FavoriteThings;