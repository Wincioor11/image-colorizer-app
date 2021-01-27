import React, { Component } from 'react'
import logo from '../images/logo.png'
import LoadingOverlay from 'react-loading-overlay'
import styled from 'styled-components'
 
const StyledLoader = styled(LoadingOverlay)`
  display: flex;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  `


export class ImageDisplay extends Component {

  getImgSrc= () => {
    let img = null;

    if(this.props.imageOutput === null){
      if(this.props.imageInput === null){
        img = logo;
      }else{
        img = URL.createObjectURL(this.props.imageInput);
        console.log('imgInput', img)
      }
    } else{
      img = URL.createObjectURL(this.props.imageOutput)

    }
    return img;
  }

    render() {
        return (
            <div style={imgContainerStyle} id="Img-preview">

              <StyledLoader
                active={this.props.loading}
                spinner
                text='Loading your image...'
                classNamePrefix='MyLoader_'
              >
                <img style={imgStyle} 
                // hidden={this.props.loading}
                  alt=""
                  src={this.getImgSrc()}
                  // width="640"
                  // height="480"
                />
              </StyledLoader>
            </div>
            
        )
    }
}


const imgContainerStyle={
    padding: 0,
    width: "100%",
    height: '76vh',
    // borderRadius: 40,
    // border: "solid 1px",
    alignItems: 'center',
    verticalAlign: 'middle',
    display: 'flex',
    margin: 'auto'
    

}
const imgStyle={
  // border: "solid 1px", 
  // alignSelf: 'center',
  // boxShadow: '5px -5px #888888',
  maxHeight: '76vh',
  maxWidth: '100%',
  // height: '76vh',
  verticalAlign: 'middle',
  display: 'flex',
  margin: 'auto',
  
}
const imgWrapperStyle={
  alignItems: 'center',
  verticalAlign: 'middle',
  display: 'flex',
  // margin: 'auto',
  maxHeight: '99%',
  maxWidth: '100%',
  width: "100%",
  height: '76vh',
}


export default ImageDisplay
