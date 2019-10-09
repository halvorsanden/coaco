import { locale, dictionary, getClientLocale } from 'svelte-i18n'

dictionary.set({
  nb: {
    'switch.lang': 'Norsk',
    intro: {
      logo: 'sjokologo',
      title: 'Sjokolator',
      message: 'Regn om sjokolade fra vekt til biter. Fyll ut alle feltene, resten gjør sjokolatoren for deg.',
    },
    footer: {
      disclaimer: 'Sjokolator tar ikke ansvar for eventuell mislykket kokkelering.',
      experiment: 'Sjokolator er et JavaScript-eksperiment bygget med',
      version: 'Versjon'
    },
    form: {
      weight: 'Hvor mange gram skal du ha?',
      barweight: 'Hvor mange gram veier en plate?',
      pcsrow: 'Antall ruter per rad',
      rows: 'Antall rader per plate'
    },
    result: {
      whenall: 'Resultatet kommer når alle feltene er utfylt.',
      wholebar: 'Her må du bruke hele platen.',
      youneed: 'Du trenger',
      only: 'bare',
      and: 'og',
      squares: '{n, plural, =1 {rute} other {ruter}}',
      bars: '{n, plural, =1 {plate} other {plater}}',
      rows: '{n, plural, =1 {rad} other {rader}}',
      total: 'Totalt',
      bad: 'Nå blir resultatet mindre enn en hel rute. Ser ut som du har en sjokolade med kjempestore ruter eller en dårlig oppskrift. Er en oppskrift som krever mindre enn en hel sjokoladebit noe å bry med?'
    }
  },
  en: {
    'switch.lang': 'English',
    intro: {
      logo: 'sjokologo-en',
      title: 'Chocolator',
      message: 'Converts weight to number of pieces of chocolate. Complete the form, use the same weight unit in both fields, and the Chocolator does the rest.',
    },
    footer: {
      disclaimer: 'Chocolator is not responsible for any kitchen failures.',
      experiment: 'Chocolator is a JavaScript experiment built with',
      version: 'Version'
    },
    form: {
      weight: 'Weight of chocolate in the recipe',
      barweight: 'How much does one bar weigh?',
      pcsrow: 'Squares per row',
      rows: 'Rows per bar'
    },
    result: {
      whenall: 'The result will appear as soon as the form is complete.',
      wholebar: 'Use the whole bar, actually.',
      youneed: 'You\'ll need',
      only: 'only',
      and: 'and',
      squares: '{n, plural, =1 {square} other {squares}}',
      bars: '{n, plural, =1 {bar} other {bars}}',
      rows: '{n, plural, =1 {row} other {rows}}',
      total: 'Total:',
      bad: 'By my calculations, that\'s actually less than a whole square. That\'s either quite a big bar or a lousy recipe.'
    }
  },
})

locale.set(
  getClientLocale({
    navigator: true,
    hash: 'lang',
    fallback: 'en',
  }),
)

// locale.subscribe(l => {
//   console.log('locale change', l)
// })