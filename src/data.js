export const screens = [
  {
    NAME: 'HOME',
    TITLE: 'Interactive Guide to Operations',
    ACTIONS: [
      {
        LABEL: 'ALPHABETICAL',
        DIRECTS_TO: 'ALPHABETICAL_OPERATIONS',
        COLOR: 'YELLOW',
      },
      {
        LABEL: 'TIMELINE',
        DIRECTS_TO: 'TIMELINE',
        COLOR: 'GREEN',
      },
    ],
    BACKGROUND: 'CON_THIEN',
  },
  {
    NAME: 'ALPHABETICAL_OPERATIONS',
    TITLE: null,
    ACTIONS: [
      {
        LABEL: 'DECKHOUSE AND DESOTO',
        DIRECTS_TO: 'DECKHOUSE_AND_DESOTO',
        COLOR: 'GREEN',
      },
      {
        LABEL: 'DEWEY CANYON',
        DIRECTS_TO: 'DEWEY_CANYON',
        COLOR: 'GREEN',
      },
      {
        LABEL: 'DOUBLE EAGLE',
        DIRECTS_TO: 'DOUBLE_EAGLE',
        COLOR: 'GREEN',
      },
      {
        LABEL: 'HARVEST MOON',
        DIRECTS_TO: 'HARVEST_MOON',
        COLOR: 'GREEN',
      },
      {
        LABEL: 'HASTINGS AND PRAIRIE',
        DIRECTS_TO: 'HASTINGS_AND_PRAIRIE',
        COLOR: 'GREEN',
      },
      {
        LABEL: 'IMPERIAL LAKE',
        DIRECTS_TO: 'IMPERIAL_LAKE',
        COLOR: 'GREEN',
      },
      {
        LABEL: 'STARLITE',
        DIRECTS_TO: 'STARLITE',
        COLOR: 'GREEN',
      },
      {
        LABEL: 'TAYLOR COMMON',
        DIRECTS_TO: 'TAYLOR_COMMON',
        COLOR: 'GREEN',
      },

    ],
    BACKGROUND: 'CON_THIEN',
  },
  {
    NAME: 'ALPHABETICAL_BATTLES',
    TITLE: null,
    ACTIONS: [
      {
        LABEL: 'CON THIEN AND MCNAMERA\'S LINE',
        DIRECTS_TO: 'CON_THIEN',
        COLOR: 'YELLOW',
      },
      {
        LABEL: 'DAI DO',
        DIRECTS_TO: 'DAI_DO',
        COLOR: 'YELLOW',
      },
      {
        LABEL: 'KHE SANH - HILL FIGHTS',
        DIRECTS_TO: 'KHE_SANH_HILL_FIGHTS',
        COLOR: 'YELLOW',
      },
      {
        LABEL: 'SEIGE OF KHE SANH',
        DIRECTS_TO: 'KHE_SAHN',
        COLOR: 'YELLOW',
      }
    ],
    BACKGROUND: 'CON_THIEN',
  },
  {
    NAME: 'DECKHOUSE_AND_DESOTO',
    TITLE: 'Deckhouse and Desoto',
    BACKGROUND: 'DECKHOUSE_AND_DESOTO',
  },
];

export const getScreen = (str) => screens.find((screen) => screen.NAME === str);
