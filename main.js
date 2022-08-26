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

// const ancientsData = [
//     {
//       id: 'azathoth',
//       name: 'azathoth',
//       cardFace: ancients.azathoth,
//       firstStage: {
//         greenCards: 1,
//         blueCards: 1,
//         brownCards: 2,
//       },
//       secondStage: {
//         greenCards: 2,
//         blueCards: 1,
//         brownCards: 3,
//       },
//       thirdStage: {
//         greenCards: 2,
//         blueCards: 0,
//         brownCards: 4,
//       },
//     },
//     {
//       id: 'cthulhu',
//       name: 'cthulhu',
//       cardFace: ancients.cthulhu,
//       firstStage: {
//         greenCards: 0,
//         blueCards: 2,
//         brownCards: 2,
//       },
//       secondStage: {
//         greenCards: 1,
//         blueCards: 0,
//         brownCards: 3,
//       },
//       thirdStage: {
//         greenCards: 3,
//         blueCards: 0,
//         brownCards: 4,
//       },
//     },
//     {
//       id: 'iogSothoth',
//       name: 'iogSothoth',
//       cardFace: ancients.iogSothoth,
//       firstStage: {
//         greenCards: 0,
//         blueCards: 1,
//         brownCards: 2,
//       },
//       secondStage: {
//         greenCards: 2,
//         blueCards: 1,
//         brownCards: 3,
//       },
//       thirdStage: {
//         greenCards: 3,
//         blueCards: 0,
//         brownCards: 4,
//       },
//     },
//     {
//       id: 'shubNiggurath',
//       name: 'shubNiggurath',
//       cardFace: ancients.shubNiggurath,
//       firstStage: {
//         greenCards: 1,
//         blueCards: 1,
//         brownCards: 2,
//       },
//       secondStage: {
//         greenCards: 3,
//         blueCards: 1,
//         brownCards: 2,
//       },
//       thirdStage: {
//         greenCards: 2,
//         blueCards: 0,
//         brownCards: 4,
//       },
//     },
//   ]
  const ancient = [
    {
      greenStage: [1, 2, 2],
      brownStage: [2, 3, 4],
      blueStage: [1, 1, 0]
    },
    {
      greenStage: [0, 1, 3],
      brownStage: [2, 3, 4],
      blueStage: [2, 0, 0]
    },
    {
      greenStage: [0, 2, 3],
      brownStage: [2, 3, 4],
      blueStage: [1, 1, 0]
    },
    {
      greenStage: [1, 3, 2],
      brownStage: [2, 2, 4],
      blueStage: [1, 1, 0]
    }
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
  
  const cards = [
  {color: 'blue', difficulty: 'hard', num: 0, src: './assets/MythicCards/blue/blue1.jpg'},
  {color: 'blue', difficulty: 'hard', num: 1, src: './assets/MythicCards/blue/blue2.jpg'},
  {color: 'blue', difficulty: 'easy', num: 0, src: './assets/MythicCards/blue/blue3.jpg'},
  {color: 'blue', difficulty: 'easy', num: 1, src: './assets/MythicCards/blue/blue4.jpg'},
  {color: 'blue', difficulty: 'easy', num: 2, src: './assets/MythicCards/blue/blue5.jpg'},
  {color: 'blue', difficulty: 'hard', num: 2, src: './assets/MythicCards/blue/blue6.jpg'},
  {color: 'blue', difficulty: 'normal', num: 0, src: './assets/MythicCards/blue/blue7.jpg'},
  {color: 'blue', difficulty: 'hard', num: 3, src: './assets/MythicCards/blue/blue8.jpg'},
  {color: 'blue', difficulty: 'normal', num: 1, src: './assets/MythicCards/blue/blue9.jpg'},
  {color: 'blue', difficulty: 'easy', num: 3, src: './assets/MythicCards/blue/blue10.jpg'},
  {color: 'blue', difficulty: 'normal', num: 2, src: './assets/MythicCards/blue/blue11.jpg'},
  {color: 'blue', difficulty: 'normal', num: 3, src: './assets/MythicCards/blue/blue12.jpg'},

  {color: 'brown', difficulty: 'normal', num: 0, src: './assets/MythicCards/brown/brown1.jpg'},
  {color: 'brown', difficulty: 'normal', num: 1, src: './assets/MythicCards/brown/brown2.jpg'},
  {color: 'brown', difficulty: 'normal', num: 2, src: './assets/MythicCards/brown/brown3.jpg'},
  {color: 'brown', difficulty: 'normal', num: 3, src: './assets/MythicCards/brown/brown4.jpg'},
  {color: 'brown', difficulty: 'normal', num: 4, src: './assets/MythicCards/brown/brown5.jpg'},
  {color: 'brown', difficulty: 'hard', num: 0, src: './assets/MythicCards/brown/brown6.jpg'},
  {color: 'brown', difficulty: 'hard', num: 1, src: './assets/MythicCards/brown/brown7.jpg'},
  {color: 'brown', difficulty: 'hard', num: 2, src: './assets/MythicCards/brown/brown8.jpg'},
  {color: 'brown', difficulty: 'hard', num: 3, src: './assets/MythicCards/brown/brown9.jpg'},
  {color: 'brown', difficulty: 'hard', num: 4, src: './assets/MythicCards/brown/brown10.jpg'},
  {color: 'brown', difficulty: 'easy', num: 0, src: './assets/MythicCards/brown/brown11.jpg'},
  {color: 'brown', difficulty: 'easy', num: 1, src: './assets/MythicCards/brown/brown12.jpg'},
  {color: 'brown', difficulty: 'easy', num: 2, src: './assets/MythicCards/brown/brown13.jpg'},
  {color: 'brown', difficulty: 'easy', num: 3, src: './assets/MythicCards/brown/brown14.jpg'},
  {color: 'brown', difficulty: 'normal', num: 5, src: './assets/MythicCards/brown/brown15.jpg'},
  {color: 'brown', difficulty: 'normal', num: 6, src: './assets/MythicCards/brown/brown16.jpg'},
  {color: 'brown', difficulty: 'normal', num: 7, src: './assets/MythicCards/brown/brown17.jpg'},
  {color: 'brown', difficulty: 'normal', num: 8, src: './assets/MythicCards/brown/brown18.jpg'},
  {color: 'brown', difficulty: 'normal', num: 9, src: './assets/MythicCards/brown/brown19.jpg'},
  {color: 'brown', difficulty: 'normal', num: 10, src: './assets/MythicCards/brown/brown20.jpg'},
  {color: 'brown', difficulty: 'easy', num: 4, src: './assets/MythicCards/brown/brown21.jpg'},

  {color: 'green', difficulty: 'easy', num: 0, src: './assets/MythicCards/green/green1.jpg'},
  {color: 'green', difficulty: 'hard', num: 0, src: './assets/MythicCards/green/green2.jpg'},
  {color: 'green', difficulty: 'hard', num: 1, src: './assets/MythicCards/green/green3.jpg'},
  {color: 'green', difficulty: 'hard', num: 2, src: './assets/MythicCards/green/green4.jpg'},
  {color: 'green', difficulty: 'hard', num: 3, src: './assets/MythicCards/green/green5.jpg'},
  {color: 'green', difficulty: 'hard', num: 4, src: './assets/MythicCards/green/green6.jpg'},
  {color: 'green', difficulty: 'normal', num: 0, src: './assets/MythicCards/green/green7.jpg'},
  {color: 'green', difficulty: 'normal', num: 1, src: './assets/MythicCards/green/green8.jpg'},
  {color: 'green', difficulty: 'normal', num: 2, src: './assets/MythicCards/green/green9.jpg'},
  {color: 'green', difficulty: 'normal', num: 3, src: './assets/MythicCards/green/green10.jpg'},
  {color: 'green', difficulty: 'normal', num: 4, src: './assets/MythicCards/green/green11.jpg'},
  {color: 'green', difficulty: 'easy', num: 1, src: './assets/MythicCards/green/green12.jpg'},
  {color: 'green', difficulty: 'normal', num: 5, src: './assets/MythicCards/green/green13.jpg'},
  {color: 'green', difficulty: 'normal', num: 6, src: './assets/MythicCards/green/green14.jpg'},
  {color: 'green', difficulty: 'normal', num: 7, src: './assets/MythicCards/green/green15.jpg'},
  {color: 'green', difficulty: 'easy', num: 2, src: './assets/MythicCards/green/green16.jpg'},
  {color: 'green', difficulty: 'easy', num: 3, src: './assets/MythicCards/green/green17.jpg'},
  {color: 'green', difficulty: 'easy', num: 4, src: './assets/MythicCards/green/green18.jpg'}
  ];

  const conditions = {
    low: ['easy', 'normal', 'normal'],
    normal: ['easy', 'normal', 'hard'],
    high: ['normal', 'hard', 'hard'],
  }

  const config = {
    ancient: '',
    difficulty: '',
    isShuffled: false,
    blueArr0: [],
    blueArr1: [],
    blueArr2: [],
    brownArr0: [],
    brownArr1: [],
    brownArr2: [],
    greenArr0: [],
    greenArr1: [],
    greenArr2: [],
    currentStage: undefined,
    currentCard: undefined
  }

  const ancientsArr = ['azathoth', 'cthulhu', 'iogSothoth', 'shubNiggurath'];
  const difficultiesArr = ['difficulty-easy', 'difficulty-normal', 'difficulty-hard']

  let blueArr = [];
  let brownArr = [];
  let greenArr = [];
  let mixedBlue = [];
  let mixedBrown = [];
  let mixedGreen = [];

  const ancientCard = [];
  ancientCard[0] = document.querySelector('.azathoth');
  ancientCard[1] = document.querySelector('.cthulhu');
  ancientCard[2] = document.querySelector('.iogSothoth');
  ancientCard[3] = document.querySelector('.shubNiggurath');

  const difficultyContainer = document.querySelector('.difficulty-container');
  const difficulty = [];
  difficulty[0] = document.querySelector('.difficulty-easy');
  difficulty[1] = document.querySelector('.difficulty-normal');
  difficulty[2] = document.querySelector('.difficulty-hard');

  const currentState = document.querySelector('.current-state');
  const stageText = document.querySelector('.stage-text');
  const green1 = document.querySelector('.green1');
  const brown1 = document.querySelector('.brown1');
  const blue1 = document.querySelector('.blue1');
  const green2 = document.querySelector('.green2');
  const brown2 = document.querySelector('.brown2');
  const blue2 = document.querySelector('.blue2');
  const green3 = document.querySelector('.green3');
  const brown3 = document.querySelector('.brown3');
  const blue3 = document.querySelector('.blue3');

  const shuffle = document.querySelector('.shuffle'); 
  const deck = document.querySelector('.deck');
  const lastCard = document.querySelector('.last-card');
  
  let greenEasy = 0;
  let greenNormal = 0;
  let greenHard = 0;
  let brownEasy = 0;
  let brownNormal = 0;
  let brownHard = 0;
  let blueEasy = 0;
  let blueNormal = 0;
  let blueHard = 0;

  for (let i = 0; i < cards.length; i++) {
    if(cards[i].color === 'green' && cards[i].difficulty === 'easy')
    greenEasy++;
    if(cards[i].color === 'green' && cards[i].difficulties === 'normal')
    greenNormal++;
    if(cards[i].color === 'green' && cards[i].difficulties === 'hard')
    greenHard++;
    if(cards[i].color === 'blue' && cards[i].difficulty === 'easy')
    blueEasy++;
    if(cards[i].color === 'blue' && cards[i].difficulties === 'normal')
    blueNormal++;
    if(cards[i].color === 'blue' && cards[i].difficulties === 'hard')
    blueHard++;
    if(cards[i].color === 'brown' && cards[i].difficulty === 'easy')
    brownEasy++;
    if(cards[i].color === 'brown' && cards[i].difficulties === 'normal')
    brownNormal++;
    if(cards[i].color === 'brown' && cards[i].difficulties === 'hard')
    brownHard++;
  }

  for (let i = 0; i < ancientCard.length; i++) {
    ancientCard[i].addEventListener('click', setAncient);
  }

  function setAncient(e) {
    if(config.isShuffled) {
      config.isShuffled = false;
    }
    config.difficulty = '';
    config.ancientCard = e.target.classList[1];
    update();
  }

  for (let i = 0; i < difficulty.length; i++) {
    difficulty[i].addEventListener('click', setDifficulty);
  }

  function setDifficulty(e) {
    if(config.isShuffled) {
      config.isShuffled = false;
    }
    config.difficulty = e.target.classList[1];
    update();
  }

  shuffle.addEventListener('click', shuffleCards);

  function shuffleCards() {
    config.isShuffled = true;
    for (let i = 0; i < ancientsArr.length; i++){
      if (config.ancientCard == ancientsArr[i]) {
        greenArr.length = ancient[i].greenStage[0] + ancient[i].greenStage[1] + ancient[i].greenStage[2];
        brownArr.length = ancient[i].brownStage[0] + ancient[i].brownStage[1] + ancient[i].brownStage[2];
        blueArr.length = ancient[i].blueStage[0] + ancient[i].blueStage[1] + ancient[i].blueStage[2];

        let cardsPull = {green:[], brown:[], blue:[]};
        let usedCards = {green:[], brown:[], blue:[]};
        let cardsPull1 = {green:[], brown:[], blue:[]};
        let usedCards1 = {green:[], brown:[], blue:[]};
        let searchGreenStage = 0;
        let searchBlueStage = 0;
        let searchBrownStage = 0;

        if (config.difficulty == difficultiesArr[0]) {
          for(let j = 0; j < cards.length; j++){
            if (cards[j].color === 'green' && (cards[j].difficulty === conditions.low[0] || cards[j].difficulty === conditions.low[1] || cards[j].difficulty === conditions.low[2]))
            cardsPull.green.push(j);
            if (cards[j].color === 'brown' && (cards[j].difficulty === conditions.low[0] || cards[j].difficulty === conditions.low[1] || cards[j].difficulty === conditions.low[2]))
            cardsPull.brown.push(j);
            if (cards[j].color === 'blue' && (cards[j].difficulty === conditions.low[0] || cards[j].difficulty === conditions.low[1] || cards[j].difficulty === conditions.low[2]))
            cardsPull.blue.push(j);
          }
          if (conditions.low[3]){
            for (let j = 0; j < cards.length; j++){
              if (cards[j].color === 'green' && cards[j].difficulty === conditions.low[3])
            cardsPull.green.push(j);
            if (cards[j].color === 'blue' && cards[j].difficulty === conditions.low[3])
            cardsPull.blue.push(j);
            if (cards[j].color === 'brown' && cards[j].difficulty === conditions.low[3])
            cardsPull.brown.push(j);
            }
          }
        }

       if (config.difficulty == difficultiesArr[1]) {
        for (let j = 0; j < cards.length; j++){
          if (cards[j].color === 'green' && (cards[j].difficulty === conditions.normal[0] || cards[j].difficulty === conditions.normal[1] || cards[j].difficulty === conditions.normal[2]))
          cardsPull.green.push(j);
          if (cards[j].color === 'brown' && (cards[j].difficulty === conditions.normal[0] || cards[j].difficulty === conditions.normal[1] || cards[j].difficulty === conditions.normal[2]))
          cardsPull.brown.push(j);
          if (cards[j].color === 'blue' && (cards[j].difficulty === conditions.normal[0] || cards[j].difficulty === conditions.normal[1] || cards[j].difficulty === conditions.normal[2]))
          cardsPull.blue.push(j);
        }
        if (conditions.normal[3]) {
          for (let j = 0; j < cards.length; j++){
            if (cards[j].color === 'green' && cards[j].difficulty === conditions.normal[3])
          cardsPull.green.push(j);
          if (cards[j].color === 'blue' && cards[j].difficulty === conditions.normal[3])
          cardsPull.blue.push(j);
          if (cards[j].color === 'brown' && cards[j].difficulty === conditions.normal[3])
          cardsPull.brown.push(j);
          }
        }
       }

       if (config.difficulty == difficultiesArr[2]) {
        for (let j = 0; j < cards.length; j++){
          if (cards[j].color === 'green' && (cards[j].difficulty === conditions.high[0] || cards[j].difficulty === conditions.high[1] || cards[j].difficulty === conditions.high[2]))
          cardsPull.green.push(j);
          if (cards[j].color === 'brown' && (cards[j].difficulty === conditions.high[0] || cards[j].difficulty === conditions.high[1] || cards[j].difficulty === conditions.high[2]))
          cardsPull.brown.push(j);
          if (cards[j].color === 'blue' && (cards[j].difficulty === conditions.high[0] || cards[j].difficulty === conditions.high[1] || cards[j].difficulty === conditions.high[2]))
          cardsPull.blue.push(j);
        }
        if (conditions.high[3]) {
          for (let j = 0; j < cards.length; j++){
            if (cards[j].color === 'green' && cards[j].difficulty === conditions.high[3])
          cardsPull.green.push(j);
          if (cards[j].color === 'blue' && cards[j].difficulty === conditions.high[3])
          cardsPull.blue.push(j);
          if (cards[j].color === 'brown' && cards[j].difficulty === conditions.high[3])
          cardsPull.brown.push(j);
          }
        }
       }

       for (let j = 0; j < greenArr.length; j++){
        if (j < cardsPull.green.length)
          searchGreenStage = 0;
        else 
          searchGreenStage = 1;
        if (searchGreenStage === 0) {
          while (true) {
            let num = Math.round(Math.random()*100);
            if (num < cardsPull.green.length && !usedCards.green.includes(num)){
              greenArr[j] = cardsPull.green[num];
              usedCards.green.push(num);
              break;
            }
          }
        }
        if (searchGreenStage === 1) {
          while (true) {
            let num = Math.round(Math.random()*100);
            if (num < cardsPull1.green.length && !usedCards1.green.includes(num)){
              greenArr[j] = cardsPull1.green[num];
              usedCards1.green.push(num);
              break;
          }
        }
       }
      }
      mixedGreen = mixArr(greenArr);

      for (let j = 0; j < brownArr.length; j++){
        if (j < cardsPull.brown.length)
          searchBrownStage = 0;
        else 
          searchBrownStage = 1;
        if (searchBrownStage === 0) {
          while (true) {
            let num = Math.round(Math.random()*100);
            if (num < cardsPull.brown.length && !usedCards.brown.includes(num)){
              brownArr[j] = cardsPull.brown[num];
              usedCards.brown.push(num);
              break;
            }
          }
        }
        if (searchBrownStage === 1) {
          while (true) {
            let num = Math.round(Math.random()*100);
            if (num < cardsPull1.brown.length && !usedCards1.brown.includes(num)){
              brownArr[j] = cardsPull1.brown[num];
              usedCards1.brown.push(num);
              break;
          }
        }
       }
      }

      mixedBrown = mixArr(brownArr);

      for (let j = 0; j < blueArr.length; j++){
        if (j < cardsPull.blue.length)
          searchBlueStage = 0;
        else 
          searchBlueStage = 1;
        if (searchBlueStage === 0) {
          while (true) {
            let num = Math.round(Math.random()*100);
            if (num < cardsPull.blue.length && !usedCards.blue.includes(num)){
              blueArr[j] = cardsPull.blue[num];
              usedCards.blue.push(num);
              break;
            }
          }
        }
        if (searchBlueStage === 1) {
          while (true) {
            let num = Math.round(Math.random()*100);
            if (num < cardsPull1.blue.length && !usedCards1.blue.includes(num)){
              blueArr[j] = cardsPull1.blue[num];
              usedCards1.blue.push(num);
              break;
          }
        }
       }
      }

      mixedBlue = mixArr(blueArr);

      for (let j = 0; j < greenArr.length; j++) {
        if (j < ancient[i].greenStage[0]){
          config.greenArr0[j] = mixedGreen[j];
        }
        if (j >= ancient[i].greenStage[0] && j < ancient[i].greenStage[0] + ancient[i].greenStage[1]) {
          config.greenArr1[j - ancient[i].greenStage[0]] = mixedGreen[j];
        }
        if (j >= ancient[i].greenStage[0] + ancient[i].greenStage[1] && j < ancient[i].greenStage[0] + ancient[i].greenStage[1] + ancient[i].greenStage[2]) {
          config.greenArr2[j - ancient[i].greenStage[0] - ancient[i].greenStage[1]] = mixedGreen[j];
        }
      }
      for (let j = 0; j < brownArr.length; j++) {
        if (j < ancient[i].brownStage[0]){
          config.brownArr0[j] = mixedBrown[j];
        }
        if (j >= ancient[i].brownStage[0] && j < ancient[i].brownStage[0] + ancient[i].brownStage[1]) {
          config.brownArr1[j - ancient[i].brownStage[0]] = mixedBrown[j];
        }
        if (j >= ancient[i].brownStage[0] + ancient[i].brownStage[1] && j < ancient[i].brownStage[0] + ancient[i].brownStage[1] + ancient[i].brownStage[2]) {
          config.brownArr2[j - ancient[i].brownStage[0] - ancient[i].brownStage[1]] = mixedBrown[j];
        }
      }
      for (let j = 0; j < blueArr.length; j++) {
        if (j < ancient[i].blueStage[0]){
          config.blueArr0[j] = mixedBlue[j];
        }
        if (j >= ancient[i].blueStage[0] && j < ancient[i].blueStage[0] + ancient[i].blueStage[1]) {
          config.blueArr1[j - ancient[i].blueStage[0]] = mixedBlue[j];
        }
        if (j >= ancient[i].blueStage[0] + ancient[i].blueStage[1] && j < ancient[i].blueStage[0] + ancient[i].blueStage[1] + ancient[i].blueStage[2]) {
          config.blueArr2[j - ancient[i].blueStage[0] - ancient[i].blueStage[1]] = mixedBlue[j];
        }
      }
      config.currentCard = undefined;
      config.currentStage = undefined;
      break;
    }
  }
  update();
}
  // function difficultyReveal() {
  //   for (const difficulty of difficulties) {
  //     difficulty.classList.add('active');
  //   }
  // }

  // function shuffleReveal() {
  //   shuffle.classList.add('active');
  // }

  // // azathoth.addEventListener('click', difficultyReveal);
  // cthulhu.addEventListener('click', difficultyReveal);
  // iogSothoth.addEventListener('click', difficultyReveal);
  // shubNiggurath.addEventListener('click', difficultyReveal);

  // function pickAncient() {
  //   if (azathoth.addEventListener('click', difficultyReveal)) {
  //     difficulty.onclick() = shuffleReveal();
  //     shuffle.addEventListener('click', () => {
  //       shuffle.classList.remove('active');
  //       const html = 
  //       `<div class="stage-container">
  //       <span class="stage-text">Первая стадия</span>
  //       <div class="dots-container">
  //           <div class="dot green">1</div>
  //           <div class="dot brown">2</div>
  //           <div class="dot blue">1</div>
  //       </div>
  //       </div>
  //       <div class="stage-container">
  //           <span class="stage-text">Вторая стадия</span>
  //           <div class="dots-container">
  //               <div class="dot green">2</div>
  //               <div class="dot brown">3</div>
  //               <div class="dot blue">1</div>
  //           </div>
  //       </div>
  //       <div class="stage-container">
  //           <span class="stage-text">Третья стадия</span>
  //           <div class="dots-container">
  //               <div class="dot green">2</div>
  //               <div class="dot brown">4</div>
  //               <div class="dot blue">0</div>
  //           </div>
  //       </div>`;
  //       currentState.innerHTML += html;
  //     })
  //   }
  // }

  // pickAncient();

  // cthulhu.addEventListener('click', () => {
  //   const html = 
  //   `<div class="stage-container">
  //   <span class="stage-text">Первая стадия</span>
  //   <div class="dots-container">
  //       <div class="dot green">0</div>
  //       <div class="dot brown">2</div>
  //       <div class="dot blue">2</div>
  //   </div>
  //   </div>
  //   <div class="stage-container">
  //       <span class="stage-text">Вторая стадия</span>
  //       <div class="dots-container">
  //           <div class="dot green">1</div>
  //           <div class="dot brown">3</div>
  //           <div class="dot blue">0</div>
  //       </div>
  //   </div>
  //   <div class="stage-container">
  //       <span class="stage-text">Третья стадия</span>
  //       <div class="dots-container">
  //           <div class="dot green">3</div>
  //           <div class="dot brown">4</div>
  //           <div class="dot blue">0</div>
  //       </div>
  //   </div>`;
  //   currentState.innerHTML += html;
  // })

  // shubNiggurath.addEventListener('click', () => {
  //   const html = 
  //   `<div class="stage-container">
  //   <span class="stage-text">Первая стадия</span>
  //   <div class="dots-container">
  //       <div class="dot green">0</div>
  //       <div class="dot brown">2</div>
  //       <div class="dot blue">1</div>
  //   </div>
  //   </div>
  //   <div class="stage-container">
  //       <span class="stage-text">Вторая стадия</span>
  //       <div class="dots-container">
  //           <div class="dot green">2</div>
  //           <div class="dot brown">3</div>
  //           <div class="dot blue">1</div>
  //       </div>
  //   </div>
  //   <div class="stage-container">
  //       <span class="stage-text">Третья стадия</span>
  //       <div class="dots-container">
  //           <div class="dot green">3</div>
  //           <div class="dot brown">4</div>
  //           <div class="dot blue">0</div>
  //       </div>
  //   </div>`;
  //   currentState.innerHTML += html;
  // })

  // iogSothoth.addEventListener('click', () => {
  //   const html = 
  //   `<div class="stage-container">
  //   <span class="stage-text">Первая стадия</span>
  //   <div class="dots-container">
  //       <div class="dot green">1</div>
  //       <div class="dot brown">2</div>
  //       <div class="dot blue">1</div>
  //   </div>
  //   </div>
  //   <div class="stage-container">
  //       <span class="stage-text">Вторая стадия</span>
  //       <div class="dots-container">
  //           <div class="dot green">3</div>
  //           <div class="dot brown">2</div>
  //           <div class="dot blue">1</div>
  //       </div>
  //   </div>
  //   <div class="stage-container">
  //       <span class="stage-text">Третья стадия</span>
  //       <div class="dots-container">
  //           <div class="dot green">2</div>
  //           <div class="dot brown">4</div>
  //           <div class="dot blue">0</div>
  //       </div>
  //   </div>`;
  //   currentState.innerHTML += html;
  // })