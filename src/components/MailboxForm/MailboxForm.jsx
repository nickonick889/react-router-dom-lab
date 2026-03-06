//MailboxForm.jsx (The Input)

// State: Use local state to track the boxOwner (text input) and boxSize (select menu with Small, Medium, Large).

// Submission: When the form submits, call the addBox function passed down from App.

// Redirect: Use the useNavigate hook to send the user to /mailboxes after they click submit.

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate("/mailboxes");
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          id="boxOwner"
          type="text"
          value={boxOwner}
          onChange={(e) => setBoxOwner(e.target.value)}
          required
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
