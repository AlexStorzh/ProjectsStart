const classes = [
 {
  name: 'Rogue',
  picture: ' ',
  attributes: [],
  description: "Rogue   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi beatae exercitationem. Neque, quod voluptatum accusantium, odio blanditiis odit mollitia aliquid fugiat optio maxime deleniti ea! Cupiditate, doloribus soluta? Odio",
  hitDie: 8,
 },
 {
  name: 'Monk',
  picture: ' ',
  attributes: [],
  description: "Rogue   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi beatae exercitationem. Neque, quod voluptatum accusantium, odio blanditiis odit mollitia aliquid fugiat optio maxime deleniti ea! Cupiditate, doloribus soluta? Odio",
  hitDie: 8,
 },
 {
  name: 'Warrior',
  picture: ' ',
  attributes: [],
  description: "Warrior   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi beatae exercitationem. Neque, quod voluptatum accusantium, odio blanditiis odit mollitia aliquid fugiat optio maxime deleniti ea! Cupiditate, doloribus soluta? Odio",
  hitDie: 10,
 },
 {
  name: 'Bard',
  picture: ' ',
  attributes: [],
  description: "Bard   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi beatae exercitationem. Neque, quod voluptatum accusantium, odio blanditiis odit mollitia aliquid fugiat optio maxime deleniti ea! Cupiditate, doloribus soluta? Odio!",
  hitDie: 8,
 },
 {
  name: 'Wizard',
  picture: ' ',
  attributes: [],
  description: "Mage   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi beatae exercitationem. Neque, quod voluptatum accusantium, odio blanditiis odit mollitia aliquid fugiat optio maxime deleniti ea! Cupiditate, doloribus soluta? Odio!",
  hitDie: 6,
 },
]
const race = [
 {
  race: 'Human',
  attributes: [1, 1, 1, 1, 1, 1],
  description: 'Human receive +1 for all attributes'
 },
 {
  race: 'Dwarf',
  attributes: [2, 0, 2, 0, 2, 0],
  description: 'Dwarf receive +2 for Strange, Constitution and Wisdom'
 },
 {
  race: 'Elf',
  attributes: [0, 2, 0, 2, 1, 1],
  description: 'Elf receive +2 for Dexterity and Intelligence, and +1 for Wisdom & Charisma'
 },
]
const attributesName = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
const skills = [
 {
  name: 'Acrobatic',
  attribute: 'DEX',
  value: ''
 },
 {
  name: 'Aerophobic',
  attribute: 'DEX',
  value: ''
 },
 {
  name: 'Animal Handling',
  attribute: 'WIS',
  value: ''
 },
 {
  name: 'Arcana',
  attribute: 'INT',
  value: ''
 },
 {
  name: 'Athletics',
  attribute: 'STR',
  value: ''
 },
 {
  name: 'Deception',
  attribute: 'CHA',
  value: ''
 },
 {
  name: 'History',
  attribute: 'INT',
  value: ''
 },
 {
  name: 'Insight',
  attribute: 'WIS',
  value: ''
 },
 {
  name: 'Intimidation',
  attribute: 'Cha',
  value: ''
 },
 {
  name: 'Investigation',
  attribute: 'INT',
  value: ''
 },
 {
  name: 'Medicine',
  attribute: 'WIS',
  value: ''
 },
 {
  name: 'Nature',
  attribute: 'INT',
  value: ''
 },
 {
  name: 'Perception',
  attribute: 'WIS',
  value: ''
 },
 {
  name: 'Performance',
  attribute: 'CHA',
  value: ''
 },
 {
  name: 'Persuasion',
  attribute: 'CHA',
  value: ''
 },
 {
  name: 'Religion',
  attribute: 'INT',
  value: ''
 },
 {
  name: 'Sleight of Hand',
  attribute: 'DEX',
  value: ''
 },
 {
  name: 'Stealth',
  attribute: 'DEX',
  value: ''
 },
 {
  name: 'Survival',
  attribute: 'WIS',
  value: ''
 },
]
export  {classes, race, attributesName, skills}