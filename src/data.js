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
        LABEL: "CON THIEN AND MCNAMERA'S LINE",
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
      },
    ],
    BACKGROUND: 'CON_THIEN',
  },
  {
    NAME: 'DECKHOUSE_AND_DESOTO',
    TITLE: 'Deckhouse and Desoto',
    BACKGROUND: 'DECKHOUSE_AND_DESOTO',
  },
  {
    NAME: 'CON_THIEN',
    TITLE: 'Con Thien',
    BACKGROUND: 'CON_THIEN',
    CONTENT:
      '<p>Following Operations Hastings and Prairie, the United States Military Command in Vietnam remained concerned about a mass influx of enemy troops into South Vietnam through the Demilitarized Zone (DMZ). While the US and South Vietnam initially recognized the DMZ and did not enter the region, the North Vietnamese Army (NVA) had long employed it as a staging area for infiltrating troops and supplies into South Vietnam. One of the ideas to counter these incursions was the use of the Strong Point Obstacle System (SPOS). SPOS consisted of a series of fortified bases where the garrisons, using sensors and surveillance devices, could detect enemy troop movement. Secretary of Defense Robert McNamara was a chief proponent of this idea, which led to it being dubbed "McNamara’s Line."</p>\n' +
      '<p>The Marine Corps leadership was strongly opposed to the idea, which would take troops away from the mobile defense patrols currently used along the DMZ. However, US Army leadership made it a priority and also ordered Marines to assist in the construction efforts. As the area between Con Thien and Gio Linh was cleared, Marines were no longer able to continue major offensive operations and instead had to concentrate on securing the bases that made up the SPOS. Con Thien was a strategically important position to hold. If the NVA had the opportunity to capture it, their artillery could bombard the larger base at Dong Ha.</p>\n' +
      '<p>The area bounded by Con Thien, Cam Lo, Gio Linh, and Dong Ha became known as "Leatherneck Square." Beginning in May 1967, throughout the construction of the SPOS, the NVA and Viet Cong, operating out of the DMZ, made numerous attempts to take the region. Over the course of several months, a series of costly operations were conducted around the square that defined the war for the Marines along the DMZ.</p>',
    HOTSPOTS: [
      {
        id: 1,
        X: 700,
        Y: 800,
        CONTENT:
          'The Trace, also known as the Strong Point Obstacle System (SPOS) or McNamara’s Line, ran between Gio Linh and Con Thien. The SPOS consisted of a series of fortified bases from which sensors and surveillance devices were used to detect troop movement. ',
      },
    ],
  },
];

export const getScreen = (str) => screens.find((screen) => screen.NAME === str);
