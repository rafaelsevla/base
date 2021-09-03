import React from 'react';

export const Button = ({ background, title, onClick }) => (
  <>
    <button style={{ height: 50, width: 100, background }} onClick={onClick}>
      {title}
    </button>
  </>
)