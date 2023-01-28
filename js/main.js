const questions = [
  {
    quest: '1',
    question:
      'W naszej parafi prowadzone są spotkania oazowe dla dzieci. Wymień imiona animatorek',
    answerA: 'Aga, Marta, Daniela, Kasia',
    answerB: 'Ania, Beatka, Renata, Sylwia',
    answerC: 'Beatka, Magda, Ania, Krysia',
    answerD: 'Robert, Beatka, Jacek, Ania',
    correctAnswer: 'answerB',
  },
  {
    quest: '2',
    question:
      'Jak się nazywa dezodorant dla księży pasujący do każdego rodzaju sutanny?',
    answerA: 'SacroDeo',
    answerB: 'Rexona',
    answerC: 'Nivea',
    answerD: 'Sure',
    correctAnswer: 'answerA',
  },
  {
    quest: '3',
    question: 'Gdzie zostawiliśmy kamień Agi Pięty?',
    answerA: 'Rzym',
    answerB: 'Fatima',
    answerC: 'San Giovanii Rotondo',
    answerD: 'Feltham',
    correctAnswer: 'answerC',
  },
  {
    quest: '4',
    question: 'Co możesz kupić w naszej kawiarence?',
    answerA: 'Pierogi',
    answerB: 'Rosół',
    answerC: 'Ciasto które sam upiekłeś',
    answerD: 'Kawę z ekspresu',
    correctAnswer: 'answerC',
  },
  {
    quest: '5',
    question:
      'Pytanie muzyczne. Do czego zachęca słynny hit muzyczny Feltham „ Zapisz się ….”',
    answerA: 'do Grupy Lektorów',
    answerB: 'do Scholi',
    answerC: 'do Ministrantów',
    answerD: 'na Gift Aid',
    correctAnswer: 'answerD',
  },
  {
    quest: '6',
    question: 'W jakiej intencji NIE modlą się nasze róże różańcowe',
    answerA: 'Mężów',
    answerB: 'Żony',
    answerC: 'Parafię',
    answerD: 'Dzieci',
    correctAnswer: 'answerB',
  },
  {
    quest: '7',
    question: 'Ile ławek jest w kościele na Feltham',
    answerA: '54',
    answerB: '55',
    answerC: '56',
    answerD: '57',
    correctAnswer: 'answerB',
  },
  {
    quest: '8',
    question:
      'Kogo przedstawia figura na załączonej fotografii znajdującej się przy schodach na chór',
    answerA: 'Św Józefa',
    answerB: 'Św Wawrzyńca',
    answerC: 'Św Antoniego',
    answerD: 'Św Franciszka',
    correctAnswer: 'answerA',
  },
  {
    quest: '9',
    question: 'Jak poprawnie przetłumaczyć "Hi" w kościele na Feltham',
    answerA: 'Dzień Dobry',
    answerB: 'Witaj',
    answerC: 'Cześć',
    answerD: 'Niech będzie pochwalony Jezus Chrystus',
    correctAnswer: 'answerD',
  },
  {
    quest: '10',
    question:
      'Feltham to miejsce gdzie pomysł jeszcze nie zostal powiedziany a już jest...',
    answerA: 'Zrealizowany',
    answerB: 'Ogarnięty',
    answerC: 'Zaplanowany',
    answerD: 'Obalony',
    correctAnswer: 'answerA',
  },
  {
    quest: '11',
    question: 'Jak nazywa się staw pzy kosściele na Feltham',
    answerA: 'The Feltham Pond',
    answerB: 'The Greennes',
    answerC: 'The Green Pond',
    answerD: 'The Green',
    correctAnswer: 'answerD',
  },
  {
    quest: '12',
    question: 'Jaki Pasterz takie...',
    answerA: 'Pielgrzymki',
    answerB: 'Modlitwy',
    answerC: 'Owce',
    answerD: 'Gory',
    correctAnswer: 'answerC',
  },
]

const selectedMusic = new Audio('./sound/final_answer.mp3')
const correctMusic = new Audio('./sound/correct_answer.mp3')
const wrongMusic = new Audio('./sound/wrong_answer.mp3')
const themeMusic = new Audio('./sound/main_theme.mp3')
const phoneMusic = new Audio('./sound/phone_friend.mp3')
const letsPlay = new Audio('./sound/lets_play.mp3')

const startBtn = document.querySelector('#startBtn')
startBtn.addEventListener('click', () => startBtnClicked())

const phoneHelp = document.querySelector('#phone')
const helpPeopleModal = document.querySelector('#help-people')
const allHelp = document.querySelectorAll('.help')
const allAnswers = document.querySelectorAll('.answer')
const allAnswersText = document.querySelectorAll('.text')
const allScoreLi = document.querySelectorAll('.score-li')
const play = document.querySelector('#play')
const nextBtn = document.querySelector('#next-question')

