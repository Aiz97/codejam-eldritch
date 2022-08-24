import azathoth from './assets/Ancients/Azathoth.png';
import cthulhu from './assets/Ancients/Cthulthu.png';
import iogSothoth from './assets/Ancients/IogSothoth.png';
import shubNiggurath from './assets/Ancients/ShubNiggurath.png';

const ancients = {
  azathoth,
  cthulhu,
  iogSothoth,
  shubNiggurath
}

const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      cardFace: ancients.azathoth,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      cardFace: ancients.cthulhu,
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      cardFace: ancients.iogSothoth,
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      cardFace: ancients.shubNiggurath,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]

  const difficulties = [
    {
      id: 'easy',
      name: 'Низкая'
    },
    {
      id: 'normal',
      name: 'Средняя'
    },
    {
      id: 'hard',
      name: 'Высокая'
    },
  ]
  