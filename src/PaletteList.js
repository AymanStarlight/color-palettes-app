import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import './Styles/PaletteList.css'

export default class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes } = this.props
        return (
            <div className='PaletteList'>
                <div className="container">
                    <nav className="nav">
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <div className="palettes">
                        {palettes.map(palette => (
                            <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} key={palette.id} />
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}
