import './App.css';
import React, { Component } from 'react'
import {NavbarHeader} from './components/NavbarHeader'
import {Footer} from './components/Footer'
import {ImageDisplay} from './components/ImageDisplay'
import {Container, Row, Col} from 'react-bootstrap';
import {UserInterface} from './components/UserInterface';
import Axios from 'axios';
import { base64StringToBlob } from 'blob-util';

const API_URL = process.env.REACT_APP_API_URL;
// const API_ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY;
const API_ACCESS_KEY = "\xf9'\xe4p(\xa9\x12\x1a!\x94\x8d\x1c\x99l\xc7\xb7e\xc7c\x86\x02MJ\xa0";

class App extends Component {
  state = {
    imageInput: null,
    imageOutput: null,
    imageOutputBlob: null,
    
  }

  sendImageToApi = (img) => {
    const headers = {
      'ACCESS_KEY': API_ACCESS_KEY
    } 
    const formData = new FormData();
    // Update the formData object 
    formData.append( 
      "img", 
      this.state.imageInput
    ); 

    Axios.post(API_URL, formData, {headers: headers}).then((response) => {
      console.log('API response: ', response);
      // this.setState({imageOutput: response.data})
      const blob = base64StringToBlob(response.data, 'image/jpg')
      // console.log('Blob: ', blob);
      const image = new File([blob],'image-colorized.jpg', {type: 'image/jpg'})
      // console.log('File: ', image);
      // const url = URL.createObjectURL(blob);
      // console.log('Blob url: ', url);
      // const url2 = URL.createObjectURL(image);
      // console.log('File url: ', url2);


      this.setState({imageOutput: image})     

    })
    .catch((error) => {
      console.log('API call error: ', error)
    });

  }

  onFileChoose = (file) => {
    console.log(file);
    // Update the state 
    this.setState({ imageInput: file, imageOutput: null});
  }

  onColorize = () => {    
    if (this.state.imageInput !== null)
      this.sendImageToApi(this.state.imageInput);
  }

  onCompare = (e) => {}

  onDownload = (e) => {
    if (this.state.imageOutput !== null){
      let url = window.URL.createObjectURL(this.state.imageOutput);
      let a = document.createElement('a');
      a.href = url;
      a.download = this.state.imageOutput.name;
      a.click();
    }
    
					
  }

  render(){
    return (
      <div className="App">
        <NavbarHeader/>
        <Container fluid id="App-content">
          <Row>
            <Col id="left-container">
              <ImageDisplay imageInput={this.state.imageInput} imageOutput={this.state.imageOutput} />
            </Col>
            <Col id="right-container">
              <UserInterface
                fileMsg={this.fileMsg}
                onFileChoose={this.onFileChoose} 
                onColorize={this.onColorize}
                onCompare={this.onCompare}
                onDownload={this.onDownload}
              />

            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
