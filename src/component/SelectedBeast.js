import React, { Component } from 'react';
import { Modal, Button ,Image } from 'react-bootstrap';
class SelectedBeast extends Component {
  constructor() {
    super();
    this.state = {
      setShow: true,
      fav: 0,
    };
    // let a=this.props.beatsShow.toString();
  }

  makeShow = (value) => {
    this.setState({
      setShow: value,
    });
    console.log(value);
    this.props.beatsUnShow();
  };
  makeClose = () => this.makeShow(false);
  increase = () => {
    this.setState({
      fav: this.state.fav + 1,
    });
  };
  render() {
    return (
      <>
        {/* <Button variant='primary' onClick={() => this.makeShow(true)}>
          Launch static backdrop modal
        </Button> */}

        <Modal
          show={this.state.setShow}
          onHide={this.makeClose}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>{this.props.beatsTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modelBody'>
            {' '}
            <Image onClick={this.increase} src={this.props.beatsUrl} rounded className='imageSize3'/>
            <br/>
            {this.props.beatsDescriptions}
          </Modal.Body>
          <Modal.Footer>
            {/* <p>
              Favorite: {this.state.fav} <span>&#9825;</span>
            </p>
            <Button variant="success" size="lg" onClick={this.increase}>
              Vote
            </Button> */}
            <Button
              variant="danger"
              size="lg"
              onClick={() => this.makeShow(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
// beatsUrl
export default SelectedBeast;
