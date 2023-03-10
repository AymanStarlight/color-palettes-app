
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedPalettes from './seedPalettes'
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './ColorHelpers';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  findPalette(id) {
    return seedPalettes.find(function (palette) {
      return palette.id === id
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
        <Route exact path='/' render={routeProps => <PaletteList palettes={seedPalettes} {...routeProps} />} />
        <Route exact path='/palette/:id' render={routeProps => (
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
        )} />
        <Route exact path='/palette/:paletteId/:colorId' render={routeProps => (
          <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId} />
        )} />
      </Switch>
    )
  }
}

export default App



