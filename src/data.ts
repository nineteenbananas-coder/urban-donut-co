export type Ring = {
  id: string
  name: string
  blurb: string
  finish: string
  price: number
  glaze: string
  icing: string
  campaignDay?: string
}

export const RINGS: Ring[] = [
  {
    id: 'wide-wonder',
    name: 'Wide Wonder',
    blurb: 'Vanilla bean icing drowned in pearl sugar.',
    finish: '200g icing sugar, milk, vanilla bean paste, pearl sugar before it sets.',
    price: 3.5,
    glaze: '#F6F3EC',
    icing: '#FFFDF8',
    campaignDay: 'Monday',
  },
  {
    id: 'beam',
    name: 'Beam',
    blurb: 'White chocolate pour with one edible-gold stripe.',
    finish: 'White chocolate + cream, then a gold-dust stripe down the ring.',
    price: 4.25,
    glaze: '#F3D27A',
    icing: '#FFF1C2',
    campaignDay: 'Friday',
  },
  {
    id: 'rubble',
    name: 'Rubble',
    blurb: 'Browned-butter crumb, smoked salt, thin honey.',
    finish: 'Nutty crumb baked at 160°C, stuck with honey while warm.',
    price: 3.95,
    glaze: '#C4A574',
    icing: '#8B6914',
  },
  {
    id: 'night-shift',
    name: 'Night Shift',
    blurb: 'Espresso black cocoa. Dipped twice. Nearly ink.',
    finish: 'Strong espresso + black cocoa icing, double dip.',
    price: 3.75,
    glaze: '#1A1816',
    icing: '#2C2824',
  },
  {
    id: 'nurses-round',
    name: "Nurses Round",
    blurb: 'Hot milk icing. Nothing else. Warm ring only.',
    finish: 'Icing sugar and hot milk. One dip while warm.',
    price: 3.25,
    glaze: '#F6F3EC',
    icing: '#EDE6D8',
  },
  {
    id: 'mirror',
    name: 'Mirror',
    blurb: 'Glass sheet glaze. Chilled ring. No fingerprints.',
    finish: 'Gelatine mirror glaze poured at 30°C over a cold ring.',
    price: 4.5,
    glaze: '#6FD6E6',
    icing: '#B8F0F8',
  },
]

export const CAMPAIGN = [
  {
    day: 'Monday',
    time: '6:15pm',
    title: 'Wide Wonder',
    caption:
      'On the day I was born, the nurses all gathered round and they gazed in wide wonder. It was not a slice.',
  },
  {
    day: 'Tuesday',
    time: '6:15pm',
    title: 'The Hole',
    caption:
      'Pizza fills a plate. A donut keeps the sky in the middle. Friday. The dozen.',
  },
  {
    day: 'Wednesday',
    time: '12:10pm',
    title: 'The Gaze',
    caption:
      "Leave this one alone. She could tell it wasn't pizza. Rainbow in the glass. Glaze on the ring. Tomorrow.",
  },
  {
    day: 'Thursday',
    time: '11:00am',
    title: 'The Dozen',
    caption:
      'The dozen. Six rings. Zero slices. Wide Wonder. Beam. Rubble. Night Shift. Nurses Round. Mirror.',
  },
  {
    day: 'Friday',
    time: '4:00pm',
    title: 'The Beam',
    caption:
      'The beam opens. One dozen. If you wanted a slice, the city still has plenty.',
  },
  {
    day: 'Sunday',
    time: 'Hold',
    title: 'No film',
    caption: 'No film. Reply to anyone who asks for a slice.',
  },
]

export const HASHTAGS = ['#UrbanDonut', '#WideWonder', '#NotASlice']
