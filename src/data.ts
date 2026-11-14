export type Donut = {
  id: string
  name: string
  blurb: string
  price: number
  glaze: string
  icing: string
  hole: string
  tag?: string
}

export type BuilderOption = {
  id: string
  label: string
  price: number
  color?: string
}

export const FEATURED: Donut[] = [
  {
    id: 'midnight-maple',
    name: 'Midnight Maple',
    blurb: 'Yeast ring, maple glaze, toasted pecan crunch.',
    price: 3.75,
    glaze: '#C47A2C',
    icing: '#E8B86D',
    hole: '#1A1614',
    tag: 'Signature',
  },
  {
    id: 'cherry-asphalt',
    name: 'Cherry Asphalt',
    blurb: 'Dark chocolate cake, cherry glaze, cocoa nibs.',
    price: 3.95,
    glaze: '#FF3D6E',
    icing: '#2A1A1F',
    hole: '#1A1614',
    tag: 'Fan favorite',
  },
  {
    id: 'city-sprinkle',
    name: 'City Sprinkle',
    blurb: 'Vanilla yeast, sugar shell, confetti crunch.',
    price: 3.5,
    glaze: '#FFF4E8',
    icing: '#FFE8F0',
    hole: '#1A1614',
  },
  {
    id: 'uptown-waffle',
    name: 'Uptown Waffle',
    blurb: 'Waffle yeast, apple filling, cream cheese frost.',
    price: 4.25,
    glaze: '#F5C84C',
    icing: '#FFF1D6',
    hole: '#1A1614',
    tag: 'Limited',
  },
  {
    id: 'smokestack-mocha',
    name: 'Smokestack Mocha',
    blurb: 'Espresso glaze, chocolate fill, sea salt flake.',
    price: 4.1,
    glaze: '#5C3A2E',
    icing: '#3D241C',
    hole: '#1A1614',
  },
  {
    id: 'berry-boulevard',
    name: 'Berry Boulevard',
    blurb: 'Lemon cake, blueberry glaze, freeze-dried berry.',
    price: 3.85,
    glaze: '#2F6FBF',
    icing: '#8EB8E8',
    hole: '#1A1614',
  },
]

export const BASES: BuilderOption[] = [
  { id: 'yeast', label: 'Yeast ring', price: 2.5, color: '#E8C9A0' },
  { id: 'cake', label: 'Cake old-fashioned', price: 2.75, color: '#C9A06A' },
  { id: 'long-john', label: 'Long john', price: 2.85, color: '#D4B896' },
  { id: 'filled', label: 'Filled bismarck', price: 3.0, color: '#DEB887' },
]

export const GLAZES: BuilderOption[] = [
  { id: 'classic', label: 'Classic sugar', price: 0, color: '#FFF4E8' },
  { id: 'cherry', label: 'Cherry glaze', price: 0.5, color: '#FF3D6E' },
  { id: 'maple', label: 'Maple', price: 0.5, color: '#C47A2C' },
  { id: 'chocolate', label: 'Dark chocolate', price: 0.6, color: '#3D241C' },
  { id: 'lemon', label: 'Lemon zest', price: 0.45, color: '#F5C84C' },
]

export const TOPPINGS: BuilderOption[] = [
  { id: 'none', label: 'No topping', price: 0 },
  { id: 'sprinkles', label: 'City sprinkles', price: 0.4 },
  { id: 'pecan', label: 'Toasted pecan', price: 0.55 },
  { id: 'bacon', label: 'Candied bacon', price: 0.75 },
  { id: 'cocoa', label: 'Cocoa nibs', price: 0.5 },
  { id: 'berry', label: 'Freeze-dried berry', price: 0.55 },
]

export const DRIZZLES: BuilderOption[] = [
  { id: 'none', label: 'No drizzle', price: 0 },
  { id: 'caramel', label: 'Salted caramel', price: 0.4 },
  { id: 'cream', label: 'Cream cheese', price: 0.45 },
  { id: 'raspberry', label: 'Raspberry', price: 0.4 },
]

export const HOURS = [
  { day: 'Mon–Fri', time: '6:00a – 2:00p' },
  { day: 'Saturday', time: '7:00a – 2:00p' },
  { day: 'Sunday', time: '7:00a – 1:00p' },
]

export const LOCATION = {
  name: 'Uptown Counter',
  address: '2805 Allen Street, Suite 119',
  city: 'Dallas, TX 75204',
  phone: '(469) 444-1302',
}
