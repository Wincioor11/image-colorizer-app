import React, { Component } from 'react'
import {Button} from 'react-bootstrap';


export class UserInterface extends Component {
    state = {
        fileMsg: 'Choose file',
    }

    onFileChoose = (e) => {
        // Update the state 
        var file = e.target.files[0];
        console.log(file); 
        if(file !== undefined){
            this.setState({ fileMsg:  file.name});
            // Create an object of formData 
            this.props.onFileChoose(file);
        }
        
      }

    render() {
        return (
            <div style={containerStyle}>
                <h2 style={headerStyle}>Colorize your image</h2><br/>
                <h5 center style={descriptionStyle}>
                Upload B&W image, then send it to Image Colorizer API by clicking 'Colorize' Button.
                </h5><br/>
                <div className="input-group">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" onChange={this.onFileChoose}/>
                        <label className="custom-file-label" style={{textAlign: "left", paddingLeft: 20}} for="inputGroupFile01">{this.state.fileMsg}</label>
                    </div>
                </div>
                <div style={{marginTop: 10, }}>
                    <Button style={btnStyle} variant='secondary' onClick={this.props.onColorize}>Colorize</Button>{' '}
                    <Button style={btnStyle} variant='secondary'>Compare</Button>{' '}
                    <Button onClick={this.props.onDownload} style={btnStyle} variant='secondary'>Download</Button>
                </div>
            </div>
        )
    }
}


const containerStyle={
    padding: 60,
    background: '#A7D6FF',
    height: '100%',
    borderRadius: 40,
    boxShadow: '5px -5px #888888'
}
const headerStyle={
    background: '#70A6CA',
    padding: 10,
    borderRadius: 20
}
const descriptionStyle={
    // background: '#70A6CA',
    padding: 10
}
const btnStyle={
    // padding: 10,
    width: "32.8%"
}


export default UserInterface
