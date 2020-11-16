import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200w.gif?cid=ecf05e475v9y3vz3w75t8q3q2mq8pmf0l86ty89mrixeo7kj&rid=200w.gif`;
    return(
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
