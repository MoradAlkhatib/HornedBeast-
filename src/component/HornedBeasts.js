import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
class HornedBeasts extends Component {
  constructor() {
    super();
    this.state = {
      fav: 0,
      imageClass: true,
    };
  }
  increase = () => {
    this.setState({
      fav: this.state.fav + 1,
    });

    this.props.fromChild(
      this.props.best.title,
      this.props.best.description,
      true
    );
  };
  setIsShown = (name) => {
    this.setState({
      imageClass: name,
    });
  };

  render() {
    return (
      <div className='counter'>
        <Col xs={6} md={4}>
          <Image
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
            className={this.state.imageClass ? 'imageSize1' : 'imageSize2'}
            onClick={this.increase}
            src={this.props.best.image_url}
            rounded
          />
        </Col>
      </div>
    );
  }
}

export default HornedBeasts;

//<h2>{this.props.best.title}</h2>

// <p>{this.props.best.description}</p>
