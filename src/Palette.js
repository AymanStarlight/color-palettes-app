import React, { Component } from 'react'
import ColorBox from './ColorBox'
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
        const { colors } = this.props.palette
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* NavBar goes Here */}
                <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
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
