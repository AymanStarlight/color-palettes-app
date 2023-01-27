import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Styles/Palette.css'

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* NavBar goes Here */}
                <div className="Palette-colors">
                    {/* Bunch of color boxes */}
                    {colorBoxes}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette