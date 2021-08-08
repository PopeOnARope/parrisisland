import { ALPHABETICAL_OPERATIONS } from './ALPHABETICAL_OPERATIONS';
import { ALPHABETICAL_BATTLES } from './ALPHABETICAL_BATTLES';
import { CON_THIEN } from './CON_THIEN';
import { DAI_DO } from './DAI_DO';
import { DECKHOUSE_AND_DESOTO } from './DECKHOUSE_AND_DESOTO';
import { DOUBLE_EAGLE } from './DOUBLE_EAGLE';
import { HARVEST_MOON } from './HARVEST_MOON';
import { HASTINGS_AND_PRAIRIE } from './HASTINGS_AND_PRAIRIE';
import { HOME } from './HOME';
import { IMPERIAL_LAKE } from './IMPERIAL_LAKE';
import { KHE_SAHN_HILL_FIGHTS } from './KHE_SAHN_HILL_FIGHTS';
import { KHE_SAHN_SEIGE } from './KHE_SAHN_SEIGE';
import { STARLITE } from './STARLITE';
import { TAYLOR_COMMON } from './TAYLOR_COMMON';
import { TET_OFFENSE } from './TET_OFFENSE';
import { DEWEY_CANYON } from './DEWEY_CANYON';
import { CHRONOLOGICAL } from './CHRONOLOGICAL';

export const screens = [
  { ...HOME },
  { ...ALPHABETICAL_OPERATIONS },
  { ...ALPHABETICAL_BATTLES },
  { ...CON_THIEN },
  { ...DAI_DO },
  { ...DECKHOUSE_AND_DESOTO },
  { ...DEWEY_CANYON },
  { ...DOUBLE_EAGLE },
  { ...HARVEST_MOON },
  { ...HASTINGS_AND_PRAIRIE },
  { ...IMPERIAL_LAKE },
  { ...KHE_SAHN_HILL_FIGHTS },
  { ...KHE_SAHN_SEIGE },
  { ...STARLITE },
  { ...TAYLOR_COMMON },
  { ...TET_OFFENSE },
  { ...CHRONOLOGICAL },
];

const CHRONOLOGICAL_BATTLES= [
  { ...HARVEST_MOON },
  { ...HASTINGS_AND_PRAIRIE },
  { ...STARLITE },
  { ...DOUBLE_EAGLE },
  { ...DECKHOUSE_AND_DESOTO },
  { ...DEWEY_CANYON },
  { ...CON_THIEN },
  { ...KHE_SAHN_HILL_FIGHTS },
  { ...TAYLOR_COMMON },
  { ...KHE_SAHN_SEIGE },
  { ...DAI_DO },
].map((battle) => ({ ...battle, PREVIOUS_SCREEN: 'CHRONOLOGICAL' }))

export const years = ['1965', '1966', '1967', '1968', '1969', '1970s'].map(
  (year) => ({
    NAME: year,
    BATTLES: CHRONOLOGICAL_BATTLES.filter((screen) => {
      if (year !== '1970s') {
        return screen.YEAR === year;
      } else {
        return (
          screen.YEAR === '1970' ||
          screen.YEAR === '1971' ||
          screen.YEAR === '1972' ||
          screen.YEAR === '1973'
        );
      }
    }),
  })
);

export const flows = {
  ALPHABETICAL_OPERATIONS: [
    { ...DECKHOUSE_AND_DESOTO },
    { ...DEWEY_CANYON },
    { ...DOUBLE_EAGLE },
    { ...HARVEST_MOON },
    { ...HASTINGS_AND_PRAIRIE },
    { ...IMPERIAL_LAKE },
    { ...STARLITE },
    { ...TAYLOR_COMMON },
  ].map((battle) => ({
    ...battle,
    PREVIOUS_SCREEN: 'ALPHABETICAL_OPERATIONS',
  })),
  ALPHABETICAL_BATTLES: [
    { ...CON_THIEN },
    { ...DAI_DO },
    { ...KHE_SAHN_HILL_FIGHTS },
    { ...KHE_SAHN_SEIGE },
  ].map((battle) => ({ ...battle, PREVIOUS_SCREEN: 'ALPHABETICAL_BATTLES' })),
  CHRONOLOGICAL: [...years],
 CHRONOLOGICAL_BATTLES,
};

export const getScreen = (str) => screens.find((screen) => screen.NAME === str);

export const getScreenFromFlow = ({ flow, str }) => {
  const v = flows[flow].find((screen) => screen.NAME === str);
  console.log({ v });
  return v;
};

export const getYear = (str) => years.find((year) => year.NAME === str);
