import React, {Component} from 'react';
import Photo from './Photo';

function PhotoWall(props){
    return (
      <div>
      {props.posts.map((post, index) => <Photo key={index} post ={post} onRemovePhoto ={props.onRemovePhoto}/>)}
    </div>
    )
}
// class PhotoWall extends Component{
//   render(){
//     return (
//       <div>
//       {this.props.posts.map((post, index) => <Photo key={index} post ={post}/>)}
//     </div>
//     )
//   }
// }

export default PhotoWall
