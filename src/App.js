import './index.css';
import React from 'react';
import Home from './components/Home';
import { getScreen, screens } from './data';
import {} from './data/constants';
import Alphabetical from './components/Alphabetical';
import Battle from './components/Battle';
import Chronological from './components/Chronological';
import Year from './components/Year';

const initialState = {
  CURRENT_SCREEN: getScreen('HOME'),
  CURRENT_FLOW: {},
};

function App() {
  const [currentScreen, setCurrentScreen] = React.useState(
    initialState.CURRENT_SCREEN
  );

  const [currentFlow, setCurrentFlow] = React.useState(
    initialState.CURRENT_FLOW
  );

  return (
    <div className="h-full">
      {/*<pre>{JSON.stringify({ currentScreen, currentFlow }, undefined, 2)}</pre>*/}
      {currentScreen.NAME === 'HOME' && (
        <Home
          setCurrentScreen={setCurrentScreen}
          setCurrentFlow={setCurrentFlow}
          {...currentScreen}
        />
      )}
      {(currentScreen.NAME === 'ALPHABETICAL_OPERATIONS' ||
        currentScreen.NAME === 'ALPHABETICAL_BATTLES') && (
        <Alphabetical
          setCurrentScreen={setCurrentScreen}
          setCurrentFlow={setCurrentFlow}
          currentScreen={currentScreen}
          currentFlow={currentFlow}
        />
      )}
      {currentScreen.NAME === 'CHRONOLOGICAL' && (
        <Chronological
          setCurrentScreen={setCurrentScreen}
          setCurrentFlow={setCurrentFlow}
          currentScreen={currentScreen}
          currentFlow={currentFlow}
        />
      )}
      {[
        'CON_THIEN',
        'DAI_DO',
        'DOUBLE_EAGLE',
        'HARVEST_MOON',
        'HASTINGS_AND_PRAIRIE',
        'IMPERIAL_LAKE',
        'KHE_SAHN_HILL_FIGHTS',
        'KHE_SAHN_SEIGE',
        'STARLITE',
        'TAYLOR_COMMON',
        'TET_OFFENSE',
        'DEWEY_CANYON',
        'DECKHOUSE_AND_DESOTO',
      ].indexOf(currentScreen.NAME) > -1 && (
        <Battle
          setCurrentScreen={setCurrentScreen}
          setCurrentFlow={setCurrentFlow}
          currentScreen={currentScreen}
          currentFlow={currentFlow}
        />
      )}
      {['1965', '1966', '1967', '1968', '1969', '1970s'].indexOf(
        currentScreen.NAME
      ) > -1 && (
        <Year
          setCurrentScreen={setCurrentScreen}
          setCurrentFlow={setCurrentFlow}
          currentScreen={currentScreen}
          currentFlow={currentFlow}
        />
      )}
    </div>
  );
}

export default App;
