import React from 'react'

interface HomeButtonProps {
    text: string;
    onClick?: () => void;
}
const HomeButton:React.FC<HomeButtonProps>=(props)=> {
  return (
    <button onClick={props.onClick}>
     {props.text}
    </button>
  )
}

export default HomeButton
