import React from 'react';
import { Styles } from './style';

interface ButtonProps {
  disabled?: boolean;
  label: string;
  onlyLabel?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ 
  disabled=false, 
  label, 
  onClick,
  onlyLabel=false
}: ButtonProps) =>
  <Styles.Button onlyLabel={onlyLabel} onClick={onClick} disabled={disabled} type='submit'>
    {label}
  </Styles.Button>

export default Button;