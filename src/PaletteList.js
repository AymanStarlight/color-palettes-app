import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import './Styles/PaletteList.css'

export default class PaletteList extends Component {
    render() {
        const { palettes } = this.props
        return (
            <div className='PaletteList'>
                <div className="container">
                    <nav className="nav">
                        <h1>React Colors</h1>
                    </nav>
                    <div className="palettes">
                        {palettes.map(palette => (
                            <MiniPalette {...palette} />
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}
