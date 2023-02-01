
import Palette from './Palette';
import seedPalettes from './seedPalettes'
import { generatePalette } from './ColorHelpers';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  );
}

export default App;
