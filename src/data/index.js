import { CON_THIEN } from './CON_THIEN';
import { DECKHOUSE_AND_DESOTO } from './DECKHOUSE_AND_DESOTO';
import { HOME } from './HOME';
import { ALPHABETICAL_OPERATIONS } from './ALPHABETICAL_OPERATIONS';
import { ALPHABETICAL_BATTLES } from './ALPHABETICAL_BATTLES';
import { DAI_DO } from './DAI_DO';
import { KHE_SAHN_HILL_FIGHTS } from './KHE_SAHN_HILL_FIGHTS';
import { KHE_SAHN_SEIGE } from './KHE_SAHN_SEIGE';

export const screens = [
  { ...HOME },
  { ...ALPHABETICAL_OPERATIONS },
  { ...ALPHABETICAL_BATTLES },
  {
    ...DECKHOUSE_AND_DESOTO,
  },
  {
    ...CON_THIEN,
  },
  { ...KHE_SAHN_HILL_FIGHTS },
  { ...KHE_SAHN_SEIGE },
];

export const flows = {
  ALPHABETICAL_OPERATIONS: [],
  ALPHABETICAL_BATTLES: [
    { ...CON_THIEN },
    { ...DAI_DO },
    { ...KHE_SAHN_HILL_FIGHTS },
    { ...KHE_SAHN_SEIGE },
  ].map((battle) => ({ ...battle, PREVIOUS_SCREEN: 'ALPHABETICAL_BATTLES' })),
  CHRONOLOGICAL: [],
};

export const getScreen = (str) => screens.find((screen) => screen.NAME === str);
export const getScreenFromFlow = ({ flow, str }) => {
  const v = flows[flow].find((screen) => screen.NAME === str);
  console.log({ v });
  return v;
};
