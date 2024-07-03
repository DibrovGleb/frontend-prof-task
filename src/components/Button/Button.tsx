import { ButtonProps } from '@/types/Props';
import './Button.sass';
import Counter from '../Counter/Counter';
import ProgressIndicator from './LoadingIcn';

export default function Button({ click, text = 'Что сделать', type = 'primary',
  size = 36, state = 'enabled', counter = false, quantity }: ButtonProps) {
  const [hp, vp, hg, cls, mw, fs] = size >= 56 ? [16, 16, 8, 24, 131, 17] :
    size >= 36 ? [12, 8, 6, 20, 112, 15] : [10, 6, 4, 16, 96, 13];

  const mainClr = type == 'primary' ? '#FFFFFF1F' : '#8366561F';

  const btnStyles = {
    padding: `${hp}px ${vp}px`,
    gap: `${hg}px`,
    minWidth: `${mw}px`,
    fontSize: `${fs}px`,
  }

  return (
    <button onClick={click} className={'btn-' + type + ' ' + state}
      style={btnStyles} disabled={state == 'disabled' || state.includes('disabled')} >
      <ProgressIndicator size={cls}
        clr={type == 'primary' ? '#fff' : '#2E2F33'} />
      <>
        <label>{text}</label>
        {counter && <Counter clr={mainClr} size={cls} quantity={quantity} />}
      </>
    </button>
  )
}