import { CON_THIEN } from './CON_THIEN';
import { DECKHOUSE_AND_DESOTO } from './DECKHOUSE_AND_DESOTO';
import { HOME } from './HOME';
import { ALPHABETICAL_OPERATIONS } from './ALPHABETICAL_OPERATIONS';
import { ALPHABETICAL_BATTLES } from './ALPHABETICAL_BATTLES';

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
];

const flows = {
  ALPHABETICAL_OPERATIONS:[],
  ALPHABETICAL_BATTLES: [],
  CHRONOLOGICAL: []
}

export const getScreen = (str) => screens.find((screen) => screen.NAME === str);
