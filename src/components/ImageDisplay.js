import React, { Component } from 'react'
import logo512 from '../images/logo512.png'
import imagePlaceholder from '../images/image-placeholder.jpg'

export class ImageDisplay extends Component {
  // state = {
  //   img: null,
  // }

  getImgSrc= () => {
    let img = null;

    if(this.props.imageOutput === null){
      if(this.props.imageInput === null){
        img = imagePlaceholder;
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
              <img style={imgStyle}
                alt=""
                src={this.getImgSrc()}
                // width="640"
                // height="480"
              />
              {/* <h6>Image preview</h6> */}
            </div>
            
        )
    }
}

const imgContainerStyle={
    padding: 0,
    width: "100%",
    height: '76vh',
    borderRadius: 40,
    // border: "solid 1px",
    alignItems: 'center',
    verticalAlign: 'middle',
    display: 'flex'
    

}
const imgStyle={
  border: "solid 1px", 
  // alignSelf: 'center',
  boxShadow: '5px -5px #888888',
  maxHeight: '99%',
  maxWidth: '100%',
  verticalAlign: 'middle',
  // display: 'flex'
  margin: 'auto',
  
}

export default ImageDisplay
