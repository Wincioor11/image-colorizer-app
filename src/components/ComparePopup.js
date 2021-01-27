import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'

// import View from 'react-dom'
export class ComparePopup extends Component {
    
    render() {
        return (
            <Modal
                show={this.props.visible}
                onHide={this.props.onClose}
                style={{margin: 'auto'}}
                // variant="secondary"
                size="xl"     
                >
                <Modal.Header closeButton>Original vs Colorized</Modal.Header>
                <Modal.Body style={modalBodyStyle}>
                <img style={imgStyleCompare} 
                // hidden={this.props.loading}
                  alt=""
                  src={this.props.imageInput ? URL.createObjectURL(this.props.imageInput):null}
                  // width="640"
                  // height="480"
                />
                <img style={imgStyleCompare} 
                // hidden={this.props.loading}
                  alt=""
                  src={this.props.imageOutput ? URL.createObjectURL(this.props.imageOutput):null}
                  // width="640"
                  // height="480"
                />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        )
    }}

    const modalBodyStyle={
        padding: 0,
        width: "100%",
        // height: '76vh',
        // borderRadius: 40,
        // border: "solid 1px",
        alignItems: 'center',
        verticalAlign: 'middle',
        display: 'flex'
        
    
    }
    const imgStyleCompare={
      // border: "solid 1px", 
      // alignSelf: 'center',
      // boxShadow: '5px -5px #888888',
      maxHeight: '80vh',
      maxWidth: '35vw',
      // height: '100%',
      // width: '100%',
      verticalAlign: 'middle',
      // display: 'flex'
      margin: 'auto',
      
    }

export default ComparePopup