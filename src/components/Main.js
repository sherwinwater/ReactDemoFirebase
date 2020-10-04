import React, { Component } from 'react';
import Title from './Title';
import List from './List';
import PhotoWall from './PhotoWall';

const posts = [{
  id: "0",
  description: "landscripe",
  imageLink: "https://images.pexels.com/photos/4558550/pexels-photo-4558550.jpeg"
}, {
  id: "1",
  description: "hello kitty",
  imageLink: "https://images.pexels.com/photos/3340298/pexels-photo-3340298.jpeg"
}, {
  id: "2",
  description: "jim",
  imageLink: "https://images.pexels.com/photos/4517375/pexels-photo-4517375.jpeg"
}]

const title = "photowall";

class Main extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
    this.removePhoto = this.removePhoto.bind(this)
    console.log('construct')
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description)
    this.setState((state) => ({
      posts: state.posts.filter(post => post != postRemoved)
    }))
  }

  componentDidMount(){
    const data = SimulateFetchFromDatabase()
    this.setState({
      posts:data
    })
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('update1')
    console.log(prevState.posts)
    console.log(this.state)
  }

  render() {
    console.log('render')
    return <div>
      <Title title={title} />
      <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
    </div>

  }
}

  function SimulateFetchFromDatabase() {
  return [{
    id: "0",
    description: "landscripe",
    imageLink: "https://images.pexels.com/photos/4558550/pexels-photo-4558550.jpeg"
  }, {
    id: "1",
    description: "hello kitty",
    imageLink: "https://images.pexels.com/photos/3340298/pexels-photo-3340298.jpeg"
  }, {
    id: "2",
    description: "jim",
    imageLink: "https://images.pexels.com/photos/4517375/pexels-photo-4517375.jpeg"
  }]
}


export default Main
