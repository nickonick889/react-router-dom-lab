// src/App.jsx
//Define State: Create a mailboxes state initialized as an empty array.
//The addBox Function: Create a function that takes form data, assigns it an _id (current length + 1), and updates the state.
//Define Routes: Use <Routes> and <Route> to map your components to the paths requested (e.g., /, /mailboxes, /new-mailbox, and the dynamic /mailboxes/:mailboxId).
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { useState } from "react";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    formData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, formData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
