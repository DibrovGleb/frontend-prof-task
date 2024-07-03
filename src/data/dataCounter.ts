const dataPrimaryCounter = [
  { size: 24 },
  { size: 24, quantity: 123 },
  { size: 24, stroke: false },
  { size: 20 },
  { size: 20, quantity: 50 },
  { size: 20, stroke: false },
  { size: 16 },
  { size: 16, quantity: 99 },
  { size: 16, stroke: false },
  { size: 12 },
  { size: 12, quantity: '1253' },
  { size: 12, stroke: false },
  { size: 8 },
  { size: 8, quantity: '222' },
  { size: 8, stroke: false },
  { size: 12, pulse: true },
  { size: 12, quantity: '0000', pulse: true },
  { size: 12, stroke: false, pulse: true },
  { size: 8, pulse: true },
  { size: 8, quantity: '2232', pulse: true },
  { size: 8, stroke: false, pulse: true },
]
const dataSecondaryCounter = dataPrimaryCounter.map(x => ({ ...x, type: 'secondary' }))

export { dataPrimaryCounter, dataSecondaryCounter }