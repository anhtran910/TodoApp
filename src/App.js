import React, { Component } from 'react';
// import FirstComponent  from './components/learning-examples/FirstComponent'
// import SecondComponent  from './components/learning-examples/SecondComponent'
// import ThirdComponent  from './components/learning-examples/ThirdComponent'
// import Counter from './components/counter/Counter';
// import logo from './logo.svg';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';
//import { withRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
         {/*<Counter/>*/}
         <TodoApp/>
         
      </div>
    );
  }
}

// class LearningComponents extends Component{
//   render() {
//     return (
//       <div className="App">
//         Hello world
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//         <ForthComponent></ForthComponent>
//       </div>
//     );
//   }
// }




//Class component



function ForthComponent()  {
  
  return (
    <div className="forthComponent">
      Forth Component
    </div>
  );

}

export default App;