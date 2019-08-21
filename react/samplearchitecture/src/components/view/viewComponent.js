import React, { useState } from "react";
import AlertDialog from "../dialog/dialogComponent";
const ViewComponent = props => {
  const clickMe = () => {
    alert("Yes, I am clicked!");
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <ul>
        <li>{props.data.customerId}</li>
        <li>{props.data.customerName}</li>
        <li>{props.data.customerAge}</li>
        <li>{props.data.customerCountry}</li>
      </ul>
      <button onClick={() => setDialogOpen(true)}>Dialog</button>
      <AlertDialog open={dialogOpen} setDialogOpen={setDialogOpen} />
    </div>
  );
};

export default ViewComponent;
