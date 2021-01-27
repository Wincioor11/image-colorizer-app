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
                <h1 style={headerStyle}>Colorize your image</h1><br/>
                <h5 center style={descriptionStyle}>
                Upload B&W image, then send it to Image Colorizer API by clicking 'Colorize' Button.
                </h5><br/>
                <div className="input-group">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" onChange={this.onFileChoose} accept=".jpg,.png,.jpeg,.ico"/>
                        <label className="custom-file-label" style={{textAlign: "left", paddingLeft: 20}} for="inputGroupFile01">{this.state.fileMsg}</label>
                    </div>
                </div>
                <div style={{marginTop: 10, }}>
                    <Button disabled={!this.props.colorizeButtonState} style={btnStyle} variant='secondary' onClick={this.props.onColorize}>Colorize</Button>{' '}
                    <Button disabled={!this.props.downloadButtonState} onClick={this.props.onCompare} style={btnStyle} variant='secondary'>Compare</Button>{' '}
                    <Button disabled={!this.props.downloadButtonState} onClick={this.props.onDownload} style={btnStyle} variant='secondary'>Download</Button>
                </div>
            </div>
        )
    }
}


const containerStyle={
    padding: 60,
    // background: '#A7D6FF',
    // background: "linear-gradient(220deg, #c9d6ff, #e2e2e2  80%)",
    // background: "linear-gradient(220deg, #6190E8, #A7BFE8  80%)",
    background: "linear-gradient(220deg, #29323c, #485563  80%)",
    height: '100%',
    borderRadius: 40,
    boxShadow: '5px -5px #888888'
}
const headerStyle={
    // background: '#70A6CA',
    // '--color-1': 'deepskyblue',
    // '--color-2': 'navy',
    // background: `
    //   linear-gradient(
    //     180deg,
    //     var(--color-1),
    //     var(--color-2) 90%
    //   )
    // `,
    // background: "linear-gradient(220deg, #29323c, #485563  80%)",

    padding: 10,
    borderRadius: 20,
    color: 'white'
}
const descriptionStyle={
    // background: '#70A6CA',
    padding: 10,
    color: 'white'
}
const btnStyle={
    // padding: 10,
    width: "32.8%"
}


export default UserInterface
