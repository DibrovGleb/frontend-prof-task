const dataPrimaryBtn = [
  { size: 56, text: 'Большой текст очень слишком ну перебор' },
  { size: 56, text: 'Большой текст очень слишком ну перебор', state: 'loading' },
  { size: 56, text: 'Большой текст очень слишком ну перебор', state: 'disabled' },
  { size: 56, counter: true },
  { size: 56, state: 'loading', counter: true },
  { size: 56, state: 'disabled', counter: true },
  { size: 36, text: 'Большой текст очень слишком ну перебор' },
  { size: 36, text: 'Большой текст очень слишком ну перебор', state: 'loading' },
  { size: 36, text: 'Большой текст очень слишком ну перебор', state: 'disabled' },
  { size: 36, counter: true },
  { size: 36, state: 'loading', counter: true },
  { size: 36, state: 'disabled', counter: true },
  { size: 28, text: 'Большой текст очень слишком ну перебор' },
  { size: 28, text: 'Большой текст очень слишком ну перебор', state: 'loading' },
  { size: 28, text: 'Большой текст очень слишком ну перебор', state: 'disabled' },
  { size: 28, counter: true },
  { size: 28, state: 'loading', counter: true },
  { size: 28, state: 'disabled', counter: true },

]
const dataSecondaryBtn = dataPrimaryBtn.map(x => ({ ...x, type: 'secondary' }))

export { dataPrimaryBtn, dataSecondaryBtn }