import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import './Styles/ColorBox.css'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500);
        })
    }

    render() {
        const { name, background, colorId, paletteId, showList } = this.props
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className='ColorBox'>
                    <div style={{ background }} className={`copy-overlay ${this.state.copied && "show"}`} />
                    <div className={`copy-msg ${this.state.copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-btn">COPY!</button>
                    </div>
                    {showList && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                            <span className='see-more'>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox