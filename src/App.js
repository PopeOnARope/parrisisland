import './index.css';
import React from 'react';
import Home from './components/Home';
import { getScreen, screens } from './data';
import Alphabetical from './components/Alphabetical';

const initialState = {
  CURRENT_SCREEN: getScreen('HOME'),
};

function App() {
  const [currentScreen, setCurrentScreen] = React.useState(
    initialState.CURRENT_SCREEN
  );
  const [previousScreen, setPreviousScreen] = React.useState(null);

  return (
    <div className="h-full border-2 border-purple-400">
      {currentScreen.NAME === 'HOME' && (
        <Home
          setCurrentScreen={setCurrentScreen}
          setPreviousScreen={setPreviousScreen}
          {...currentScreen}
        />
      )}
      {(currentScreen.NAME === 'ALPHABETICAL_OPERATIONS' || currentScreen.NAME === 'ALPHABETICAL_BATTLES') && (
        <Alphabetical
          setCurrentScreen={setCurrentScreen}
          setPreviousScreen={setPreviousScreen}
          currentScreen={currentScreen}
        />
      )}
      {
        currentScreen.NAME === 'DECKHOUSE_AND_DESOTO' && (
          <div></div>
        )
      }
    </div>
  );
}

export default App;
