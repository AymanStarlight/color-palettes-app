import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './Styles/NavBar.css'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex' }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ format: e.target.value })
        this.props.handleChange(e.target.value)
    }
    render() {
        const { level, changeLevel } = this.props
        const { format } = this.state
        return (
            <header className='NavBar'>
                <div className="logo">
                    <a href="#">reactcolorpalette</a>
                </div>
                <div className="slider-container">
                    <span className='level'>Level: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>

            </header>
        )
    }
}

export default NavBar