const questionText = document.querySelector('#text')
const answerA = document.querySelector('.answerA')
const answerB = document.querySelector('.answerB')
const answerC = document.querySelector('.answerC')
const answerD = document.querySelector('.answerD')

// questionPlayed 11
let questionPlayed = 11
let nextReady = false
let phone = false
let canSelect = false
let musicplays = false
console.log(questions)

const start = () => {
  allAnswers.forEach((e) =>
    e.addEventListener('click', (item) => selectAnswer(item))
  )
  allHelp.forEach((h) => {
    h.classList.remove('used')
    h.addEventListener('click', (hh) => helpClicked(hh))
  })
  play.style.display = 'none'
  play.addEventListener('click', () => checkQuestion())
  nextBtn.addEventListener('click', () => revealAnswer())

  allScoreLi.forEach((y) => {
    y.classList.remove('current-question')
    y.children[2].classList.remove('played')
  })
  allScoreLi[questionPlayed].classList.add('current-question')
  allScoreLi[questionPlayed].children[2].classList.add('played')
  nextQestion()
}

const nextQestion = () => {
  // if (questionPlayed === 4) {
  //   document.querySelector('#q-image-2').style.display = 'block'
  // } else {
  //   document.querySelector('#q-image-2').style.display = 'none'
  // }
  if (questionPlayed === 9) {
    document.querySelector('#q-image').style.display = 'block'
  } else {
    document.querySelector('#q-image').style.display = 'none'
  }
  if (questionPlayed === 0) {
    document.querySelector('.vid-wrap').style.display = 'block'
  } else {
    document.querySelector('.vid-wrap').style.display = 'none'
  }

  correctMusic.pause()
  correctMusic.currentTime = 0
  letsPlay.currentTime = 0
  letsPlay.play()
  setTimeout(() => {
    themeMusic.currentTime = 0
    themeMusic.play()
    musicplays = true
  }, 4500)
  canSelect = true
  phoneHelp.style.display = 'none'
  helpPeopleModal.style.display = 'none'
  play.style.display = 'none'
  allAnswersText.forEach((i) => i.classList.remove('correctAnswer'))
  allAnswers.forEach((e) => {
    e.classList.remove('correct')
    e.classList.remove('selected')
    e.addEventListener('click', (item) => selectAnswer(item))
  })
  allScoreLi.forEach((y) => {
    y.classList.remove('current-question')
  })
  allScoreLi[questionPlayed].classList.add('current-question')
  allScoreLi[questionPlayed].children[2].classList.add('played')
  const playQ = 11 - questionPlayed
  questionText.innerHTML = questions[playQ].question
  answerA.innerHTML = 'A: ' + questions[playQ].answerA
  answerB.innerHTML = 'B: ' + questions[playQ].answerB
  answerC.innerHTML = 'C: ' + questions[playQ].answerC
  answerD.innerHTML = 'D: ' + questions[playQ].answerD
  allAnswersText.forEach((a) => {
    if (a.classList.contains(questions[playQ].correctAnswer))
      a.classList.add('correctAnswer')
    // if( a.classList.contains(''))
    // a.classList.contains(
    //   questions[playQ].correctAnswer && a.classList.add('correctAnswer')
    // )
    nextReady = false
  })
}

const selectAnswer = (item) => {
  if (!canSelect) return

  clearInterval(timeTimer)
  letsPlay.pause()
  phoneMusic.pause()
  allAnswers.forEach((e) => e.classList.remove('selected'))
  if (
    item.target.classList.contains('text') ||
    item.target.classList.contains('answer-border')
  ) {
    item.target.parentElement.classList.add('selected')
    play.style.display = 'block'
    themeMusic.pause()
    themeMusic.currentTime = 0
    selectedMusic.play()
    return
  } else {
    item.target.classList.add('selected')
    play.style.display = 'block'
    themeMusic.pause()
    themeMusic.currentTime = 0
    selectedMusic.play()
  }
}

const checkQuestion = () => {
  themeMusic.pause()
  selectedMusic.pause()
  selectedMusic.currentTime = 0
  canSelect = false
  if (
    document
      .querySelector('.selected')
      .children[1].classList.contains('correctAnswer')
  ) {
    correctMusic.play()
    questionPlayed -= 1
    nextReady = true
    play.style.display = 'none'
    if (questionPlayed === -1) {
      winning()
    }
  } else {
    play.style.display = 'none'
    wrongMusic.play()
    console.log(document.querySelector('.correctAnswer'))
    document
      .querySelector('.correctAnswer')
      .parentElement.classList.add('correct')
    questionPlayed -= 1
    nextReady = true
  }
}

