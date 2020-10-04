import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// exercise 1
const tasks = ['trash', 'shovel driveway', 'walk the dog'];

const element = React.createElement('ol', null,
  tasks.map((task, index) => React.createElement('li', { key: index }, task)));

const element2 =
  <section>
    <h1>hello world</h1>
    <ol>
      {tasks.map((task, index) => <li key={index}> {task} </li>)}
    </ol>
  </section>

// ReactDOM.render(element2, document.getElementById('root'));

// exercise 2
// class List extends Component{
//   render(){
//     return (
//       <ol>
//       {this.props.tasklist.map((task, index) => <li key={index}> {task} </li>)}
//     </ol>
//     )
//   }
// }

// class Title extends Component{
//   render(){
//     return (
//       <h1>{this.props.title}</h1>
//     )
//   }
// }

// class Main extends Component{
//   render(){
//     return <div>
//       <Title title={'todos'}/>
//       {/* <List /> */}
//       {/* <List /> */}
//       <List tasklist={['mow the lawn','dog']}/>
//       <List tasklist={['hose the driveway','finish the laundry']}/>
//     </div>
    
//   }
// }

// ReactDOM.render(<Main />, document.getElementById('root'));


serviceWorker.unregister();
