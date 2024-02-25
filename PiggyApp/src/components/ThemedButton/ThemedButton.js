import React from 'react';
import './ButtonPrimary.css';
import './ButtonDanger.css';
import './ButtonSecondary.css';

const ThemedButton = ({variant, initialValue, onClick='', icon, style}) => {
  const secondStyle = style;
  return (
    <button className={variant} onClick={onClick} style={style}>
      {icon && <i className={icon}></i>} {initialValue}
    </button>
  );
};

export default ThemedButton;