const revealAnswer = () => {
  console.log(musicplays)
  console.log(nextReady)
  if (phone) {
    themeMusic.pause()
    musicplays = false
    phoneMusic.currentTime = 11
    phoneMusic.play()
    startTimer()
    phone = false
    return
  }
  if (musicplays && !nextReady) {
    themeMusic.pause()
    themeMusic.currentTime = 0
    musicplays = false
    return
  }
  if (nextReady) {
    correctMusic.pause()
    correctMusic.currentTime = 0
    phoneMusic.pause()
    phoneMusic.currentTime = 0
    musicplays = false
    nextQestion()
  } else {
    themeMusic.currentTime = 0
    themeMusic.play()
    musicplays = true
  }
}

const helpClicked = (h) => {
  if (
    h.target.classList.contains('used') ||
    h.target.parentElement.classList.contains('used')
  ) {
    return
  }
  if (
    h.target.classList.contains('help-50') ||
    h.target.parentElement.classList.contains('help-50')
  ) {
    help50(h)
  }
  if (
    h.target.classList.contains('help-people') ||
    h.target.parentElement.classList.contains('help-people')
  ) {
    helpPeople()
  }

  if (
    h.target.classList.contains('help-tel') ||
    h.target.parentElement.classList.contains('help-tel')
  ) {
    document.querySelector('.help-tel').classList.add('used')
    phoneHelp.style.display = 'block'
    phone = true
    themeMusic.pause()
    musicplays = false
  }
}
let timeTimer
const startTimer = () => {
  let timer = 30
  timeTimer = setInterval(() => {
    let seconds = parseInt(timer % 60, 10)
    seconds = seconds < 10 ? '0' + seconds : seconds
    document.querySelector('#phone').innerHTML = seconds
    if (--timer < 0) {
      timer = 0
    }
  }, 1000)
}

const help50 = () => {
  document.querySelector('.help-50').classList.add('used')
  const wrongA = Array.from(allAnswersText).filter(
    (w) => !w.classList.contains('correctAnswer')
  )
  wrongA[0].innerHTML = ''
  wrongA[1].innerHTML = ''
}

const helpPeople = () => {
  helpPeopleModal.style.display = 'flex'
  document.querySelector('.help-people').classList.add('used')
  const wrongA = Array.from(allAnswersText).filter(
    (w) => !w.classList.contains('correctAnswer')
  )
  console.log(wrongA)
  console.log(wrongA[0].classList[1].slice(6))
  // const first0 = document.querySelector(
  //   `.graf${wrongA[0].classList[1].slice(6)} > .column > .c-graf`
  // )
  // first0.style.height = '5%'
  // const first1 = document.querySelector(
  //   `.graf${wrongA[1].classList[1].slice(6)} > .column > .c-graf`
  // )
  // first1.style.height = '15%'
  // const first2 = document.querySelector(
  //   `.graf${wrongA[2].classList[1].slice(6)} > .column > .c-graf`
  // )
  // first2.style.height = '25%'

  setTimeout(() => {
    wrongA.forEach((w, i) => {
      const x = document.querySelector(`.graf${w.classList[1].slice(6)}`)
      x.children[0].innerHTML = `${11 - questionPlayed + i * 8}%`
      x.children[1].children[0].style.height = `${11 - questionPlayed + i * 8}%`
    })
    const rightA = document.querySelector('.correctAnswer')
    const grafCorrect = document.querySelector(
      `.graf${rightA.classList[1].slice(6)}`
    )
    const wrongPerc =
      11 - questionPlayed + 11 - questionPlayed + 8 + 11 - questionPlayed + 16
    grafCorrect.children[0].innerHTML = `${100 - wrongPerc}%`
    grafCorrect.children[1].children[0].style.height = `${100 - wrongPerc}%`
    console.log(grafCorrect)
  }, 3000)
}

const video = document.querySelector('#video')
const playVideoBtn = document.querySelector('#playV')
const pauseVideoBtn = document.querySelector('#pauseV')
playVideoBtn.addEventListener('click', () => playMovie())
pauseVideoBtn.addEventListener('click', () => pauseMovie())

let maxTime = 25
const playMovie = () => {
  video.play()
}
video.addEventListener(
  'timeupdate',
  function () {
    console.log(video.currentTime)
    if (video.currentTime >= maxTime) {
      video.pause()
      maxTime = 30
    }
  },
  false
)
const pauseMovie = () => {
  video.pause()
}

import { startCon } from './confetti.js'
const winning = () => {
  document
    .querySelectorAll('body > div')
    .forEach((d) => (d.style.dispay = 'none'))
  document.querySelector('.vid-wrap').style.display = 'none'
  document.querySelector('#score').style.display = 'none'
  document.querySelector('#question').style.display = 'none'
  document.querySelector('#winning').style.display = 'block'
  document.querySelector('#confetti-canvas').style.display = 'block'
  startCon()
}
const startBtnClicked = () => {
  startBtn.style.display = 'none'
  document.querySelector('#score').style.display = 'block'
  document.querySelector('#question').style.display = 'block'
  start()
}
