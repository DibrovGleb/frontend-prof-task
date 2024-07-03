interface GeneralProps {
  type?: string,
  size?: number,
  quantity?: string | number
}
export interface ButtonProps extends GeneralProps {
  click?: ()=>void,
  text?: string,
  state?: string,
  counter?: boolean,
  focused?: boolean
}

export interface CounterProps extends GeneralProps {
  clr?: string,
  stroke?: boolean,
  pulse?: boolean,
}

