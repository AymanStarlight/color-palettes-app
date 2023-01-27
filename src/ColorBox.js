import React, { Component } from 'react'
import './Styles/ColorBox.css'

class ColorBox extends Component {
    render() {
        return (
            <div style={{ background: this.props.background }} className='ColorBox'>
                <span>{this.props.name}</span>
                <span>MORE</span>
            </div>
        )
    }
}

export default ColorBox