import React from "react";

let Button = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
);

export default Button;
