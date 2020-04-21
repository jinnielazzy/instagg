import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="statge">
        <div className="heart"></div>
        <div>{this.props.likes ? this.props.likes.length : 0} Likes</div>
      </div>
    );
  }
}

export default Likes;