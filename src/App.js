import './index.css';
import React from 'react';
import Home from './components/Home';
import { getScreen, screens } from './data';
import {} from './data/constants';
import Alphabetical from './components/Alphabetical';
import Battle from './components/Battle';
import Chronological from './components/Chronological';
import Year from './components/Year';
import HOME from './assets/images/HOME.jpg';
import CON_THIEN from './assets/images/CON_THIEN.jpg';
import DAI_DO from './assets/images/DAI_DO.jpg';
import DECKHOUSE_AND_DESOTO from './assets/images/DECKHOUSE_AND_DESOTO.jpg';
import DEWEY_CANYON from './assets/images/DEWEY_CANYON.jpg';
import DOUBLE_EAGLE from './assets/images/DOUBLE_EAGLE.jpg';
import HARVEST_MOON from './assets/images/HARVEST_MOON.jpg';
import HASTINGS_AND_PRAIRIE from './assets/images/HASTINGS_AND_PRAIRIE.jpg';
import IMPERIAL_LAKE from './assets/images/IMPERIAL_LAKE.jpg';
import KHE_SAHN_HILL_FIGHTS from './assets/images/KHE_SAHN_HILL_FIGHTS.jpg';
import KHE_SAHN_SIEGE from './assets/images/KHE_SAHN_SIEGE.jpg';
import STARLITE from './assets/images/STARLITE.jpg';
import TAYLOR_COMMON from './assets/images/TAYLOR_COMMON.jpg';
import TET_OFFENSE from './assets/images/TET_OFFENSE.jpg';

const backgrounds = {
  HOME,
  CON_THIEN,
  DAI_DO,
  DECKHOUSE_AND_DESOTO,
  DEWEY_CANYON,
  DOUBLE_EAGLE,
  HARVEST_MOON,
  HASTINGS_AND_PRAIRIE,
  IMPERIAL_LAKE,
  KHE_SAHN_HILL_FIGHTS,
  KHE_SAHN_SIEGE,
  STARLITE,
  TAYLOR_COMMON,
  TET_OFFENSE,
};

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

  const [hideImages, setHideImages] = React.useState(false
  )

  React.useEffect(()=>{

    setTimeout(()=>{
      setHideImages(true)
    }, 300)
  })

  const stateAndActions = {
    setCurrentScreen,
    setCurrentFlow,
    currentScreen,
    currentFlow,
    backgrounds
  };

  return (
    <div
      className="relative h-full"
      style={
        {
          height: '2160px',
          backgroundImage: `url(${backgrounds[currentScreen.BACKGROUND] || HOME})`,
          backgroundSize: 'contain',
          backgroundPositionX: 'right'
        }
      }
    >

      <div style={{ zIndex: 100, height: '100%' }}>
        {currentScreen.NAME === 'HOME' && (
          <Home
            {...stateAndActions}
          />
        )}
        {(currentScreen.NAME === 'ALPHABETICAL_OPERATIONS' ||
          currentScreen.NAME === 'ALPHABETICAL_BATTLES') && (
          <Alphabetical
            {...stateAndActions}
          />
        )}
        {currentScreen.NAME === 'CHRONOLOGICAL' && (
          <Chronological
            {...stateAndActions}
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
          'KHE_SAHN_SIEGE',
          'STARLITE',
          'TAYLOR_COMMON',
          'TET_OFFENSE',
          'DEWEY_CANYON',
          'DECKHOUSE_AND_DESOTO',
        ].indexOf(currentScreen.NAME) > -1 && (
          <Battle
            {...stateAndActions}
          />
        )}
        {['1965', '1966', '1967', '1968', '1969', '1970s'].indexOf(
          currentScreen.NAME
        ) > -1 && (
          <Year
            {...stateAndActions}
          />
        )}
      </div>

      <div className={`absolute ${hideImages && 'hidden'}`} style={{marginLeft: '-100000px'}}>
        {Object.keys(backgrounds).map((bg) => (
          <img src={backgrounds[bg]} />
        ))}
      </div>
    </div>
  );
}

export default App;
