import React, { FC } from 'react';
import classnames from 'classnames';
import './styles.css';

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, text }) => (
  <button type="button" className={classnames('button', className)} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
