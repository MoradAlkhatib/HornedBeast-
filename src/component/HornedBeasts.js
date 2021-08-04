import React, { Component } from 'react';
// import Image from 'react-bootstrap/Image';
import { Card, Button } from 'react-bootstrap';
class HornedBeasts extends Component {
  constructor() {
    super();
    this.state = {
      fav: 0,
      vote: 0,
      imageClass: true,
    };
  }
  increase = () => {
    this.props.fromChild(
      this.props.best.title,
      this.props.best.description,
      this.props.best.image_url
    );
  };
  setIsShown = () => {
    this.setState({
      fav: this.state.fav + 1,
    });
  };

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Title
          style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}
        >
          {this.props.best.title}
        </Card.Title>
        <Card.Img
          variant='top'
          src={this.props.best.image_url}
          className='imageSize2'
          onClick={this.increase}
        />
        <Card.Body>
          <Card.Text style={{ fontSize: '15px' }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <footer style={{ display: 'flex' }}>
            <Button
              variant='primary'
              onClick={this.setIsShown}
              style={{ marginRight: '10px' }}
            >
              Vote
            </Button>
            <p>
              Favorite: {this.state.fav} <span>&#9825;</span>
            </p>
          </footer>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;

//<h2>{this.props.best.title}</h2>

// <p>{this.props.best.description}</p>
{
  /* <div className='counter'>
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
</div> */
}
