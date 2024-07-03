import { CounterProps } from '../../types/Props';
import './Counter.sass';

export default function Counter({ clr, type = 'primary', size = 8, stroke = true, pulse = false, quantity }: CounterProps) {
  const small = size <= 12;
  const mainClr = clr || (type == 'primary' ? '#2FB675' : '#8366561F');

  const countStyles = {
    height: `${size}px`,
    width: `${size}px`,
    fontSize: `${size > 20 ? 15 : small ? 11 : 13}px`,
    fontWeight: `${size < 20 ? 800 : 500}`,
    //padding: `${size > 20 ? 6 : small ? 0 : 4}px`,
    border: `${stroke ? Math.ceil(size / 10) + 'px solid ' + mainClr : ''}`,
    background: mainClr
  }

  return (
    <div className={'count-shell-' + type} style={countStyles}>
      {pulse && small &&
        <>
          <div className="pulse one" style={{ width: `${size}px`, height: `${size}px` }}></div>
          <div className="pulse two" style={{ width: `${size}px`, height: `${size}px` }}></div>
        </>}
      {!small && (typeof quantity == 'number' ? quantity > 99 ? '99+' : quantity < -99 ? '-99' : quantity : quantity?.slice(0, 3) || 0)}
    </div >
  )
}