import './index.css';
import React from 'react';
import Home from './components/Home';
import { getScreen, screens } from './data';
import Alphabetical from './components/Alphabetical';
import Battle from './components/Battle';

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
  // const [previousScreen, setPreviousScreen] = React.useState(null);

  return (
    <div className="h-full border-2 border-purple-400">
      {/*<pre>{JSON.stringify({currentScreen, currentFlow}, undefined, 2)}</pre>*/}
      {currentScreen.NAME === 'HOME' && (
        <Home
          setCurrentScreen={setCurrentScreen}
          // setPreviousScreen={setPreviousScreen}
          setCurrentFlow={setCurrentFlow}
          {...currentScreen}
        />
      )}
      {(currentScreen.NAME === 'ALPHABETICAL_OPERATIONS' ||
        currentScreen.NAME === 'ALPHABETICAL_BATTLES') && (
        <Alphabetical
          setCurrentScreen={setCurrentScreen}
          setCurrentFlow={setCurrentFlow}
          // setPreviousScreen={setPreviousScreen}
          currentScreen={currentScreen}
          currentFlow={currentFlow}
        />
      )}
      {[
        'CON_THIEN',
        'DAI_DO',
        'DECKHOUSE_AND_DESOTO',
        'DOUBLE_EAGLE',
        'HARVEST_MOON',
        'HASTINGS_AND_PRAIRIE',
        'IMPERIAL_LAKE',
        'KHE_SAHN_HILL_FIGHTS',
        'KHE_SAHN_SEIGE',
        'STARLITE',
        'TAYLOR_COMMON',
        'TET_OFFENSE',
      ].indexOf(currentScreen.NAME) > -1 && (
        <Battle
          setCurrentScreen={setCurrentScreen}
          setCurrentFlow={setCurrentFlow}
          // setPreviousScreen={setPreviousScreen}
          currentScreen={currentScreen}
          currentFlow={currentFlow}
        />
      )}
    </div>
  );
}

export default App;
