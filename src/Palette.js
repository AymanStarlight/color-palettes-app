import React, { Component } from 'react'
import ColorBox from './ColorBox'
import PaletteFooter from './PaletteFooter'
import './Styles/Palette.css'
import NavBar from './NavBar'


class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { colors, name, emoji, id } = this.props.palette
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} colorId={color.id} paletteId={id} showList={true} />
        ))
        return (
            <div className='Palette'>
                <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showLevels />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={name} emoji={emoji} />
            </div>
        )
    }
}

export default Palette
