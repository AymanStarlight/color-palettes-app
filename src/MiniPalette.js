import React, { Component } from 'react'
import './Styles/MiniPalette.css'

export class MiniPalette extends Component {
    render() {
        const { paletteName, emoji, colors } = this.props
        const miniColorPalettes = colors.map(color => (
            <div className="miniColors" style={{ backgroundColor: color.color }} key={color.name}>

            </div>
        ))
        return (
            <div className="root">
                <div className="colors">
                    {miniColorPalettes}
                </div>
                <h5 className="title">
                    {paletteName} <span className="emoji">{emoji}</span>
                </h5>
            </div>
        )
    }
}

export default MiniPalette