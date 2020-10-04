import React, { Component } from 'react';

function Photo(props) {
    const post = props.post;

    return <figure className="figure">
      <img className="image" src={post.imageLink} alt={post.description}></img>
      <figcaption><p>{post.description}</p></figcaption>
      <button onClick={()=>{
          props.onRemovePhoto(post);
      }}>Remove</button>
    </figure>
}
// class Photo extends Component {
//   render() {
//     const post = this.props.post;

//     return <figure className="figure">
//       <img class="image" src={post.imageLink} alt={post.description}></img>
//       <figcaption><p>{post.description}</p></figcaption>
//       <button>hello</button>
//     </figure>
//   }
// }

export default Photo
