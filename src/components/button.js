import React from "react";
import { Button } from "semantic-ui-react";

let myButton = ({ active, children, onClick }) => (
  <Button onClick={onClick} disabled={active} size="mini">
    {children}
  </Button>
);

export default myButton;
