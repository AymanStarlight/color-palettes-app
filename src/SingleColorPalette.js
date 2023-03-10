
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import ColorBox from './ColorBox'
import PaletteFooter from './PaletteFooter'

class SinglePalettePalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {
            format: 'hex'
        }
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1)
    }
    changeFormat(val) {
        this.setState({ format: val })
    }
    render() {
        const { name, emoji, id } = this.props.palette
        const { format } = this.state
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showList={false} />
        ))
        return (
            <div className='SingleColorPalette Palette'>
                <NavBar handleChange={this.changeFormat} showLevels={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="go-back ColorBox">
                        <Link to={`/palette/${id}`} className='back-btn'>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={name} emoji={emoji} />
            </div>
        )
    }
}

export default SinglePalettePalette