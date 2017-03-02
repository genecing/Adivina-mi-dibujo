import React from 'react';
import Store from '../stores'


class Log extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      posts: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    this.setState(this._fetchState());

    //Se dice que metodo debe llamar cuando cambie algo en Store
    Store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this._fetchState());
  }

  _fetchState() {
    return {
      posts: Store.getPosts()
    };
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.posts.map(function(post){
            return(
              <li id="posts_list">
                <b>{post.name}:</b>
                {post.text}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Log;